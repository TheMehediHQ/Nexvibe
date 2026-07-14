'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  FiCalendar,
  FiCheckSquare,
  FiClock,
  FiExternalLink,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiShield,
  FiUser,
  FiVideo,
} from 'react-icons/fi';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { useTheme } from '@/lib/useTheme';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/8801747874773';
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mehedi-hasan1102/strategy-consultation-call-20-minutes';

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

type ViewMode = 'book' | 'message';

const buildCalendlyEmbedUrl = (baseUrl: string, isDark: boolean) => {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('hide_gdpr_banner', '1');
    url.searchParams.set('hide_event_type_details', '1');
    url.searchParams.set('background_color', isDark ? '0b1020' : 'f3f4f6');
    url.searchParams.set('text_color', isDark ? 'e2e8f0' : '0b0e0f');
    url.searchParams.set('primary_color', isDark ? '06b6d4' : '2563eb');
    return url.toString();
  } catch {
    return baseUrl;
  }
};

export default function BookCallPageClient() {
  const { isDark } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const timestampRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('book');
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    budget: '',
    authority: '',
    need: '',
    urgency: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const calendlyEmbedUrl = useMemo(
    () => buildCalendlyEmbedUrl(CALENDLY_URL, isDark ?? true),
    [isDark]
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!formRef.current || !timestampRef.current) return;

      timestampRef.current.value = new Date().toLocaleString();
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);

      setSubmitStatus('success');
      setFormData({
        email: '',
        message: '',
        budget: '',
        authority: '',
        need: '',
        urgency: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const panelSurface = 'color-mix(in srgb, var(--text) 4%, var(--bg) 96%)';
  const panelSurfaceSoft = 'color-mix(in srgb, var(--text) 2%, var(--bg) 98%)';
  const panelSurfaceMid = 'color-mix(in srgb, var(--text) 6%, var(--bg) 94%)';
  const borderStrong = 'color-mix(in srgb, var(--text) 20%, transparent)';
  const borderSoft = 'color-mix(in srgb, var(--text) 14%, transparent)';
  const shadowColor = '0 30px 80px color-mix(in srgb, var(--bg) 72%, #000 28%)';

  return (
    <main
      className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
        <section className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h1 className="sectionTitleGlobal">
            Book a <span style={{ color: 'var(--accent)' }}>Call</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--text-secondary)]">
            Choose the fastest path for your project. Book a focused intro call through Calendly, or send a brief and get a direct response.
          </p>
        </section>

        <div
          className="mb-8 flex flex-col items-stretch gap-3 rounded-2xl border p-3 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
          style={{ borderColor: borderStrong, backgroundColor: panelSurfaceMid }}
        >
          <div
            className="grid w-full grid-cols-2 rounded-xl border p-1 sm:w-auto"
            style={{ borderColor: borderStrong, backgroundColor: panelSurfaceSoft }}
          >
            <button
              type="button"
              onClick={() => setViewMode('book')}
              className={`inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 text-[0.78rem] font-semibold tracking-[0.01em] transition-all duration-200 sm:h-11 sm:gap-2 sm:px-5 sm:text-sm ${viewMode === 'book'
                  ? 'bg-[rgba(var(--accent-rgb),0.2)] text-[var(--text)] shadow-[inset_0_0_0_1px_rgba(var(--accent-rgb),0.35)]'
                  : 'text-[var(--text-secondary)] hover:bg-[rgba(var(--accent-rgb),0.08)] hover:text-[var(--text)]'
                }`}
            >
              <FiCalendar size={15} className="shrink-0" />
              <span>Book a Call</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('message')}
              className={`inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 text-[0.78rem] font-semibold tracking-[0.01em] transition-all duration-200 sm:h-11 sm:gap-2 sm:px-5 sm:text-sm ${viewMode === 'message'
                  ? 'bg-[rgba(var(--accent-rgb),0.2)] text-[var(--text)] shadow-[inset_0_0_0_1px_rgba(var(--accent-rgb),0.35)]'
                  : 'text-[var(--text-secondary)] hover:bg-[rgba(var(--accent-rgb),0.08)] hover:text-[var(--text)]'
                }`}
            >
              <FiMessageSquare size={15} className="shrink-0" />
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)] sm:justify-end sm:gap-3">
            <a
              href="mailto:contact.nexvibe@gmail.com"
              className="rounded-full border p-2 transition-colors hover:text-[var(--text)]"
              style={{ borderColor: borderStrong }}
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mehedi-hasan1102"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-2 transition-colors hover:text-[var(--text)]"
              style={{ borderColor: borderStrong }}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://github.com/mehedi-hasan1102"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-2 transition-colors hover:text-[var(--text)]"
              style={{ borderColor: borderStrong }}
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://x.com/mehedihasan1102"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-2 transition-colors hover:text-[var(--text)]"
              style={{ borderColor: borderStrong }}
              aria-label="X"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        {viewMode === 'book' ? (
          <section
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: borderStrong, backgroundColor: panelSurface, boxShadow: shadowColor }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              <aside
                className="border-b p-4 text-[var(--text)] sm:p-6 lg:border-b-0 lg:border-r"
                style={{ borderColor: borderSoft }}
              >
                <div className="mb-6">
                  <Image
                    src="/profile/profile.png"
                    alt="Nexvibe profile"
                    width={44}
                    height={44}
                    className="rounded-full border object-cover"
                    style={{ borderColor: borderSoft }}
                  />
                </div>
                <p className="mb-1 text-sm text-[var(--text-secondary)]">Nexvibe</p>
                <h4 className="mb-2 text-[clamp(1.9rem,7vw,2.9rem)] font-semibold leading-[1.05]">Strategy & Consultation Call (20 Minutes)</h4>
                <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  A quick session to discuss your ideas, understand your needs, and identify the best strategy or next steps.

                </p>



                <div className="space-y-3 text-[0.95rem] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <FiCheckSquare size={15} />
                    <span>Instant booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock size={15} />
                    <span>20m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiVideo size={15} />
                    <span>Google Meet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiGlobe size={15} />
                    <span>Asia/Dhaka</span>
                  </div>
                </div>

                <div
                  className="mt-6 rounded-xl border p-4"
                  style={{ borderColor: borderSoft, backgroundColor: panelSurfaceSoft }}
                >
                  <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-[var(--text-secondary)]">
                    WHAT HAPPENS NEXT
                  </p>
                  <ol className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">1.</span>
                      Pick a time that works for you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">2.</span>
                      Get the calendar invite instantly.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">3.</span>
                      Join via Google Meet.
                    </li>
                  </ol>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[rgba(37,211,102,0.35)] bg-[rgba(37,211,102,0.1)] px-3 py-2 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[rgba(37,211,102,0.2)]"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp
                  </a>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                    style={{ borderColor: borderStrong }}
                  >
                    <FiExternalLink size={14} />
                    Open in Calendly
                  </a>
                </div>
              </aside>

              <div className="p-3 sm:p-4 md:p-5">
                <div
                  className="mb-3 rounded-lg border px-3 py-2 text-xs text-[var(--text-secondary)]"
                  style={{
                    borderColor: 'rgba(var(--accent-rgb),0.32)',
                    backgroundColor: 'rgba(var(--accent-rgb),0.1)',
                  }}
                >
                  Book directly inside this page. You can reschedule anytime from your confirmation email.
                </div>
                <div
                  className="overflow-hidden rounded-xl border"
                  style={{ borderColor: borderSoft, backgroundColor: panelSurfaceSoft }}
                >
                  <iframe
                    title="Calendly booking widget"
                    src={calendlyEmbedUrl}
                    className="h-[560px] w-full sm:h-[680px] md:h-[820px] min-[1400px]:h-[860px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            className="rounded-2xl border p-4 sm:p-6 md:p-8"
            style={{ borderColor: borderStrong, backgroundColor: panelSurface, boxShadow: shadowColor }}
          >
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-[280px_1fr]">
              <aside
                className="rounded-xl border p-4 sm:p-5 text-[var(--text)]"
                style={{ borderColor: borderSoft, backgroundColor: panelSurfaceSoft }}
              >
                <p className="mb-1 text-sm text-[var(--text-secondary)]">Nexvibe</p>

                <h4 className="mb-2 text-[clamp(1.9rem,7vw,2.9rem)] font-semibold leading-[1.05]">
                  Project Inquiry Form
                </h4>

                <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Share your project details, goals, and requirements. We will review your
                  submission and respond with the next steps.
                </p>

                <div className="space-y-3 text-[0.95rem] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <FiClock size={15} />
                    <span>Typical reply in 24 hours</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiPhone size={15} />
                    <span>Follow-up call if needed</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiShield size={15} />
                    <span>Your details stay private</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiUser size={15} />
                    <span>Directly reviewed by our strategy team</span>
                  </div>
                </div>

                <div
                  className="mt-6 rounded-xl border p-4"
                  style={{ borderColor: borderSoft, backgroundColor: panelSurface }}
                >
                  <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-[var(--text-secondary)]">
                    WHAT HAPPENS NEXT
                  </p>

                  <ol className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">1.</span>
                      Submit the inquiry form.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">2.</span>
                      We review your project details.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-(--accent)">3.</span>
                      You receive a reply with next steps.
                    </li>
                  </ol>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[rgba(37,211,102,0.35)] bg-[rgba(37,211,102,0.1)] px-3 py-2 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[rgba(37,211,102,0.2)]"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp
                  </a>
                  {/* View Form Button */}
                  <a
                    href="https://form.jotform.com/260627107187054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                    style={{ borderColor: borderStrong }}
                  >
                    <FiExternalLink size={14} />
                    Open form in new tab
                  </a>
                </div>
              </aside>

              {/* Jotform Embed Start */}
              <div className="rounded-xl border p-4 sm:p-6" style={{ borderColor: borderSoft, backgroundColor: panelSurfaceSoft }}>
                <iframe
                  title="Send Message Form"
                  src="https://form.jotform.com/260627107187054"
                  frameBorder="0"
                  style={{ width: '100%', minHeight: 700, border: 'none', background: 'transparent' }}
                  allowFullScreen
                />
              </div>
              {/* Jotform Embed End */}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
