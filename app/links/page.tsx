import type { Metadata } from "next";
import LinksPageClient from "./LinksPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/links",
  title: "Social & Professional Links | Nexvibe",
  description:
    "Find Nexvibe across GitHub, LinkedIn, YouTube, and other platforms.",
  keywords: ["Nexvibe links", "agency social profiles", "GitHub LinkedIn portfolio"],
});

export default function LinksPage() {
  return <LinksPageClient />;
}
