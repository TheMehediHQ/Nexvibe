"use client";

import type { Certificate } from "@/lib/site-data";
import CertificationsSection from "@/app/features/certifications/CertificationsSection";

type CertificationsProps = {
  certificates: Certificate[];
};

export default function Certifications({ certificates }: CertificationsProps) {
  return (
    <CertificationsSection
      certificates={certificates}
      title="Achievements"
      highlight=" & Certifications"
      sectionId="certifications"
      showViewAllButton
      limit={3}
      openCredentialInModal
    />
  );
}
