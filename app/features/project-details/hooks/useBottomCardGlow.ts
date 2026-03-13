'use client';

import { useEffect } from 'react';

export const useBottomCardGlow = () => {
  useEffect(() => {
    const glowHalfSize = 52;

    const handleMouseMove = (event: MouseEvent) => {
      const cards = document.querySelectorAll('.projectDetailsPage .bottomCard');

      cards.forEach((card) => {
        const glow = card.querySelector('.bottomGlow') as HTMLElement | null;
        if (!glow) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          glow.style.left = `${x - glowHalfSize}px`;
          glow.style.top = `${y - glowHalfSize}px`;
          glow.style.opacity = '0.62';
        } else {
          glow.style.opacity = '0';
        }
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.projectDetailsPage .bottomCard');
      cards.forEach((card) => {
        const glow = card.querySelector('.bottomGlow') as HTMLElement | null;
        if (glow) {
          glow.style.opacity = '0';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
};
