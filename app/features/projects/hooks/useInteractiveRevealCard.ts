"use client";

import { type MouseEvent, useRef } from "react";

export const useInteractiveRevealCard = (index: number) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  void index;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) {
      return;
    }

    const rect = card.getBoundingClientRect();
    glow.style.left = `${event.clientX - rect.left}px`;
    glow.style.top = `${event.clientY - rect.top}px`;
  };

  return {
    cardRef,
    contentRef,
    glowRef,
    handleMouseMove,
  };
};
