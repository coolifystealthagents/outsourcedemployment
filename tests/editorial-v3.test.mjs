import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const required = [
  'app/editorial/EditorialArticle.tsx',
  'app/editorial/EditorialToc.tsx',
  'app/editorial/editorial.module.css',
  'app/editorial/editorial-utils.ts',
];

test('shared editorial V3 files exist', () => {
  required.forEach((path) => assert.ok(existsSync(join(root, path)), `missing ${path}`));
});

test('dynamic blog and research routes use the shared shell without local article chrome', () => {
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /EditorialArticle/);
    assert.doesNotMatch(source, /function ArticleHeader|function ArticleFooter/);
  }
});

test('editorial shell includes generated TOCs, metadata, related content, services, and contact CTA', () => {
  const shell = read('app/editorial/EditorialArticle.tsx');
  const toc = read('app/editorial/EditorialToc.tsx');
  assert.match(toc, /Table of contents/);
  for (const marker of ['Article details', 'Related services', 'Related reading', '/contact-us']) {
    assert.match(shell, new RegExp(marker));
  }
  assert.match(shell, /sources/i);
  assert.match(shell, /<table/);
  assert.match(shell, /<ul/);
});

test('scrollspy exposes active state and accessible current section', () => {
  const toc = read('app/editorial/EditorialToc.tsx');
  assert.match(toc, /IntersectionObserver/);
  assert.match(toc, /aria-current/);
  assert.match(toc, /<details/);
});

test('isolated editorial styles enforce reading measure, sticky bounded sidebar, offsets, and mobile flow', () => {
  const css = read('app/editorial/editorial.module.css');
  assert.match(css, /max-width:\s*7[0-5]ch/);
  assert.match(css, /position:\s*sticky/);
  assert.match(css, /max-height:\s*calc\(100vh/);
  assert.match(css, /overflow-y:\s*auto/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /@media\s*\(max-width:/);
});

test('editorial indexes include thumbnails and useful metadata', () => {
  for (const path of ['app/blog/page.tsx', 'app/blog/page/[page]/page.tsx', 'app/research/page.tsx']) {
    const source = read(path);
    assert.match(source, /EditorialIndex/);
  }
});

test('visible prose punctuation is sanitized without changing URL and code tokens', async () => {
  const { sanitizeVisibleProse } = await import('../app/editorial/editorial-utils.ts');
  assert.equal(sanitizeVisibleProse('Clear — concise – useful -- prose'), 'Clear, concise, useful - prose');
  assert.equal(sanitizeVisibleProse('https://example.com/a--b --help'), 'https://example.com/a--b --help');
});
