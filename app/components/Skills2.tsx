"use client";

import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useCardGlow } from "@/app/hooks/useCardGlow";

const CORE_STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS"];
const DELIVERY_SKILLS = [
	"Component architecture",
	"API integration",
	"Responsive implementation",
	"Cross-browser fixes",
];
const GROWTH_SKILLS = [
	"Core Web Vitals optimization",
	"Technical SEO basics",
	"Conversion-focused UI",
	"Accessibility improvements",
];

const DELIVERY_SIGNALS = [
	"Clear scope and delivery plan before implementation.",
	"Production-safe changes with clean, maintainable structure.",
	"Performance-aware build quality from first commit to launch.",
];

const CUSTOM_OFFER_MAILTO =
	"mailto:contact.nexvibe@gmail.com?subject=Custom%20Offer%20Request&body=Hi%20Mehedi%2C%0A%0AI%20would%20like%20a%20custom%20offer%20for%20my%20project.%0AProject%20details%3A%0ABudget%20range%3A%0ATimeline%3A%0A%0AThanks.";

const tagClassName =
	"rounded-full border border-[rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.08)] px-3 py-1 text-[0.78rem] tracking-[0.02em] text-[var(--text)]";

type SkillGroupProps = {
	index: number;
	title: string;
	items: string[];
};

function SkillGroup({ index, title, items }: SkillGroupProps) {
	const { cardRef, glowRef, handleMouseMove } = useCardGlow<HTMLDivElement>();

	return (
		<article
			ref={cardRef}
			className="group relative overflow-hidden rounded-[24px] border border-[rgba(6,182,212,0.1)] bg-transparent [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
			onMouseMove={handleMouseMove}
		>
			<div
				ref={glowRef}
				className="card-glow"
			/>

			<div className="relative z-[2] bg-[var(--card-bg,transparent)] p-8 max-[768px]:p-6 max-[480px]:p-5">
				<div className="mb-3 flex items-start gap-4 max-[768px]:flex-col max-[768px]:gap-2">
					<span className="min-w-[80px] font-['Graphik',-apple-system,sans-serif] text-[3rem] font-bold leading-none text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)] max-[768px]:text-[2rem]">
						{String(index + 1).padStart(2, "0")}
					</span>
					<h3 className="flex-1 font-['Graphik',-apple-system,sans-serif] text-[1.5rem] tracking-[0.04em] text-(--accent) max-[768px]:text-[1.2rem]">
						{title}
					</h3>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{items.map((item) => (
						<span key={item} className={tagClassName}>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]" />
		</article>
	);
}

export default function Skills2() {
	const headerRef = useRef<HTMLDivElement>(null);
	const {
		cardRef: clientsCardRef,
		glowRef: clientsGlowRef,
		handleMouseMove: handleClientsMouseMove,
	} = useCardGlow<HTMLDivElement>();

	return (
		<section
			id="skills"
			className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
			style={{ background: "var(--bg)" }}
		>
			<div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
				<div ref={headerRef} className="mb-[clamp(2.5rem,5vw,5rem)] overflow-hidden text-center">
					<h2 className="sectionTitleGlobal">
						Core <span style={{ color: "var(--accent)" }}>Skills</span>
					</h2>
				</div>

				<div className="grid gap-4 lg:grid-cols-3">
					<SkillGroup index={0} title="Core Stack" items={CORE_STACK} />
					<SkillGroup index={1} title="Delivery Skills" items={DELIVERY_SKILLS} />
					<SkillGroup index={2} title="Growth Skills" items={GROWTH_SKILLS} />
				</div>

				<article
					ref={clientsCardRef}
					className="group card-glow-host relative mt-6 overflow-hidden rounded-[24px] border border-[rgba(6,182,212,0.1)] bg-transparent [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
					onMouseMove={handleClientsMouseMove}
				>
					<div
						ref={clientsGlowRef}
						className="card-glow"
					/>

					<div className="relative z-[2] bg-[var(--card-bg,transparent)] p-8 max-[768px]:p-6 max-[480px]:p-5">
						<h3 className="font-['Graphik',-apple-system,sans-serif] text-[1.15rem] tracking-[0.03em] text-(--accent)">
							What clients get
						</h3>
						<ul className="mt-4 space-y-2 text-[0.92rem] leading-relaxed text-[var(--text-secondary)]">
							{DELIVERY_SIGNALS.map((signal) => (
								<li key={signal}>- {signal}</li>
							))}
						</ul>

						<div className="mt-5 flex flex-wrap gap-3 max-[640px]:flex-col max-[640px]:items-start">
							<Link href="/portfolio" className="btn-primary whitespace-nowrap">
								<FiArrowUpRight size={16} />
								<span>View project work</span>
							</Link>
							<a href={CUSTOM_OFFER_MAILTO} className="btn-secondary whitespace-nowrap">
								<FiArrowUpRight size={16} />
								<span>Get a Quote</span>
							</a>
						</div>
					</div>

					<div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]" />
				</article>
			</div>
		</section>
	);
}
