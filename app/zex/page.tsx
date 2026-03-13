import type { Metadata } from "next";
import ZexPageClient from "./ZexPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/zex",
  title: "Marketplace Links | Vision Studio 23",
  description:
    "Find Vision Studio 23 across active freelance marketplaces.",
  keywords: [
    "Vision Studio 23 marketplace links",
    "freelance profile links",
    "Upwork Fiverr Freelancer PeoplePerHour Contra",
  ],
  noIndex: true,
});

export default function ZexPage() {
  return <ZexPageClient />;
}
