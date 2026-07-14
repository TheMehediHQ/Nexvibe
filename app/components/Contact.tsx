'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';

const sectionClassName =
    'relative overflow-hidden min-h-[80vh] flex items-center justify-center py-12 px-8 max-[1024px]:min-h-auto max-[1024px]:py-[clamp(2rem,5vw,4rem)] max-[1024px]:px-[clamp(1rem,3vw,2rem)] max-[768px]:py-[clamp(1.5rem,3vw,3rem)] max-[768px]:px-[clamp(1rem,2.5vw,1.5rem)] max-[600px]:py-[clamp(1.25rem,2.5vw,2.5rem)] max-[600px]:px-[clamp(0.875rem,2vw,1rem)] max-[480px]:py-[clamp(1rem,2vw,2rem)] max-[480px]:px-[clamp(0.75rem,1.5vw,0.875rem)] max-[360px]:py-[1.75rem] max-[360px]:px-[0.75rem]';

const emailClassName =
    "inline-block font-sans text-[clamp(1rem,3vw,40px)] font-medium leading-[1.4] not-italic tracking-[0.05em] text-(--accent) text-center mb-[clamp(2rem,4vw,4rem)] no-underline transition-all duration-300 [transition-timing-function:ease] break-words relative max-w-[100vw] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-[width] after:duration-300 after:[transition-timing-function:ease] hover:after:w-full hover:text-[var(--text)] max-[1024px]:text-[24px] max-[1024px]:leading-[36px] max-[1024px]:mb-[clamp(1.5rem,3vw,2.5rem)] max-[480px]:text-[clamp(0.95rem,2vw,1.75rem)] max-[480px]:leading-[clamp(1.75rem,3vw,2.5rem)] max-[480px]:mb-[clamp(1.25rem,2.5vw,3rem)]";

const footerGridClassName =
    'grid grid-cols-3 gap-[clamp(2rem,4vw,4rem)] mb-[clamp(2rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,3rem)] border-t border-b border-[rgba(6,182,212,0.1)] max-[1024px]:gap-[clamp(2rem,3vw,3rem)] max-[1024px]:py-[clamp(1.5rem,2vw,2.5rem)] max-[768px]:grid-cols-2 max-[768px]:gap-[clamp(1.5rem,2.5vw,2rem)] max-[768px]:py-[clamp(1.25rem,1.8vw,1.75rem)] max-[600px]:grid-cols-1 max-[600px]:gap-[clamp(1.25rem,2vw,1.75rem)] max-[600px]:py-[clamp(1rem,1.5vw,1.5rem)]';

const columnLabelClassName =
    "text-[clamp(0.65rem,1.2vw,0.875rem)] tracking-[0.04em] text-[var(--text-secondary)] mb-[clamp(0.875rem,1.5vw,1.5rem)] font-medium max-[1024px]:text-[clamp(0.7rem,1vw,0.8rem)] max-[1024px]:mb-[clamp(0.875rem,1.5vw,1.25rem)] max-[768px]:text-[clamp(0.9rem,1.3vw,1.1rem)] max-[768px]:mb-[clamp(0.75rem,1.2vw,1rem)] max-[360px]:text-[0.78rem] max-[360px]:mb-[0.625rem]";

const socialButtonsClassName =
    'flex gap-[clamp(1rem,2vw,2rem)] justify-center flex-wrap items-center max-[1024px]:gap-[clamp(1rem,1.5vw,1.75rem)] max-[768px]:gap-[clamp(0.875rem,1.5vw,1.25rem)] max-[480px]:gap-[clamp(0.65rem,1.1vw,0.875rem)]';

const socialLinkClassName =
    "text-[clamp(0.75rem,1.3vw,1rem)] tracking-[0.05em] text-[var(--text-secondary)] no-underline transition-all duration-300 [transition-timing-function:ease] cursor-pointer relative hover:text-(--accent) hover:-translate-y-[3px] max-[1024px]:text-[clamp(0.8rem,1.2vw,0.95rem)] max-[768px]:text-[clamp(0.9rem,1.3vw,1.05rem)] max-[360px]:text-[0.78rem]";

