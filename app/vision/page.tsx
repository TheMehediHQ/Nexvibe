import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import VisionPageClient from './VisionPageClient';

export const metadata: Metadata = createPageMetadata({
  path: '/vision',
  title: 'Our Vision | Nexvibe',
  description:
    'Learn about Nexvibe vision, principles, and how we build digital products that drive real growth and meaningful customer engagement.',
  keywords: ['vision', 'mission', 'values', 'nexvibe principles'],
});

export default function VisionPage() {
  return <VisionPageClient />;
}
