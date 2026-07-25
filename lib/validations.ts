import { z } from "zod";

// Honeypot field name — bots will fill it, humans won't
export const HONEYPOT_FIELD = "website";

// ---------------------------------------------------------------------------
// Contact Form
// ---------------------------------------------------------------------------
export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000),
  [HONEYPOT_FIELD]: z.string().max(0, "Bot detected").optional(),
  turnstileToken: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// ---------------------------------------------------------------------------
// Careers / Job Application Form
// ---------------------------------------------------------------------------
export const careerFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").max(30),
  headline: z.string().max(200).optional().or(z.literal("")),
  coverLetter: z.string().max(5000).optional().or(z.literal("")),
  position: z.string().min(1, "Position is required").max(200),
  resume: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      "Resume must be 10MB or less"
    )
    .refine(
      (file) =>
        [".pdf", ".doc", ".docx"].includes(
          "." + file.name.split(".").pop()!.toLowerCase()
        ),
      "Resume must be a PDF, DOC, or DOCX file"
    )
    .optional(),
  [HONEYPOT_FIELD]: z.string().max(0, "Bot detected").optional(),
  turnstileToken: z.string().min(1, "CAPTCHA verification is required"),
});

export type CareerFormValues = z.infer<typeof careerFormSchema>;
