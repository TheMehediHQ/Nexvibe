'use client';

import { type ReactNode, useRef } from 'react';
import { useCardGlow } from '@/app/hooks/useCardGlow';

const testimonials = [
   {
      quote:
         'Delivered our landing page rebuild quickly, fixed conversion leaks, and kept communication clear every day.',
      name: 'Product Lead, SaaS Startup',
      impact: '+32% demo request rate in the first month',
   },
   {
      quote:
         'Our Next.js site became noticeably faster after the optimization pass and technical SEO cleanup.',
      name: 'Founder, Services Business',
      impact: 'Core Web Vitals moved to green on key pages',
   },
   {
      quote:
         'Refactored our React UI into reusable components so our team can ship updates much faster now.',
      name: 'CTO, Growth Team',
      impact: 'Release cycles reduced from weekly blockers to smooth sprints',
   },
];

const clientSignals = [
   'SaaS',
   'E-commerce',
   'Education',
   'Healthcare',
   'Agency White-label',
   'Personal Brands',
];

const pricing = [
   {
      service: 'Landing Page Conversion Optimization',
      price: 'Starts at $150',
   },
   {
      service: 'Next.js Performance & SEO Fix',
      price: 'Starts at $220',
   },
   {
      service: 'React UI Refactor for Scale',
      price: 'Starts at $300',
   },
];

const timeline = [
   'Discovery call: 20-30 minutes',
   'Audit and scope: 1-2 days',
   'Implementation: 3-7 days',
   'QA and handoff: 1 day',
];

type GlowCardProps = {
   children: ReactNode;
   className?: string;
};

function GlowCard({ children, className }: GlowCardProps) {
   const { cardRef, glowRef, handleMouseMove } = useCardGlow<HTMLDivElement>();

   return (
      <article
         ref={cardRef}
         className={`group relative overflow-hidden rounded-[24px] border border-[rgba(6,182,212,0.1)] bg-transparent [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${className ?? ''}`}
         onMouseMove={handleMouseMove}
      >
         <div
            ref={glowRef}
            className="card-glow"
         />

         <div className="relative z-[2] bg-[var(--card-bg,transparent)] p-6">{children}</div>

         <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]" />
      </article>
   );
}

export default function TrustSection() {
   const headerRef = useRef<HTMLDivElement>(null);

   return (
      <section
         id="trust"
         className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
         style={{ background: 'var(--bg)' }}
      >
         <div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
            <div ref={headerRef} className="mb-[clamp(2.5rem,5vw,5rem)] overflow-hidden text-center">
               <h2 className="sectionTitleGlobal">
                  Trust <span style={{ color: 'var(--accent)' }}>& Delivery</span>
               </h2>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
               {testimonials.map((item, index) => (
                  <GlowCard key={item.name}>
                     <div className="mb-3 flex items-start justify-between gap-3">
                        <span className="font-['Graphik',-apple-system,sans-serif] text-[2.2rem] font-bold leading-none text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)]">
                           {String(index + 1).padStart(2, '0')}
                        </span>
                     </div>
                     <p className="mb-4 text-[0.95rem] leading-[1.6] text-[var(--text-secondary)]">&ldquo;{item.quote}&rdquo;</p>
                     <p className="font-['Graphik',-apple-system,sans-serif] text-[0.95rem] tracking-[0.02em] text-[var(--text)]">{item.name}</p>
                     <p className="mt-2 text-[0.78rem] tracking-[0.03em] text-(--accent)">{item.impact}</p>
                  </GlowCard>
               ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
               <GlowCard>
                  <h3 className="mb-3 font-['Graphik',-apple-system,sans-serif] text-[1.1rem] tracking-[0.03em] text-(--accent)">
                     Client logos / signals
                  </h3>
                  <p className="mb-4 text-[0.9rem] text-[var(--text-secondary)]">
                     Public client logos are shared only with permission. Current delivery categories:
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {clientSignals.map((signal) => (
                        <span
                           key={signal}
                           className="rounded-full border border-[rgba(6,182,212,0.35)] bg-[rgba(6,182,212,0.08)] px-3 py-1 text-[0.75rem] tracking-[0.02em] text-[var(--text)]"
                        >
                           {signal}
                        </span>
                     ))}
                  </div>
               </GlowCard>

               <GlowCard>
                  <h3 className="mb-3 font-['Graphik',-apple-system,sans-serif] text-[1.1rem] tracking-[0.03em] text-(--accent)">
                     Pricing & timeline
                  </h3>
                  <div className="mb-5 space-y-2">
                     {pricing.map((item) => (
                        <div key={item.service} className="flex items-start justify-between gap-4 border-b border-[rgba(6,182,212,0.15)] pb-2">
                           <p className="text-[0.88rem] text-[var(--text-secondary)]">{item.service}</p>
                           <p className="text-[0.8rem] tracking-[0.02em] text-[var(--text)]">{item.price}</p>
                        </div>
                     ))}
                  </div>
                  <ul className="space-y-2">
                     {timeline.map((step) => (
                        <li key={step} className="text-[0.84rem] text-[var(--text-secondary)]">
                           - {step}
                        </li>
                     ))}
                  </ul>
               </GlowCard>
            </div>
         </div>
      </section>
   );
}
