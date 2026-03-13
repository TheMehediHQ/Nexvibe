import assert from 'node:assert/strict';
import test from 'node:test';

import { getAllPosts, getPostBySlug } from '../../lib/blog.ts';

test('blog posts expose cover images for social metadata', () => {
  const posts = getAllPosts();

  assert.ok(posts.length > 0, 'Expected blog posts to exist');
  assert.equal(
    posts.filter((post) => Boolean(post.meta.coverImage)).length,
    posts.length,
    'Expected every post to provide coverImage'
  );
  assert.equal(
    new Set(posts.map((post) => post.meta.coverImage)).size,
    posts.length,
    'Expected each post to use a unique coverImage'
  );
});

test('getPostBySlug includes frontmatter cover image', () => {
  const post = getPostBySlug('open-source-nextjs-portfolio');

  assert.ok(post, 'Expected open-source-nextjs-portfolio post');
  assert.equal(post.meta.coverImage, '/assets/images/blogs/next.png');
});
