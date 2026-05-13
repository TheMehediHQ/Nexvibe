'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const softBorder = 'color-mix(in srgb, var(--text) 16%, transparent)';
  const strongBorder = 'color-mix(in srgb, var(--text) 24%, transparent)';
  const softSurface = 'color-mix(in srgb, var(--text) 4%, var(--bg) 96%)';
  const mutedDivider = 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--text) 16%, transparent), transparent)';
  const badgeText = 'color-mix(in srgb, var(--text) 94%, var(--bg) 6%)';

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] py-14 md:py-18"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] rotate-45 text-[3rem] font-light leading-none text-[var(--accent)] max-md:text-[2.2rem]">
        +
      </div>
      <div className="pointer-events-none absolute right-[10%] top-[56%] rotate-12 text-[3rem] font-light leading-none text-[var(--accent)] max-md:text-[2.2rem]">
        +
      </div>

      <div className="container relative z-10 w-full max-w-[1160px]">
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.76rem] font-semibold tracking-[0.14em]"
            style={{ border: `1px solid ${softBorder}`, color: badgeText }}
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Nexvibe</span>
          </div>

          <h1 className="sectionTitleGlobal mb-0 max-w-[760px]">
            Creative Web
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-center">
            <h1 className="sectionTitleGlobal mb-0">
              Agency
            </h1>

            <div
              className="inline-flex items-center rounded-full px-2 py-1"
              style={{ border: `1px solid ${strongBorder}`, background: softSurface }}
            >
              <div className="relative flex items-center">
                <Image
                  src="/profile/profile.png"
                  alt="Nexvibe team avatar"
                  width={46}
                  height={46}
                  className="h-11 w-11 rounded-full object-cover"
                  style={{ border: `1px solid ${softBorder}` }}
                  priority
                />
                <div
                  className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[0.7rem] font-semibold text-[var(--bg)]"
                  style={{ border: `1px solid ${softBorder}` }}
                >
                  US
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-[520px] text-[0.98rem] leading-[1.7] text-[var(--text-secondary)] md:text-[1.04rem]">
            We craft clean, modern websites for US-focused brands that want a
            stronger presence, sharper messaging, and better-quality leads.
          </p>

          <div data-hero-strip className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book-call" className="btn-primary">
              <FiCalendar size={16} />
              <span>Book a Call</span>
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              <FiArrowUpRight size={16} />
              <span>View Work</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.9rem] text-[var(--text-secondary)]">
            <span>Brand Identity</span>
            <span className="text-[var(--accent)]">+</span>
            <span>Web Design</span>
            <span className="text-[var(--accent)]">+</span>
            <span>Web Development</span>
            <span className="text-[var(--accent)]">+</span>
            <span>Website Management</span>
          </div>

          <div className="mt-12 h-px w-full max-w-[760px]" style={{ background: mutedDivider }} />
        </div>
      </div>
    </section>
  );
}
