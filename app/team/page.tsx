import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import TeamPageClient from './TeamPageClient';

export const metadata: Metadata = createPageMetadata({
  path: '/team',
  title: 'Our Team | Nexvibe',
  description:
    'Meet the talented team behind Nexvibe. Passionate designers, developers, and strategists dedicated to building exceptional digital products.',
  keywords: ['team', 'about us', 'nexvibe team', 'developers', 'designers'],
});

export default function TeamPage() {
  return <TeamPageClient />;
}
