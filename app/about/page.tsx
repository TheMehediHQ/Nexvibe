import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { createPageMetadata } from "@/lib/seo";
import { getExperienceItems } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About Nexvibe",
  description:
    "Learn how Nexvibe works, what we build, and the delivery process behind our agency projects.",
  keywords: ["About Nexvibe", "web agency background", "agency process"],
});

export default function AboutPage() {
  const experiences = getExperienceItems();

  return <AboutPageClient experiences={experiences} />;
}
