"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { rateLimit } from "@/lib/rate-limit";
import { ContactEmail } from "@/components/emails/ContactEmail";
import { ConfirmationEmail } from "@/components/emails/ConfirmationEmail";
import * as React from "react";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact.nexvibe@gmail.com";
const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

export async function sendContactEmail(data: ContactInput) {
  try {
    // 1. Validate form fields server-side with Zod
    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      const errorMessages = validation.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return {
        success: false,
        error: `Validation failed: ${errorMessages}`,
      };
    }

    const { firstName, lastName, email, company, phoneNumber, message, website } =
      validation.data;

    // 2. Honeypot check for spam protection
    // If the hidden 'website' field contains a value, we assume it's a bot submission.
    // We return success to fool the bot, but do not send the email or waste resources.
    if (website && website.trim() !== "") {
      console.warn("Honeypot triggered! Bot submission detected and ignored.");
      return {
        success: true,
        message: "Message processed successfully.",
      };
    }

    // 3. Rate limiting check using client's IP address
    const headersList = await headers();
    const clientIp =
      headersList.get("x-forwarded-for")?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      "127.0.0.1";

    // Limit to 3 requests per 2 minutes per IP
    const limitResult = rateLimit(clientIp, 3, 2 * 60 * 1000);
    if (!limitResult.success) {
      return {
        success: false,
        error: "Too many requests. Please wait a minute or two before sending another message.",
      };
    }

    // 4. Send email to Admin and Confirmation email to User concurrently
    const fromAddress = senderEmail === "onboarding@resend.dev"
      ? "onboarding@resend.dev"
      : `Nexvibe <${senderEmail}>`;

    const [adminMailResult, userMailResult] = await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: receiverEmail,
        replyTo: email,
        subject: `Nexvibe Contact: ${firstName} ${lastName} - ${company || "No Company"}`,
        react: React.createElement(ContactEmail, {
          firstName,
          lastName,
          email,
          company,
          phoneNumber,
          message,
        }),
      }),
      resend.emails.send({
        from: fromAddress,
        to: email, // This is the user's email address they entered!
        subject: `We've received your message, ${firstName}!`,
        react: React.createElement(ConfirmationEmail, {
          firstName,
        }),
      }),
    ]);

    // Admin email is critical for the contact form functionality
    if (adminMailResult.error) {
      console.error("Resend Admin Email Error:", adminMailResult.error);
      return {
        success: false,
        error: "Failed to send the message. Our servers encountered an issue.",
      };
    }

    // If confirmation email fails (e.g. sandbox domain restrictions), log it but don't fail form submission
    if (userMailResult.error) {
      console.warn(
        "Resend User Confirmation Email Error (possibly due to Sandbox constraints):",
        userMailResult.error
      );
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you shortly.",
    };
  } catch (error) {
    console.error("Unexpected error in contact action:", error);
    return {
      success: false,
      error: "An unexpected error occurred while processing your request.",
    };
  }
}
