import type { NavItem, SocialItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
];

export const MORE_ITEMS: NavItem[] = [
  
  { label: 'Web Development', href: '/webdevelopement' },
  { label: 'Mobile Development', href: '/mobiledevelopement' },
  { label: 'Graphics Design', href: '/graphicsdesign' },
   { label: 'Digital Marketing', href: '/digitalmarketing' },
  { label: 'Ai Automation', href: '/ai-automation' },
  { label: 'UI/UX Design', href: '/ui-ux-design' },
];

export const SOCIAL_ITEMS: SocialItem[] = [
  { label: 'GitHub', href: 'https://github.com/mehedi-hasan1102' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mehedi-hasan1102' },
  { label: 'X', href: 'https://x.com/mehedihasan1102' },
];

export const MOBILE_MAIN_ITEM_CLASS =
  'group relative flex w-full cursor-pointer items-center gap-6 text-[var(--bg)] transition-all';
export const MOBILE_MAIN_NUMBER_CLASS =
  'w-10 text-left text-3xl leading-none font-black opacity-40 transition-opacity group-hover:opacity-100';
export const MOBILE_MAIN_LABEL_CLASS =
  'flex items-center gap-3 text-3xl leading-none font-bold transition-transform origin-left group-hover:scale-105';
