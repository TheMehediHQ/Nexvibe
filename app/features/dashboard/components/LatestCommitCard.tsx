'use client';

import { FiExternalLink, FiGitCommit } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { CARD, CARD_GLOW, SECTION_HEADER, SECTION_TITLE, VIEW_LINK } from '../constants';
import { useCardGlow } from '@/app/hooks/useCardGlow';
import type { LatestCommit } from '../types';
import { formatRelativeTime } from '../utils';

type LatestCommitCardProps = {
  latestCommits: LatestCommit[];
  errorMessage: string | null;
  username: string;
};

type LatestCommitItemProps = {
  commit: LatestCommit;
  index: number;
};

const TIMELINE_OPACITY = [1, 0.82, 0.68, 0.56, 0.45] as const;

const formatDayMonth = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  });

function LatestCommitItem({ commit, index }: LatestCommitItemProps) {
  const rowOpacity = TIMELINE_OPACITY[Math.min(index, TIMELINE_OPACITY.length - 1)];
  const repoShortName = commit.repoName.split('/').pop() || commit.repoName;

  return (
    <a
      href={commit.commitUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity: rowOpacity }}
      className="group/item relative block rounded-[10px] px-2 py-1.5 transition-all duration-200 [transition-timing-function:ease] hover:opacity-100 focus:outline-none focus-visible:opacity-100"
      aria-label={`Open commit ${commit.sha.slice(0, 7)} from ${commit.repoName} in new tab`}
      title={commit.message}
    >
      <span className="absolute left-[-1rem] top-[0.85rem] h-2 w-2 rounded-full bg-[rgba(148,163,184,0.8)] transition-colors duration-200 group-hover/item:bg-[var(--accent)]" />

      <div className="flex items-start gap-3 max-[640px]:gap-2.5">
        <p className="w-[62px] shrink-0 font-['Graphik',-apple-system,sans-serif] text-[1.02rem] leading-[1.3] tracking-[0.02em] text-[var(--text-secondary)] max-[640px]:w-[54px] max-[640px]:text-[0.9rem]">
          {formatDayMonth(commit.committedAt)}:
        </p>

        <div className="min-w-0 flex-1">
          <p className="break-words font-['Graphik',-apple-system,sans-serif] text-[clamp(1.08rem,1.95vw,1.45rem)] leading-[1.34] tracking-[0.01em] text-[var(--text)] max-[640px]:text-[1rem]">
            {commit.message}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.74rem] text-[var(--text-secondary)] max-[640px]:mt-1 max-[640px]:text-[0.7rem]">
            <span className="truncate" title={commit.repoName}>{repoShortName}</span>
            <span className="whitespace-nowrap">#{commit.sha.slice(0, 7)}</span>
            <span className="whitespace-nowrap">{formatRelativeTime(commit.committedAt)}</span>
            <span className={`${VIEW_LINK} text-[0.72rem] max-[640px]:text-[0.7rem]`}>
              View commit <FiExternalLink className="text-(--accent)" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function LatestCommitCard({
  latestCommits,
  errorMessage,
  username,
}: LatestCommitCardProps) {
  const { cardRef, glowRef, handleMouseMove } = useCardGlow<HTMLDivElement>();

  return (
    <div ref={cardRef} className={CARD} onMouseMove={handleMouseMove}>
      <div ref={glowRef} className={CARD_GLOW} />

      <div className={SECTION_HEADER}>
        <h3 className={SECTION_TITLE}>
          <FiGitCommit /> Git Journaling
        </h3>
        {latestCommits.length > 0 ? (
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={VIEW_LINK}
          >
            View on GitHub <FaArrowRight className="text-(--accent)" />
          </a>
        ) : null}
      </div>

      {latestCommits.length > 0 ? (
        <div className="relative z-[1]">
          {/* <div className="relative mb-4 pl-6 max-[640px]:mb-3 max-[640px]:pl-5">
            <span className="absolute left-[0.5rem] top-[0.55rem] h-2 w-2 rounded-full bg-[rgba(148,163,184,0.8)] max-[640px]:left-[0.25rem]" />
            <p className="font-['Graphik',-apple-system,sans-serif] text-[1rem] tracking-[0.02em] text-(--accent) max-[640px]:text-[0.92rem]">
              Git Journaling
            </p>
          </div> */}

          <div className="relative pl-6 max-[640px]:pl-5">
            <span className="pointer-events-none absolute left-[0.75rem] top-2 bottom-2 w-px bg-[rgba(148,163,184,0.34)] max-[640px]:left-[0.5rem]" />

            <div className="space-y-[1.125rem] max-[640px]:space-y-3.5">
              {latestCommits.map((commit, index) => (
                <LatestCommitItem key={`${commit.repoName}-${commit.sha}`} commit={commit} index={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="relative z-[1] rounded-[12px] border border-[rgba(6,182,212,0.18)] bg-[rgba(34,211,238,0.04)] px-4 py-3 text-[0.88rem] text-[var(--text-secondary)] max-[640px]:rounded-[10px] max-[640px]:px-3 max-[640px]:py-2.5 max-[640px]:text-[0.84rem]">
          {errorMessage || 'Could not load latest commit right now.'}
        </p>
      )}
    </div>
  );
}
