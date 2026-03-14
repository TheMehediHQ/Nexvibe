import type { Metadata } from "next";
import ZexPageClient from "./ZexPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/zex",
  title: "Marketplace Links | Nova 01 Labs",
  description:
    "Find Nova 01 Labs across active freelance marketplaces.",
  keywords: [
    "Nova 01 Labs marketplace links",
    "freelance profile links",
    "Upwork Fiverr Freelancer PeoplePerHour Contra",
  ],
  noIndex: true,
});

export default function ZexPage() {
  return <ZexPageClient />;
}
