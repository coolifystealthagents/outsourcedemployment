import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {september24BlogBatch as posts} from '../app/blog/sep24-batch.ts';

const publicationDate='2026-09-24';
const words=value=>value.trim().split(/\s+/).filter(Boolean).length;
const inventory=fs.readdirSync(path.join(process.cwd(),'app/blog')).filter(name=>name.endsWith('.ts')&&name!=='sep24-batch.ts').map(name=>fs.readFileSync(path.join(process.cwd(),'app/blog',name),'utf8')).join('\n');

assert.equal(posts.length,12,'daily run must contain exactly 12 articles');
assert.equal(new Set(posts.map(post=>post.slug)).size,12,'slugs must be unique');
for(const post of posts){
  assert.equal(post.publishedDate,publicationDate,`${post.slug}: publication date mismatch`);
  assert.ok(!inventory.includes(`slug:'${post.slug}'`)&&!inventory.includes(`slug: '${post.slug}'`),`${post.slug}: slug existed before this run`);
  assert.ok(words([post.title,post.excerpt,...post.body].join(' '))>=900,`${post.slug}: under 900 substantive words`);
  assert.ok(post.body.length>=10,`${post.slug}: insufficient article structure`);
  assert.ok(post.sources.length>=4,`${post.slug}: missing authoritative sources`);
  assert.ok(post.cta.startsWith('/services/'),`${post.slug}: missing service CTA`);
  assert.ok(fs.existsSync(path.join(process.cwd(),'public',post.image)),`${post.slug}: missing image asset`);
  const htmlPath=path.join(process.cwd(),'.next/server/app/blog',`${post.slug}.html`);
  assert.ok(fs.existsSync(htmlPath),`${post.slug}: static route not generated`);
  const html=fs.readFileSync(htmlPath,'utf8');
  const canonical=`https://outsourcedemployment.com/blog/${post.slug}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`),`${post.slug}: canonical mismatch`);
  assert.ok(html.includes(`"datePublished":"${publicationDate}"`),`${post.slug}: schema date mismatch`);
  assert.ok(html.includes(`dateTime="${publicationDate}"`),`${post.slug}: visible date mismatch`);
  assert.ok(html.includes(post.image),`${post.slug}: image not rendered`);
  assert.ok(html.includes(`href="${post.cta}"`),`${post.slug}: service CTA not rendered`);
  assert.ok(html.includes('guide-sources-title'),`${post.slug}: source list not rendered`);
}

const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
for(const post of posts) assert.ok(sitemap.includes(`/blog/${post.slug}`),`${post.slug}: missing from sitemap`);
console.log(`PASS: ${posts.length} new Blog articles; unique slugs, >=900 words, date, canonical, media, sources, service CTA, schema, static routes, and sitemap verified`);
