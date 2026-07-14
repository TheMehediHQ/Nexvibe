"use client";

import { type ElementType, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	FiArrowUpRight,
	FiChevronLeft,
	FiChevronRight,
	FiX,
} from "react-icons/fi";
import type { Certificate } from "@/lib/site-data";
import { useRevealHeader } from "@/app/hooks/useRevealHeader";
import { useInteractiveRevealCard } from "@/app/features/projects/hooks/useInteractiveRevealCard";

type CertificationsSectionProps = {
	certificates: Certificate[];
	headingTag?: ElementType;
	title: string;
	highlight: string;
	description?: string;
	sectionId: string;
	showViewAllButton?: boolean;
	limit?: number;
	openCredentialInModal?: boolean;
};

type CertificateCardProps = {
	certificate: Certificate;
	index: number;
	openCredentialInModal: boolean;
	onOpenModal: (index: number) => void;
};

const CertificateCard = ({
	certificate,
	index,
	openCredentialInModal,
	onOpenModal,
}: CertificateCardProps) => {
	const { cardRef, contentRef, glowRef, handleMouseMove } =
		useInteractiveRevealCard(index);
	const visibleSkills = certificate.skills.slice(0, 2);
	const extraSkillCount = Math.max(certificate.skills.length - visibleSkills.length, 0);
	const isInteractive = openCredentialInModal;

	const cardBody = (
		<article
			ref={cardRef}
			className={`group relative flex aspect-square h-full flex-col overflow-hidden rounded-[24px] border border-[color-mix(in_srgb,var(--accent)_16%,transparent)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${isInteractive ? "cursor-pointer" : "cursor-default"
				}`}
			onMouseMove={handleMouseMove}
		>
			<div ref={glowRef} className="card-glow" />
			<div className="relative h-[38%] min-h-[96px] w-full shrink-0 overflow-hidden bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.14),rgba(var(--accent-rgb),0.04))] max-[768px]:min-h-[84px]">
				<Image
					src={certificate.image}
					alt={certificate.title}
					fill
					className="h-full w-full object-cover object-center transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.04]"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority={index === 0}
				/>
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.52)_100%)]" />
			</div>

			<div
				ref={contentRef}
				className="relative z-[2] flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden bg-[var(--card-bg,transparent)] p-5 max-[1024px]:p-4 max-[768px]:p-[0.85rem] max-[480px]:p-3"
			>
				<div className="flex items-center justify-between gap-2">
					<span className="select-none text-[2.2rem] font-bold leading-none text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)]">
						{String(index + 1).padStart(2, "0")}
					</span>
					<span className="shrink-0 rounded-full border border-[rgba(var(--accent-rgb),0.24)] px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.03em] text-(--accent)">
						{certificate.year}
					</span>
				</div>

				<div className="min-h-0 space-y-1.5 overflow-hidden">
					<h3
						className="m-0 overflow-hidden font-bold tracking-[-0.015em] text-[var(--text)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
						style={{
							fontSize: "1.25rem",
							lineHeight: "1.4",
						}}
					>
						{certificate.title}
					</h3>
					<p className="truncate font-['Graphik',-apple-system,sans-serif] text-[0.8rem] tracking-[0.02em] text-[var(--text-secondary)]">
						Issued by{" "}
						<span className="font-medium text-[var(--text)]">{certificate.issuer}</span>
					</p>
				</div>

				<div className="mt-auto flex shrink-0 items-center gap-1.5 overflow-hidden">
					{visibleSkills.map((tag) => (
						<span
							key={tag}
							className="inline-flex max-w-[48%] items-center truncate rounded-full border border-[rgba(var(--accent-rgb),0.24)] bg-[rgba(var(--accent-rgb),0.08)] px-2.5 py-[0.35rem] text-[0.72rem] font-medium tracking-[0.02em] text-(--accent)"
						>
							{tag}
						</span>
					))}
					{extraSkillCount > 0 ? (
						<span className="inline-flex shrink-0 items-center rounded-full border border-[rgba(var(--accent-rgb),0.24)] bg-[rgba(var(--accent-rgb),0.08)] px-2.5 py-[0.35rem] text-[0.72rem] font-medium tracking-[0.02em] text-(--accent)">
							+{extraSkillCount}
						</span>
					) : null}
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(var(--accent-rgb),0.18)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(var(--accent-rgb),0.42)]" />
		</article>
	);

	if (!isInteractive) {
		return <div className="block text-inherit no-underline">{cardBody}</div>;
	}

	if (openCredentialInModal) {
		return (
			<button
				type="button"
				onClick={() => onOpenModal(index)}
				className="block w-full border-0 bg-transparent p-0 text-left text-inherit no-underline"
				aria-label={`Open ${certificate.title} certificate preview`}
			>
				{cardBody}
			</button>
		);
	}

	return <div className="block text-inherit no-underline">{cardBody}</div>;
};

