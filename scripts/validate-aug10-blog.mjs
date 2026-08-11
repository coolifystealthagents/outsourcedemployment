import fs from 'node:fs';
import assert from 'node:assert/strict';
const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/blog/daily-batch.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/data.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map(e => e.slug)).size, manifest.entries.length);
assert.match(route, /datePublished:publishedDate/);
assert.ok(route.includes('<time dateTime={publishedDate}>'));
assert.ok(route.includes('alternates:{canonical}'));
assert.match(sitemap, /allBlogPosts/);
for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/blog\/[a-z0-9-]+$/);
  assert.equal(entry.route, '/blog/' + entry.slug);
  assert.equal(entry.sourceDate, manifest.targetDate);
  assert.equal(entry.renderedDate, manifest.targetDate);
  assert.match(source, new RegExp(entry.slug));
  assert.match(source, /publishedDate: '2026-08-10'/);
}
assert.match(index, /dailyBlogBatch\.slice\(22\).*dailyBlogBatch\.slice\(0, 22\)/);
console.log('PASS: ' + manifest.entries.length + ' August 10 blog routes, provenance, rendered date, canonical, sitemap, and newest-first checks');
