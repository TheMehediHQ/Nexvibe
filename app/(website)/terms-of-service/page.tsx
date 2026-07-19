import Link from "next/link";
import { ArrowLeft, Scale, Zap, Briefcase, Layers, ShieldAlert, AlertCircle, CheckCircle2 } from "lucide-react";

interface TermSection {
  id: string;
  icon: any;
  title: string;
  paragraphs: string[];
  highlights?: string[];
}

const terms: TermSection[] = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By browsing or using Nexvibe's web platform (the 'Site') or engaging our digital agency services, you agree to comply with and be bound by these Terms of Service ('Terms').",
      "If you are entering into this agreement on behalf of a company or legal entity, you confirm that you possess full legal authority to bind such entity to these Terms.",
      "If you do not agree with any portion of these Terms, you must refrain from utilizing our website or contracting our agency services.",
    ],
    highlights: [
      "Binding legal agreement upon site or service usage",
      "Applies to corporate entities and individual clients",
    ],
  },
  {
    id: "services",
    icon: Zap,
    title: "2. Scope of Services",
    paragraphs: [
      "Nexvibe provides digital product design, web application development, AI integrations, brand strategy, and technical consulting.",
      "Specific deliverables, project milestones, payment schedules, and performance specifications are formally executed via a written Statement of Work (SOW) or proposal.",
      "Any requests for features, design iterations, or technical functionality exceeding the defined SOW will require a written Scope Change Addendum with adjusted cost and timeline estimations.",
    ],
    highlights: [
      "Formally defined SOW for every project engagement",
      "Transparent Change Order process for out-of-scope requests",
    ],
  },
  {
    id: "intellectual-property",
    icon: Scale,
    title: "3. Intellectual Property Rights",
    paragraphs: [
      "Upon full and final settlement of all project invoices, Nexvibe transfers full ownership and IP rights of all final custom design files, visual assets, and application source code created specifically for the client.",
      "Nexvibe retains rights to any pre-existing code libraries, developer tools, reusable internal components, and proprietary algorithms incorporated into the work.",
      "Unless explicitly restricted by a signed Non-Disclosure Agreement (NDA), Nexvibe reserves the right to display completed client projects in our digital portfolio and promotional case studies.",
    ],
    highlights: [
      "100% IP transfer upon full invoice clearance",
      "Pre-existing agency frameworks remain agency property",
      "Portfolio showcase rights unless covered by active NDA",
    ],
  },
  {
    id: "client-responsibilities",
    icon: Briefcase,
    title: "4. Client Obligations",
    paragraphs: [
      "Clients agree to provide prompt feedback, necessary brand assets, copywriting, credentials, and technical access required to meet scheduled milestones.",
      "Delays in feedback or asset delivery exceeding 10 business days may result in project schedule adjustments or queue reallocation.",
      "Clients warrant that all materials, trademarks, copy, and images provided to Nexvibe are fully owned or properly licensed, protecting Nexvibe from third-party copyright claims.",
    ],
    highlights: [
      "Prompt feedback ensures milestone commitments",
      "Client guarantees copyright clearance for provided assets",
    ],
  },
  {
    id: "payments",
    icon: Layers,
    title: "5. Compensation & Billing",
    paragraphs: [
      "Project billing occurs according to the milestone schedule established in your SOW (typically deposit upfront, milestone checkpoints, and final balance prior to launch).",
      "Invoices are payable within net 14 calendar days of issuance unless otherwise agreed in writing.",
      "Invoices overdue by more than 15 business days may incur late interest fees (1.5% monthly) and temporary suspension of active development until accounts are settled.",
    ],
    highlights: [
      "Standard milestone-based payment schedules",
      "Net 14 payment terms with automatic pause on overdue invoices",
    ],
  },
  {
    id: "liability",
    icon: ShieldAlert,
    title: "6. Limitation of Liability",
    paragraphs: [
      "Services are provided on an 'as-is' and 'as-available' basis following client final user acceptance testing (UAT).",
      "To the maximum extent permitted by applicable law, Nexvibe shall not be held liable for indirect, incidental, special, or consequential damages (including loss of profits or business downtime).",
      "Nexvibe's total aggregate liability for any claims arising out of or related to these Terms or services rendered shall not exceed the total fees paid by the client under the applicable project contract.",
    ],
    highlights: [
      "Total liability capped at project contract value",
      "Protection against indirect or consequential damages",
    ],
  },
  {
    id: "termination",
    icon: AlertCircle,
    title: "7. Termination & Amendments",
    paragraphs: [
      "Either party may terminate a project contract by providing 14 days written notice if the other party commits a material breach of terms.",
      "Upon termination, the client pays for all completed milestones and work rendered up to the effective termination date.",
      "Nexvibe reserves the right to amend these Terms at any time. Continued use of our website or services constitutes acceptance of amended Terms.",
    ],
    highlights: [
      "14-day notice for material breach termination",
      "Pro-rated payment for completed milestones",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Header */}
      <section className="border-b border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-[var(--muted)] max-w-2xl leading-relaxed">
            Terms and conditions governing our digital agency services, client contracts, and technical deliverables.
          </p>
          <p className="mt-4 text-xs font-mono text-blue-400">
            Last revised: July 19, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                  Terms Index
                </h2>
                <nav className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                  {terms.map((term) => (
                    <a
                      key={term.id}
                      href={`#${term.id}`}
                      className="hover:text-white transition-colors py-1 truncate"
                    >
                      {term.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Static Content Blocks */}
            <div className="lg:col-span-8 space-y-10">
              {terms.map((term) => {
                const Icon = term.icon;
                return (
                  <article
                    key={term.id}
                    id={term.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 p-6 sm:p-8 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{term.title}</h2>
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed text-[var(--muted)] pt-2">
                      {term.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {term.highlights && (
                      <div className="mt-4 rounded-xl bg-blue-500/5 border border-blue-500/10 p-4">
                        <ul className="space-y-1.5">
                          {term.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-white">
                              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
