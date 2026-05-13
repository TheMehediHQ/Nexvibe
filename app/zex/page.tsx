import type { Metadata } from "next";
import ZexPageClient from "./ZexPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/zex",
  title: "Marketplace Links | Nexvibe",
  description:
    "Find Nexvibe across active freelance marketplaces.",
  keywords: [
    "Nexvibe marketplace links",
    "freelance profile links",
    "Upwork Fiverr Freelancer PeoplePerHour Contra",
  ],
  noIndex: true,
});

export default function ZexPage() {
  return <ZexPageClient />;
}
