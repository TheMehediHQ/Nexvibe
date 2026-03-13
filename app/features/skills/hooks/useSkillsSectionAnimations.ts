'use client';

import { RefObject } from 'react';

type UseSkillsSectionAnimationsArgs = {
  headerRef: RefObject<HTMLDivElement | null>;
  orbitContainerRef: RefObject<HTMLDivElement | null>;
};

export const useSkillsSectionAnimations = ({
  headerRef,
  orbitContainerRef,
}: UseSkillsSectionAnimationsArgs) => {
  void headerRef;
  void orbitContainerRef;
};
