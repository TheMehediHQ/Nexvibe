'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUp, FiArrowUpRight, FiCalendar } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] py-10 md:py-12"
    >
      <div className="container relative z-10 w-full max-w-[1160px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(280px,400px)] lg:gap-14">
          <div className="max-w-[760px] mt-10 md:mt-0">
            <h1
              data-hero-line
              className="heroTitle text-[var(--text)] "
            >
              Vision Studio 23.
            </h1>
            <h1
              data-hero-line
              className="mt-1 heroTitle text-[var(--text)]"
            >
              Design.
            </h1>
            <h1
              data-hero-line
              className="mt-1 heroTitle text-[var(--text)]"
            >
              Development.
            </h1>
            <h1
              data-hero-line
              className="mt-1 heroTitle text-[var(--accent)]"
            >
              Growth Partner.
            </h1>

            <div data-hero-strip className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-call" className="btn-primary">
                <FiCalendar size={16} />
                <span>Book an Agency Call</span>
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                <FiArrowUpRight size={16} />
                <span>View Agency Work</span>
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[400px] lg:mx-0">
            <div
              data-hero-image
              className="relative overflow-hidden border border-[rgba(var(--accent-rgb),0.2)]  bg-transparent"
            >
              <Image
                src="/profile/profile.png"
                alt="Vision Studio 23 brand portrait"
                width={740}
                height={820}
                sizes="(max-width: 1024px) 85vw, 400px"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div
              data-hero-caption
              className="mt-2 flex items-center justify-between gap-3 text-[0.78rem] text-[var(--text-secondary)]"
            >
              <span className="inline-flex items-center gap-1 text-[0.86rem] font-medium tracking-[0.01em] text-[var(--text)]">
                <FiArrowUp size={14} aria-hidden="true" />
                Vision Studio 23
              </span>
              <a
              href="https://www.linkedin.com/in/mehedi-hasan1102/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-0 inline-flex items-center gap-2 text-[clamp(0.9rem,2.8vw,1.2rem)] font-semibold tracking-[0.01em] text-[var(--accent)] no-underline transition-all duration-300 [transition-timing-function:ease] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:content-[''] after:transition-[width] after:duration-300 after:[transition-timing-function:ease] hover:text-[var(--text)] hover:after:w-full"
            >
              <FaLinkedin size={18} />
              <span>Connect on LinkedIn</span>
              <FiArrowUpRight size={18} />
            </a>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
