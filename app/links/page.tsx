import type { Metadata } from "next";
import LinksPageClient from "./LinksPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/links",
  title: "Social & Professional Links | Nova 01 Labs",
  description:
    "Find Nova 01 Labs across GitHub, LinkedIn, YouTube, and other platforms.",
  keywords: ["Nova 01 Labs links", "agency social profiles", "GitHub LinkedIn portfolio"],
});

export default function LinksPage() {
  return <LinksPageClient />;
}
