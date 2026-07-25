import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";

import CareerNotificationEmail from "@/emails/CareerNotificationEmail";
import CareerConfirmationEmail from "@/emails/CareerConfirmationEmail";
import { careerFormSchema, HONEYPOT_FIELD } from "@/lib/validations";
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

    const rateLimit = await checkRateLimit(`careers:${ip}`);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // --- Parse FormData (handles file upload) ---
    const formData = await request.formData();

    // --- Honeypot check ---
    if (formData.get(HONEYPOT_FIELD)) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // --- Extract fields ---
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const headline = (formData.get("headline") as string) || "";
    const coverLetter = (formData.get("coverLetter") as string) || "";
    const position = formData.get("position") as string;
    const turnstileToken = formData.get("turnstileToken") as string;
    const resumeFile = formData.get("resume") as File | null;

    // --- Zod validation ---
    const parsed = careerFormSchema.safeParse({
      firstName,
      lastName,
      email,
      phone,
      headline,
      coverLetter,
      position,
      resume: resumeFile ?? undefined,
      [HONEYPOT_FIELD]: formData.get(HONEYPOT_FIELD) as string,
      turnstileToken,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { firstName: fn, lastName: ln, email: em, phone: ph, position: pos, coverLetter: cl } =
      parsed.data;

    const name = `${fn} ${ln}`.trim();

    // --- Turnstile verification ---
    const turnstile = await verifyTurnstileToken(
      turnstileToken,
      ip !== "unknown" ? ip : undefined
    );
    if (!turnstile.success) {
      return NextResponse.json(
        { error: turnstile.error ?? "CAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // --- Prepare email data ---
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const careersToEmail = process.env.CAREERS_TO_EMAIL;

    if (!fromEmail || !careersToEmail) {
      console.error(
        "[careers] Missing RESEND_FROM_EMAIL or CAREERS_TO_EMAIL environment variable"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // --- Build attachment if resume was uploaded ---
    let attachments: {
      filename: string;
      content: Buffer;
      contentType: string;
    }[] = [];

    if (resumeFile && resumeFile.size > 0) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const contentType =
        resumeFile.type ||
        "application/octet-stream";

      attachments = [
        {
          filename: resumeFile.name,
          content: buffer,
          contentType,
        },
      ];
    }

    // --- Send notification email to the recruitment team ---
    const notificationHtml = render(
      CareerNotificationEmail({
        name,
        email: em,
        phone: ph,
        position: pos,
        coverLetter: cl,
        resumeFileName: resumeFile?.name,
      })
    );

    await resend.emails.send({
      from: fromEmail,
      to: careersToEmail,
      subject: "New Job Application",
      html: await notificationHtml,
      replyTo: em,
      attachments,
    });

    // --- Send confirmation email to the applicant ---
    const confirmationHtml = render(CareerConfirmationEmail({ name }));

    await resend.emails.send({
      from: fromEmail,
      to: em,
      subject: "Application Received",
      html: await confirmationHtml,
      replyTo: careersToEmail,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[careers] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