const locationCityClassName =
    "text-[clamp(1rem,1.8vw,1.25rem)] tracking-[0.03em] text-[var(--text)] font-medium max-[768px]:text-[clamp(1.05rem,1.5vw,1.2rem)]";

const locationCountryClassName =
    "text-[clamp(0.7rem,1vw,0.875rem)] tracking-[0.03em] text-[var(--text-secondary)] font-normal max-[768px]:text-[clamp(0.95rem,1.3vw,1.1rem)]";

const currentTimeClassName =
    "text-[clamp(0.7rem,1vw,0.875rem)] tracking-[0.05em] text-(--accent) font-semibold mt-[clamp(0.25rem,0.5vw,0.5rem)] max-[768px]:text-[clamp(0.95rem,1.3vw,1.1rem)]";

const availabilityDotClassName =
    'inline-block h-3 w-3 rounded-full bg-[#22c55e] max-[768px]:h-[clamp(0.5rem,1vw,0.75rem)] max-[768px]:w-[clamp(0.5rem,1vw,0.75rem)] max-[600px]:h-[clamp(0.45rem,0.8vw,0.6rem)] max-[600px]:w-[clamp(0.45rem,0.8vw,0.6rem)]';

const availabilityTextClassName =
    "text-[clamp(0.65rem,1.1vw,0.875rem)] tracking-[0.04em] text-[#22c55e] font-normal max-[768px]:text-[clamp(0.95rem,1.3vw,1.05rem)] max-[600px]:text-[clamp(0.9rem,1.25vw,1rem)]";

const LANDING_PAGE_AUDIT_MAILTO =
    'mailto:contact.nexvibe@gmail.com?subject=Landing%20Page%20Audit%20Request';

export default function Contact() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const bangladeshTime = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Dhaka',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });
            setCurrentTime(bangladeshTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const socials = [
        { label: 'GitHub', href: 'https://github.com/mehedi-hasan1102' },
        { label: 'X', href: 'https://x.com/mehedihasan1102' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mehedi-hasan1102' },
    ];

    return (
        <section id="contact" className={sectionClassName} style={{ background: 'var(--bg)' }}>
            <div className="container relative z-10 max-w-7xl">
                <div ref={headerRef} className="mb-[clamp(2.5rem,5vw,5rem)] overflow-hidden text-center">
                    <h2 className="sectionTitleGlobal">
                        Let&apos;s <span style={{ color: 'var(--accent)' }}>Build</span>
                    </h2>
                </div>

                <div className="text-center">
                    <a href="mailto:contact.nexvibe@gmail.com" className={emailClassName}>
                        contact.nexvibe@gmail.com
                    </a>
                </div>

                <div className={footerGridClassName}>
                    <div className="text-center">
                        <p className={columnLabelClassName}>Socials</p>
                        <div className={socialButtonsClassName}>
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={socialLinkClassName}
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <p className={columnLabelClassName}>Location & Time</p>
                        <div className="flex flex-col gap-2">
                            <p className={locationCityClassName}>Dhaka</p>
                            <p className={locationCountryClassName}>Bangladesh</p>
                            <p className={currentTimeClassName}>{currentTime || '00:00:00 AM'}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className={columnLabelClassName}>Availability</p>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            <span className={availabilityDotClassName} />
                            <span className={availabilityTextClassName}>Open for agency projects</span>
                        </div>
                    </div>
                </div>

                <div className="mt-[clamp(2rem,4vw,4rem)] flex flex-wrap justify-center gap-4">
                    <Link href="/book-call" className="btn-primary">
                        <FiCalendar size={16} />
                        <span>Book a strategy call</span>
                    </Link>
                    <a href={LANDING_PAGE_AUDIT_MAILTO} className="btn-secondary">
                        <FiArrowUpRight size={16} />
                        <span>Get landing page audit</span>
                    </a>
                    <Link href="/portfolio" className="btn-secondary">
                        <FiArrowUpRight size={16} />
                        <span>View agency portfolio</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
