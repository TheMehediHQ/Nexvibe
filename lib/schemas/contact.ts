import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name is too long." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name is too long." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  company: z
    .string()
    .max(100, { message: "Company name is too long." })
    .optional()
    .or(z.literal("")),
  phoneNumber: z
    .string()
    .max(20, { message: "Phone number is too long." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message is too long (max 2000 characters)." }),
  website: z.string().optional(), // Honeypot field (hidden from real users, bots will fill it)
});

export type ContactInput = z.infer<typeof contactSchema>;
