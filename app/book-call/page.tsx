import type { Metadata } from "next";
import BookCallPageClient from "./BookCallPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/book-call",
  title: "Book a Call | Nexvibe",
  description:
    "Book a discovery call with Nexvibe to discuss your web design, development, and growth goals.",
  keywords: [
    "book a call",
    "agency strategy call",
    "React Next.js consultation",
    "Nexvibe contact",
  ],
});

export default function BookCallPage() {
  return <BookCallPageClient />;
}
