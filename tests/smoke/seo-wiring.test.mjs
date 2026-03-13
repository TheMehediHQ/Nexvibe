import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const readFile = (relativePath) =>
  fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

test('sitemap includes all key indexable static routes', () => {
  const sitemapSource = readFile('app/sitemap.ts');

  ['/about', '/blog', '/book-call', '/dashboard', '/links', '/portfolio', '/certifications'].forEach(
    (route) => {
      assert.match(
        sitemapSource,
        new RegExp(`['\"]${route}['\"]`),
        `Expected route ${route} in STATIC_ROUTES`,
      );
    },
  );
});

test('robots points to sitemap.xml', () => {
  const robotsSource = readFile('app/robots.ts');
  assert.match(robotsSource, /sitemap\.xml/);
});
