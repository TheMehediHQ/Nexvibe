import { getAllPosts } from '@/lib/blog';
import { BlogListing } from './BlogListing';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/blog',
  title: 'Blog | Vision Studio 23',
  description:
    'Insights on web design, development, growth strategy, and lessons from real-world agency delivery.',
  keywords: ['Next.js blog', 'React articles', 'developer writing'],
});

type BlogPageProps = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const posts = getAllPosts().map((post) => post.meta);
  const orbBaseClass =
    'pointer-events-none absolute rounded-full opacity-40 blur-[120px]';
  const initialQuery = typeof params.q === 'string' ? params.q : '';
  const pageNumber = Number(params.page);
  const initialPage =
    Number.isFinite(pageNumber) && pageNumber > 0
      ? Math.floor(pageNumber)
      : 1;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] py-[clamp(4rem,8vw,8rem)]">
      {/* Gradient Orbs Background */}
      <div
        className={`${orbBaseClass} left-[-10%] top-[10%] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(34,211,238,0.15),transparent_70%)]`}
      />
      <div
        className={`${orbBaseClass} right-[-15%] top-[50%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(34,211,238,0.2),transparent_70%)]`}
      />
      <div
        className={`${orbBaseClass} bottom-0 left-[30%] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(34,211,238,0.15),transparent_70%)]`}
      />

      {/* Header Section */}
      <section className="relative z-[1] px-[clamp(1rem,4vw,4rem)] text-center">
        <div className="relative mx-auto mb-10 max-w-[800px]">
          <h1 className="sectionTitleGlobal">
            All<span style={{ color: 'var(--accent)' }}> Blogs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[760px] text-center text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
            We share practical lessons from client work, website optimization, and product delivery. Use the search below to quickly find what you need.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative z-[1] mx-auto mt-8 max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
        <BlogListing
          posts={posts}
          initialQuery={initialQuery}
          initialPage={initialPage}
        />
      </section>
    </main>
  );
}
