import type { Metadata } from "next";
import LinksPageClient from "./LinksPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/links",
  title: "Social & Professional Links | Vision Studio 23",
  description:
    "Find Vision Studio 23 across GitHub, LinkedIn, YouTube, and other platforms.",
  keywords: ["Vision Studio 23 links", "agency social profiles", "GitHub LinkedIn portfolio"],
});

export default function LinksPage() {
  return <LinksPageClient />;
}
