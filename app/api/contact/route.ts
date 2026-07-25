import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";

import ContactNotificationEmail from "@/emails/ContactNotificationEmail";
import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail";
import { contactFormSchema, HONEYPOT_FIELD } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting (by IP) ---
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimit = await checkRateLimit(`contact:${ip}`);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // --- Parse body ---
    const body = await request.json();

    // --- Honeypot check ---
    if (body[HONEYPOT_FIELD]) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // --- Zod validation ---
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, company, phone, message } =
      parsed.data;

    const name = `${firstName} ${lastName}`.trim();

    // --- Turnstile verification ---
    const turnstile = await verifyTurnstileToken(
      parsed.data.turnstileToken,
      ip !== "unknown" ? ip : undefined
    );
    if (!turnstile.success) {
      return NextResponse.json(
        { error: turnstile.error ?? "CAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // --- Send notification email to the site owner ---
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!fromEmail || !contactToEmail) {
      console.error(
        "[contact] Missing RESEND_FROM_EMAIL or CONTACT_TO_EMAIL environment variable"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const notificationHtml = await render(
      ContactNotificationEmail({ name, email, message, company, phone })
    );

    await resend.emails.send({
      from: fromEmail,
      to: contactToEmail,
      subject: "New Contact Form Submission",
      html: notificationHtml,
      replyTo: email,
    });

    // --- Send confirmation email to the visitor ---
    const confirmationHtml = await render(ContactConfirmationEmail({ name }));

    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We've received your message",
      html: confirmationHtml,
      replyTo: contactToEmail,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
