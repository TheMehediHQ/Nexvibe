import assert from 'node:assert/strict';
import test from 'node:test';

import {
  SITE_URL,
  absoluteImageUrl,
  absoluteUrl,
  createPageMetadata,
} from '../../lib/seo.ts';

test('absoluteUrl normalizes route path', () => {
  assert.equal(absoluteUrl('/portfolio'), `${SITE_URL}/portfolio`);
  assert.equal(absoluteUrl('portfolio'), `${SITE_URL}/portfolio`);
  assert.equal(absoluteUrl('/'), `${SITE_URL}/`);
});

test('absoluteImageUrl normalizes relative and keeps absolute urls', () => {
  assert.equal(
    absoluteImageUrl('/assets/images/blogs/git.jpg'),
    `${SITE_URL}/assets/images/blogs/git.jpg`
  );
  assert.equal(
    absoluteImageUrl('https://cdn.example.com/image.jpg'),
    'https://cdn.example.com/image.jpg'
  );
});

test('createPageMetadata provides per-route canonical', () => {
  const metadata = createPageMetadata({
    path: '/portfolio',
    title: 'Portfolio',
    description: 'Portfolio description',
  });

  assert.equal(metadata.alternates?.canonical, '/portfolio');
  assert.equal(metadata.openGraph?.url, `${SITE_URL}/portfolio`);
  assert.equal(
    metadata.openGraph?.images?.[0]?.url,
    `${SITE_URL}/profile/profile.png`
  );
  assert.equal(metadata.robots?.index, true);
});

test('createPageMetadata supports noindex pages', () => {
  const metadata = createPageMetadata({
    path: '/draft',
    title: 'Draft',
    description: 'Draft page',
    noIndex: true,
  });

  assert.equal(metadata.robots?.index, false);
  assert.equal(metadata.robots?.follow, false);
});
