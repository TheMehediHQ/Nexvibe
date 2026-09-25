"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Job } from "@/lib/jobs";

interface JobCardProps {
  job: Job;
  applyHref?: string;
  buttonText?: string;
}

export default function JobCard({
  job,
  applyHref = "/contact",
  buttonText = "Apply Now",
}: JobCardProps) {
  const Icon = job.icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#181818]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#0070f3]">
          <Icon size={20} />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wide text-white md:text-base">
          {job.title}
        </h3>
      </div>

      {/* Meta */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          Salary · {job.salaryMin} – {job.salaryMax}
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          Experience · {job.experience}
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          Deadline · {job.deadline}
        </span>

        <span className="text-sm font-semibold text-[var(--text-primary)] transition-colors [html.light_&]:text-[var(--text-primary)]">
          Opening Position: {job.openings ? job.openings.toString().padStart(2, "0") : "01"}
        </span>
      </div>

      {/* Skills */}
      <div className="mt-5">
        <h4 className="mb-2 text-sm font-semibold text-white">
          Skills
        </h4>

        <p className="text-sm leading-7 text-gray-400">
          {job.skills}
        </p>
      </div>

      {/* Button */}
      <div className="mt-auto pt-6 flex justify-center">
  <Link href={applyHref}>
    <Button variant="primary">
      {buttonText}
    </Button>
  </Link>
</div>
    </div>
  );
}