export default function CertificationsSection({
	certificates,
	headingTag = "h2",
	title,
	highlight,
	description,
	sectionId,
	showViewAllButton = false,
	limit,
	openCredentialInModal = false,
}: CertificationsSectionProps) {
	const headingRef = useRef<HTMLDivElement>(null);
	const Heading = headingTag;
	const [activeCertificateIndex, setActiveCertificateIndex] = useState<number | null>(null);

	useRevealHeader(headingRef);

	const displayedCertificates = useMemo(
		() => (limit ? certificates.slice(0, limit) : certificates),
		[certificates, limit],
	);

	const activeCertificate =
		activeCertificateIndex !== null
			? displayedCertificates[activeCertificateIndex] ?? null
			: null;

	const hasPrevious = activeCertificateIndex !== null && activeCertificateIndex > 0;
	const hasNext =
		activeCertificateIndex !== null &&
		activeCertificateIndex < displayedCertificates.length - 1;
	const modalControlButtonClass =
		"flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[color-mix(in_srgb,var(--surface)_86%,black)] text-white shadow-[0_16px_36px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 [transition-timing-function:ease] hover:scale-[1.04] hover:border-[rgba(var(--accent-rgb),0.38)] hover:bg-[color-mix(in_srgb,var(--surface)_92%,rgba(var(--accent-rgb),0.16))] hover:text-(--accent) disabled:cursor-not-allowed disabled:border-[rgba(255,255,255,0.1)] disabled:bg-[rgba(255,255,255,0.08)] disabled:text-[rgba(255,255,255,0.38)] disabled:shadow-none [html.light-mode_&]:border-[color-mix(in_srgb,var(--text)_12%,transparent)] [html.light-mode_&]:bg-[color-mix(in_srgb,var(--surface)_78%,white)] [html.light-mode_&]:text-[var(--text)] [html.light-mode_&]:shadow-[0_12px_30px_rgba(15,23,42,0.16)] [html.light-mode_&]:hover:border-[rgba(var(--accent-rgb),0.28)] [html.light-mode_&]:hover:bg-white [html.light-mode_&]:disabled:border-[color-mix(in_srgb,var(--text)_10%,transparent)] [html.light-mode_&]:disabled:bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] [html.light-mode_&]:disabled:text-[color-mix(in_srgb,var(--text)_38%,transparent)]";
	const modalDesktopControlButtonClass =
		`${modalControlButtonClass} absolute top-1/2 z-[121] h-12 w-12 -translate-y-1/2 cursor-pointer max-[640px]:hidden`;
	const modalMobileControlButtonClass =
		`${modalControlButtonClass} hidden h-10 w-10 shrink-0 cursor-pointer max-[640px]:flex`;

	const showPreviousCertificate = () => {
		setActiveCertificateIndex((currentIndex) => {
			if (currentIndex === null || currentIndex <= 0) {
				return currentIndex;
			}

			return currentIndex - 1;
		});
	};

	const showNextCertificate = () => {
		setActiveCertificateIndex((currentIndex) => {
			if (currentIndex === null || currentIndex >= displayedCertificates.length - 1) {
				return currentIndex;
			}

			return currentIndex + 1;
		});
	};

	useEffect(() => {
		if (!openCredentialInModal || !activeCertificate) {
			return undefined;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveCertificateIndex(null);
				return;
			}

			if (event.key === "ArrowLeft") {
				setActiveCertificateIndex((currentIndex) => {
					if (currentIndex === null || currentIndex <= 0) {
						return currentIndex;
					}

					return currentIndex - 1;
				});
				return;
			}

			if (event.key === "ArrowRight") {
				setActiveCertificateIndex((currentIndex) => {
					if (currentIndex === null || currentIndex >= displayedCertificates.length - 1) {
						return currentIndex;
					}

					return currentIndex + 1;
				});
			}
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeCertificate, openCredentialInModal, displayedCertificates.length]);

	if (displayedCertificates.length === 0) {
		return null;
	}

	return (
		<section
			id={sectionId}
			className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
			style={{ background: "var(--bg)" }}
		>
			<div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
				<div ref={headingRef} className="mb-10 overflow-hidden text-center">
					<Heading className="sectionTitleGlobal">
						{title}
						<span style={{ color: "var(--accent)" }}>{highlight}</span>
					</Heading>
					{description ? (
						<p className="mx-auto mt-4 max-w-[760px] text-center text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
							{description}
						</p>
					) : null}
				</div>

				<div className="grid grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] max-[1024px]:grid-cols-2 max-[1024px]:gap-[clamp(1rem,2vw,1.25rem)] max-[768px]:grid-cols-2 max-[768px]:gap-[clamp(0.875rem,2vw,1.25rem)] max-[640px]:grid-cols-1 max-[640px]:gap-[clamp(0.875rem,2vw,1.25rem)]">
					{displayedCertificates.map((certificate, index) => (
						<CertificateCard
							key={certificate.id}
							certificate={certificate}
							index={index}
							openCredentialInModal={openCredentialInModal}
							onOpenModal={setActiveCertificateIndex}
						/>
					))}
				</div>

				{showViewAllButton ? (
					<div className="mt-8 flex justify-center">
						<Link href="/certifications" className="btn-primary">
							<FiArrowUpRight size={16} />
							<span>View all certifications</span>
						</Link>
					</div>
				) : null}
			</div>
			{openCredentialInModal && activeCertificate ? (
				<div
					className="fixed inset-0 z-[120] bg-[rgba(0,0,0,0.7)] [backdrop-filter:blur(4px)]"
					role="dialog"
					aria-modal="true"
					aria-labelledby="certificate-modal-title"
					onClick={() => setActiveCertificateIndex(null)}
				>
					<div
						className="flex min-h-screen items-center justify-center px-8 py-12 max-[900px]:px-4 max-[640px]:px-3 max-[640px]:py-6"
						onClick={(event) => event.stopPropagation()}
					>
						<div className="relative w-full max-w-[1120px] overflow-y-auto rounded-[18px] border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] p-[clamp(0.75rem,1.8vw,1.25rem)] shadow-[0_20px_60px_rgba(6,182,212,0.15)] max-[900px]:max-h-[calc(100vh-2rem)] max-[640px]:rounded-[16px] max-[640px]:p-3">
							<h3 id="certificate-modal-title" className="sr-only">
								{activeCertificate.title}
							</h3>

							<button
								type="button"
								onClick={() => setActiveCertificateIndex(null)}
								className="absolute right-4 top-4 z-[121] flex cursor-pointer items-center justify-center border-none bg-transparent p-2 text-[var(--text-secondary)] transition-all duration-300 [transition-timing-function:ease] hover:text-(--accent) max-[480px]:right-3 max-[480px]:top-3"
								aria-label="Close certificate preview"
							>
								<FiX size={24} />
							</button>

							<button
								type="button"
								onClick={showPreviousCertificate}
								disabled={!hasPrevious}
								className={`${modalDesktopControlButtonClass} left-3 max-[480px]:left-2 max-[480px]:h-11 max-[480px]:w-11`}
								aria-label="Previous certificate"
							>
								<FiChevronLeft size={24} />
							</button>

							<button
								type="button"
								onClick={showNextCertificate}
								disabled={!hasNext}
								className={`${modalDesktopControlButtonClass} right-3 max-[480px]:right-2 max-[480px]:h-11 max-[480px]:w-11`}
								aria-label="Next certificate"
							>
								<FiChevronRight size={24} />
							</button>

							<div className="relative mx-[clamp(2rem,6vw,4.5rem)] overflow-hidden rounded-[12px] max-[900px]:mx-[clamp(1rem,4vw,2.25rem)] max-[640px]:mx-0">
								<div className="relative h-[clamp(18rem,68vh,44rem)] w-full rounded-[12px] border border-[color-mix(in_srgb,var(--text)_12%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_72%,rgba(255,255,255,0.08))_0%,color-mix(in_srgb,var(--surface)_84%,transparent)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-[14px] [html.light-mode_&]:border-[color-mix(in_srgb,var(--text)_10%,transparent)] [html.light-mode_&]:bg-[linear-gradient(180deg,color-mix(in_srgb,white_78%,var(--surface)_22%)_0%,color-mix(in_srgb,white_52%,var(--surface)_48%)_100%)] [html.light-mode_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_16px_34px_rgba(15,23,42,0.07)] max-[900px]:h-[clamp(16rem,58vh,34rem)] max-[640px]:h-[min(56vh,20rem)]">
									<Image
										src={activeCertificate.image}
										alt={activeCertificate.title}
										fill
										className="object-contain"
										sizes="(max-width: 1200px) 94vw, 980px"
										priority
									/>
								</div>
							</div>

							<div className="mx-[clamp(2rem,6vw,4.5rem)] mt-3 flex items-center justify-between gap-4 text-[0.78rem] tracking-[0.04em] text-[var(--text-secondary)] max-[900px]:mx-[clamp(1rem,4vw,2.25rem)] max-[640px]:mx-0 max-[640px]:mt-4 max-[640px]:grid max-[640px]:grid-cols-[auto_1fr_auto] max-[640px]:gap-3 max-[640px]:text-[0.72rem]">
								<button
									type="button"
									onClick={showPreviousCertificate}
									disabled={!hasPrevious}
									className={modalMobileControlButtonClass}
									aria-label="Previous certificate"
								>
									<FiChevronLeft size={20} />
								</button>
								<span className="max-[640px]:hidden">Esc to close</span>
								<span className="font-semibold text-[var(--text)]">
									{String((activeCertificateIndex ?? 0) + 1).padStart(2, "0")} /{" "}
									{String(displayedCertificates.length).padStart(2, "0")}
								</span>
								<span className="text-right max-[640px]:hidden">Use ← → to navigate</span>
								<button
									type="button"
									onClick={showNextCertificate}
									disabled={!hasNext}
									className={modalMobileControlButtonClass}
									aria-label="Next certificate"
								>
									<FiChevronRight size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</section>
	);
}
