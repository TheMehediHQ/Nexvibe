import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import ApplicationForm from "@/components/ui/ApplicationForm";
import { JOBS, getJobById } from "@/lib/jobs";

export function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }));
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-6 text-sm font-semibold tracking-[0.2em] text-blue-500">
      {children}
    </h2>
  );
}

function CardList({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-gray-300">
          <Check size={18} className="mt-1 shrink-0 text-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    notFound();
  }

  const Icon = job.icon;
  const similar = JOBS.filter((j) => j.id !== job.id).slice(0, 3);

  return (
    <div className="pb-16">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0c0c0e]">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Link>

          <div className="mt-6 flex flex-col gap-6 lg:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#0070f3] ring-1 ring-white/10 sm:h-16 sm:w-16">
                <Icon size={28} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-blue-500 sm:text-sm">
                  {job.department}
                </p>
                <h1 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  {job.title}
                </h1>
              </div>
            </div>

           

<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div className="flex flex-wrap gap-2">
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300">
      {job.jobType}
    </span>

    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300">
      {job.workplaceType}
    </span>
  </div>

  <Link href="#apply" className="w-full sm:w-auto">
    <Button variant="primary">
      Apply Now
    </Button>
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* MAIN + SIDEBAR */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="space-y-12 lg:col-span-2 lg:space-y-14">
            {/* 2. ABOUT THIS POSITION */}
            <section>
              <SectionHeading>About This Position</SectionHeading>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                {job.description?.map((p) => (
                  <p key={p}>{p}</p>
                )) ?? <p>{job.skills}</p>}
              </div>
            </section>

            {/* 3. RESPONSIBILITIES */}
            <section>
              <SectionHeading>Responsibilities</SectionHeading>
              <CardList items={job.responsibilities} />
            </section>

            {/* 4. REQUIREMENTS */}
            <section>
              <SectionHeading>Requirements</SectionHeading>
              <CardList items={job.requirements} />
            </section>

            {/* 5. BENEFITS */}
            <section className="rounded-2xl border border-white/10 bg-[#141414] p-8">
              <SectionHeading>Benefits</SectionHeading>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                {job.benefits?.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            </section>

            {/* 7. APPLICATION FORM */}
            <section id="apply">
              <SectionHeading>Apply for this position</SectionHeading>
              <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
                <ApplicationForm jobTitle={job.title} />
              </div>
            </section>
          </div>

          {/* 6. STICKY SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="space-y-6 rounded-2xl border border-white/10 bg-[#141414] p-6 lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-white">
                Job Summary
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Salary
                  </p>
                  <p className="mt-1 font-medium text-white">
                    {job.salaryMin} – {job.salaryMax}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 font-medium text-white">
                    {job.experience}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Deadline
                  </p>
                  <p className="mt-1 font-medium text-white">{job.deadline}</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Skills
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {job.skills}
                </p>
              </div>

              <Link href="#apply" className="block">
                <Button variant="primary" className="w-full justify-center">
                  Apply Now
                </Button>
              </Link>
            </div>
          </aside>
        </div>

        {/* 8. SIMILAR POSITIONS */}
        <section className="mt-20">
          <SectionHeading>Similar Positions</SectionHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => (
              <div
                key={s.id}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#0070f3]">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {s.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {s.salaryMin} – {s.salaryMax}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {s.experience}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Deadline · {s.deadline}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {s.skills}
                </p>

                <div className="mt-auto pt-6 flex justify-center">
                  <Link href={`/careers/${s.id}`}>
                    <Button variant="primary">Apply Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
