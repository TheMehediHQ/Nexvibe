import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Cookie, Bell, UserCheck, CheckCircle2, LucideIcon } from "lucide-react";

interface PolicySection {
  id: string;
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  keyPoints?: string[];
}

const sections: PolicySection[] = [
  {
    id: "collection",
    icon: Database,
    title: "1. Information We Collect",
    paragraphs: [
      "We collect personal information directly provided by you when filling out contact forms, booking discovery calls, requesting project proposals, subscribing to our insights, or communicating with us directly.",
      "This includes personal identifiers such as your full name, business email address, phone number, company name, project details, budget parameters, and any custom message content you provide.",
      "Automated collection includes technical diagnostics, IP addresses, browser types, device information, operating system metadata, referring URLs, and user interaction metrics via standard secure cookies.",
    ],
    keyPoints: [
      "Direct input: Forms, bookings, and emails",
      "Technical metrics: IP, browser, device specs",
      "Zero unauthorized background profiling",
    ],
  },
  {
    id: "usage",
    icon: Eye,
    title: "2. How We Use Your Information",
    paragraphs: [
      "We use collected information to design, build, and deploy tailored digital agency solutions and software products for your business.",
      "To process inquiries, deliver custom technical estimates, execute project contracts, and maintain transparent project management.",
      "To communicate critical service updates, technical milestones, deliverable previews, security notices, and administrative invoices.",
      "To analyze site performance, optimize user experience, and ensure high availability across all Nexvibe digital touchpoints.",
    ],
    keyPoints: [
      "Executing design & software development projects",
      "Direct project updates & administrative notices",
      "Optimizing platform speed & client experience",
    ],
  },
  {
    id: "sharing",
    icon: Lock,
    title: "3. Data Sharing & Third Parties",
    paragraphs: [
      "Nexvibe maintains a strict confidentiality policy. We do not sell, rent, trade, or monetize your personal or company data under any circumstances.",
      "We share limited data with trusted third-party infrastructure providers (such as cloud hosting servers, CRM tools, email dispatch systems, and project management applications) solely to execute business operations.",
      "All third-party vendors are vetted to adhere to enterprise-grade encryption and stringent privacy standards.",
      "Legal disclosures are made strictly when required by law, subpoena, court order, or to protect the safety and legal rights of Nexvibe and our clients.",
    ],
    keyPoints: [
      "Zero monetization or sale of client data",
      "Vetted infrastructure partners under strict NDAs",
      "Legal disclosure only when mandated by law",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "4. Cookies & Tracking",
    paragraphs: [
      "Nexvibe uses essential cookies to enable core website features, maintain session integrity, and secure web interactions.",
      "Analytical cookies help us evaluate page traffic and performance, allowing us to continuously improve our design and technical documentation.",
      "You can manage cookie settings directly within your browser preferences at any time.",
    ],
    keyPoints: [
      "Essential cookies required for core site functionality",
      "Analytics cookies for aggregate performance metrics",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "5. Security & Data Retention",
    paragraphs: [
      "We implement bank-grade technical and organizational safeguards—including 256-bit SSL/TLS encryption, multi-factor authentication, role-based access controls, and secure database hosting.",
      "We retain personal data only for as long as necessary to fulfill project deliverables, maintain tax compliance, resolve disputes, and honor active agreements.",
      "Upon project completion or client request, unused sensitive credentials and temporary project data are permanently purged.",
    ],
    keyPoints: [
      "256-bit SSL encryption across all channels",
      "Role-based access & multi-factor authentication",
      "Routine purging of temporary credentials",
    ],
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "6. Your Privacy Rights",
    paragraphs: [
      "You have the right to request a copy of the personal data Nexvibe holds about you.",
      "You have the right to request corrections to incomplete or inaccurate data, or request complete erasure ('right to be forgotten').",
      "You can opt out of promotional communications at any time with a single click or by reaching out directly to our team.",
    ],
    keyPoints: [
      "Right to access and export your data",
      "Right to correction or permanent erasure",
      "Instant opt-out from communications",
    ],
  },
  {
    id: "updates",
    icon: Bell,
    title: "7. Policy Updates",
    paragraphs: [
      "We periodically review and update this Privacy Policy to ensure alignment with global privacy regulations and operational updates.",
      "Material changes will be highlighted with a revised 'Last Updated' timestamp at the top of this policy document.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Header */}
      <section className="border-b border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-[var(--muted)] max-w-2xl leading-relaxed">
            Transparent information about how Nexvibe handles, protects, and respects your personal and business data.
          </p>
          <p className="mt-4 text-xs font-mono text-blue-400">
            Last updated: July 19, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                  Contents
                </h2>
                <nav className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="hover:text-white transition-colors py-1 truncate"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Static Content Blocks */}
            <div className="lg:col-span-8 space-y-10">
              {sections.map((sec) => {
                const Icon = sec.icon;
                return (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 p-6 sm:p-8 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{sec.title}</h2>
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed text-[var(--muted)] pt-2">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.keyPoints && (
                      <div className="mt-4 rounded-xl bg-blue-500/5 border border-blue-500/10 p-4">
                        <ul className="space-y-1.5">
                          {sec.keyPoints.map((kp, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-white">
                              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                              {kp}
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
