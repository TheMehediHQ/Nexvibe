import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogPostMeta = {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  coverImage?: string;
  slug: string;
};

export type BlogPost = {
  meta: BlogPostMeta;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const resolveCoverImage = (data: Record<string, unknown>, content: string) => {
  const frontmatterImage = [data.coverImage, data.image].find(
    (value): value is string => typeof value === 'string' && value.trim().length > 0
  );

  if (frontmatterImage) {
    return frontmatterImage.trim();
  }

  const mdxImgMatch = content.match(/<Img[\s\S]*?\bsrc=["']([^"']+)["']/i);
  if (mdxImgMatch?.[1]) {
    return mdxImgMatch[1].trim();
  }

  const markdownImgMatch = content.match(
    /!\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/
  );
  if (markdownImgMatch?.[1]) {
    return markdownImgMatch[1].trim();
  }

  return undefined;
};

const normalizeSlug = (slug: string) => {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
};

const getPostFiles = () => {
  if (!fs.existsSync(BLOG_DIR)) {
    return [] as string[];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith('.mdx'));
};

export const getAllPosts = (): BlogPost[] => {
  const files = getPostFiles();

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(BLOG_DIR, fileName);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      meta: {
        title: String(data.title ?? 'Untitled'),
        date: String(data.date ?? '1970-01-01'),
        excerpt: String(data.excerpt ?? ''),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        coverImage: resolveCoverImage(data, content),
        slug,
      },
      content,
    } satisfies BlogPost;
  });

  return posts.sort((a, b) =>
    new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const normalizedSlug = normalizeSlug(slug);
  const filePath = path.join(BLOG_DIR, `${normalizedSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    meta: {
      title: String(data.title ?? 'Untitled'),
      date: String(data.date ?? '1970-01-01'),
      excerpt: String(data.excerpt ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      coverImage: resolveCoverImage(data, content),
      slug: normalizedSlug,
    },
    content,
  };
};
