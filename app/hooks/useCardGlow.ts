"use client";

import { type MouseEvent, useRef } from 'react';

export const useCardGlow = <T extends HTMLElement>() => {
  const cardRef = useRef<T>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<T>) => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  };

  return {
    cardRef,
    glowRef,
    handleMouseMove,
  };
};
