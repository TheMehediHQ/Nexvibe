import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { createPageMetadata } from "@/lib/seo";
import { getExperienceItems } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About Nova 01 Labs",
  description:
    "Learn how Nova 01 Labs works, what we build, and the delivery process behind our agency projects.",
  keywords: ["About Nova 01 Labs", "web agency background", "agency process"],
});

export default function AboutPage() {
  const experiences = getExperienceItems();

  return <AboutPageClient experiences={experiences} />;
}
