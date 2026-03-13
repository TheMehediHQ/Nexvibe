"use client";

import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/lib/site-data";
import { useInteractiveRevealCard } from "./hooks/useInteractiveRevealCard";

type ProjectShowcaseCardProps = {
  project: Project;
  index: number;
};

const truncateDescription = (description: string) =>
  description.length > 90 ? `${description.slice(0, 90)}...` : description;

const TECH_PREVIEW_COUNT = 2;
const TECH_TAG_CLASS_NAME =
  "inline-flex items-center rounded-[9px] border border-[rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.1)] px-3 py-[0.45rem] font-['Graphik',-apple-system,sans-serif] text-[0.84rem] font-medium tracking-[0.01em] text-[var(--text)] transition-all duration-300 [transition-timing-function:ease] hover:bg-[rgba(var(--accent-rgb),0.16)]";

const formatCategoryLabel = (category: string) =>
  category
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export default function ProjectShowcaseCard({
  project,
  index,
}: ProjectShowcaseCardProps) {
  const { cardRef, contentRef, glowRef, handleMouseMove } = useInteractiveRevealCard(index);
  const categoryLabel = formatCategoryLabel(project.category);
  const visibleTech = project.tech.slice(0, TECH_PREVIEW_COUNT);
  const extraTechCount = Math.max(project.tech.length - visibleTech.length, 0);

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full no-underline">
      <div
        ref={cardRef}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[rgba(6,182,212,0.1)] bg-transparent [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] will-change-transform"
        onMouseMove={handleMouseMove}
      >
        <div
          ref={glowRef}
          className="card-glow"
        />
        <span
          className="absolute right-3 top-3 z-[2] grid h-8 w-8 place-items-center rounded-[10px] border border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)] opacity-0 translate-y-[-6px] scale-[0.95] transition-all duration-300 [transition-timing-function:ease] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
          aria-hidden="true"
        >
          <FiExternalLink size={16} />
        </span>

        <div className="relative h-[170px] w-full shrink-0 overflow-hidden bg-[linear-gradient(135deg,rgba(6,182,212,0.05),rgba(6,182,212,0.02))] max-[1024px]:h-[clamp(110px,22vw,140px)] max-[768px]:h-[clamp(90px,18vw,130px)] max-[480px]:h-[clamp(80px,34vw,110px)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="h-full w-full object-cover object-center transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </div>

        <div
          ref={contentRef}
          className="relative z-[2] flex flex-1 flex-col justify-between bg-[var(--card-bg,transparent)] p-6 max-[1024px]:p-[clamp(1rem,2.5vw,1.25rem)] max-[768px]:p-[clamp(0.875rem,2.2vw,1.2rem)] max-[480px]:p-[clamp(0.8rem,1.8vw,1rem)]"
        >
          <div className="mb-2 flex items-start gap-3 max-[768px]:flex-col max-[768px]:gap-[0.45rem]">
            <span className="min-w-[64px] font-['Graphik',-apple-system,sans-serif] text-[2.4rem] font-bold leading-none text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)] max-[1024px]:text-[clamp(1.4rem,3.2vw,1.8rem)] max-[768px]:min-w-[50px] max-[768px]:text-[clamp(1.2rem,3vw,1.6rem)] max-[480px]:min-w-[44px] max-[480px]:text-[clamp(1rem,2.8vw,1.4rem)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="flex-1 font-['Graphik',-apple-system,sans-serif] text-[1.25rem] tracking-[0.03em] text-[var(--accent)] max-[1024px]:text-[clamp(0.98rem,2.2vw,1.12rem)] max-[768px]:text-[clamp(0.95rem,2.7vw,1.08rem)] max-[480px]:text-[clamp(0.9rem,2.6vw,1rem)]">
              {project.title}
            </h3>
          </div>
          <p className="mb-2">
            <span className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-[rgba(6,182,212,0.34)] bg-[rgba(6,182,212,0.09)] px-3 py-1 font-['Graphik',-apple-system,sans-serif] text-[0.68rem] font-semibold tracking-[0.06em] text-[var(--accent)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[rgba(6,182,212,0.9)]"
                aria-hidden="true"
              />
              {categoryLabel}
            </span>
          </p>
          <p className="mb-4 flex-1 font-['Graphik',-apple-system,sans-serif] text-[0.82rem] leading-[1.45] text-[var(--text-secondary)] max-[1024px]:text-[0.78rem] max-[768px]:mb-3 max-[768px]:text-[0.78rem] max-[480px]:text-[0.76rem]">
            <span className="font-semibold text-[var(--accent)]">Overview :</span>{" "}
            {truncateDescription(project.description)}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {visibleTech.map((tag) => (
              <span key={tag} className={TECH_TAG_CLASS_NAME}>
                {tag}
              </span>
            ))}
            {extraTechCount > 0 ? (
              <span className={TECH_TAG_CLASS_NAME}>
                +{extraTechCount}
              </span>
            ) : null}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]" />
      </div>
    </Link>
  );
}
