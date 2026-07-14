'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    let threeScript: HTMLScriptElement | null = null;
    let vantaScript: HTMLScriptElement | null = null;

    const initVanta = () => {
      if ((window as any).VANTA && (window as any).THREE && heroRef.current) {
        if (vantaEffect) {
          vantaEffect.destroy();
        }
        vantaEffect = (window as any).VANTA.GLOBE({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x22d3ee,
          color2: 0x2563eb,
          backgroundAlpha: 0.0,
        });
      }
    };

    const loadVanta = () => {
      const existingVanta = document.getElementById('vanta-globe-script') as HTMLScriptElement;
      if (!existingVanta && !(window as any).VANTA) {
        vantaScript = document.createElement('script');
        vantaScript.id = 'vanta-globe-script';
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js';
        vantaScript.async = true;
        vantaScript.onload = () => {
          initVanta();
        };
        document.body.appendChild(vantaScript);
      } else {
        if ((window as any).VANTA) {
          initVanta();
        } else if (existingVanta) {
          if ((window as any).VANTA) {
            initVanta();
          } else {
            existingVanta.addEventListener('load', initVanta);
          }
        }
      }
    };

    const loadScripts = () => {
      if ((window as any).THREE) {
        loadVanta();
        return;
      }

      const existingThree = document.getElementById('three-js-script') as HTMLScriptElement;
      if (!existingThree) {
        threeScript = document.createElement('script');
        threeScript.id = 'three-js-script';
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.async = true;
        threeScript.onload = () => {
          loadVanta();
        };
        document.body.appendChild(threeScript);
      } else {
        if ((window as any).THREE) {
          loadVanta();
        } else {
          existingThree.addEventListener('load', loadVanta);
        }
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      const existingThree = document.getElementById('three-js-script') as HTMLScriptElement;
      if (existingThree) {
        existingThree.removeEventListener('load', loadVanta);
      }
      const existingVanta = document.getElementById('vanta-globe-script') as HTMLScriptElement;
      if (existingVanta) {
        existingVanta.removeEventListener('load', initVanta);
      }
    };
  }, []);

  const softBorder = 'color-mix(in srgb, var(--text) 16%, transparent)';
  const strongBorder = 'color-mix(in srgb, var(--text) 24%, transparent)';
  const softSurface = 'color-mix(in srgb, var(--text) 4%, var(--bg) 96%)';
  const mutedDivider = 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--text) 16%, transparent), transparent)';
  const badgeText = 'color-mix(in srgb, var(--text) 94%, var(--bg) 6%)';

  return (
    <section
      ref={heroRef}
      id='hero'
      className="relative flex min-h-screen items-center overflow-hidden bg-(--bg) py-14 md:py-18"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] rotate-45 text-[3rem] font-light leading-none text-(--accent) max-md:text-[2.2rem]">
        +
      </div>
      <div className="pointer-events-none absolute right-[10%] top-[56%] rotate-12 text-[3rem] font-light leading-none text-(--accent) max-md:text-[2.2rem]">
        +
      </div>

      <div className='flex justify-between items-center container relative z-10 w-full max-w-[1160px]'>


        <div className=" ">
          <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.76rem] font-semibold tracking-[0.14em]"
              style={{ border: `1px solid ${softBorder}`, color: badgeText }}
            >
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
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
                    className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-(--accent) text-[0.7rem] font-semibold text-(--bg)"
                    style={{ border: `1px solid ${softBorder}` }}
                  >
                    US
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-[520px] text-[0.98rem] leading-[1.7] text-(--text-secondary) md:text-[1.04rem]">
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.9rem] text-(--text-secondary)">
              <span>Brand Identity</span>
              <span className="text-(--accent)">+</span>
              <span>Web Design</span>
              <span className="text-(--accent)">+</span>
              <span>Web Development</span>
              <span className="text-(--accent)">+</span>
              <span>Website Management</span>
            </div>

            {/* <div className="mt-12 h-px w-full max-w-[760px]" style={{ background: mutedDivider }} /> */}
          </div>
        </div>
        <div className=''></div>
      </div>

    </section>
  );
}
