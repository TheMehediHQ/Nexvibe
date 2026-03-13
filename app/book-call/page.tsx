import type { Metadata } from "next";
import BookCallPageClient from "./BookCallPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/book-call",
  title: "Book a Call | Vision Studio 23",
  description:
    "Book a discovery call with Vision Studio 23 to discuss your web design, development, and growth goals.",
  keywords: [
    "book a call",
    "agency strategy call",
    "React Next.js consultation",
    "Vision Studio 23 contact",
  ],
});

export default function BookCallPage() {
  return <BookCallPageClient />;
}
