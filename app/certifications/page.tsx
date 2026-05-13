import type { Metadata } from "next";
import CertificationsSection from "@/app/features/certifications/CertificationsSection";
import { createPageMetadata } from "@/lib/seo";
import { getCertificates } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  path: "/certifications",
  title: "Certifications | Nexvibe",
  description:
    "Certifications that reflect continuous learning across modern frontend engineering and delivery.",
  keywords: [
    "Nexvibe certifications",
    "web development certificates",
    "frontend developer certifications",
  ],
});

export default function CertificationsPage() {
  const certificates = getCertificates();

  return (
    <CertificationsSection
      certificates={certificates}
      headingTag="h1"
      title="Achievements"
      highlight=" & Certifications"
      description="Certifications that reflect consistent upskilling across modern frontend development and product delivery."
      sectionId="certifications"
      openCredentialInModal
    />
  );
}
