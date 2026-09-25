import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {september25ResearchBatch as posts} from '../app/research/sep25-research-batch.ts';

const publicationDate='2026-09-25';
const words=value=>value.trim().split(/\s+/).filter(Boolean).length;
const inventory=fs.readdirSync(path.join(process.cwd(),'app/research')).filter(name=>name.endsWith('.ts')&&name!=='sep25-research-batch.ts').map(name=>fs.readFileSync(path.join(process.cwd(),'app/research',name),'utf8')).join('\n');

assert.equal(posts.length,5,'daily run must contain exactly 5 research articles');
assert.equal(new Set(posts.map(post=>post.slug)).size,5,'research slugs must be unique');
for(const post of posts){
  assert.equal(post.publishedDate,publicationDate,`${post.slug}: publication date mismatch`);
  assert.ok(!inventory.includes(`slug:'${post.slug}'`)&&!inventory.includes(`slug: '${post.slug}'`),`${post.slug}: slug existed before this run`);
  const bodyWithoutSourceAppendix=post.body.slice(0,-1);
  assert.ok(words(bodyWithoutSourceAppendix.join(' '))>=1200,`${post.slug}: under 1200 substantive body words excluding source appendix`);
  assert.ok(post.body.length>=10,`${post.slug}: insufficient article structure`);
  assert.ok(post.handoff.href.startsWith('/services/'),`${post.slug}: missing service handoff`);
  assert.ok(fs.existsSync(path.join(process.cwd(),'public',post.image)),`${post.slug}: missing image asset`);
  const htmlPath=path.join(process.cwd(),'.next/server/app/research',`${post.slug}.html`);
  assert.ok(fs.existsSync(htmlPath),`${post.slug}: static route not generated`);
  const html=fs.readFileSync(htmlPath,'utf8');
  const canonical=`https://outsourcedemployment.com/research/${post.slug}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`),`${post.slug}: canonical mismatch`);
  assert.ok(html.includes(`"datePublished":"${publicationDate}"`),`${post.slug}: schema date mismatch`);
  assert.ok(html.includes(`dateTime="${publicationDate}"`),`${post.slug}: visible date mismatch`);
  assert.ok(html.includes(post.image),`${post.slug}: image not rendered`);
  assert.ok(html.includes(`href="${post.handoff.href}"`),`${post.slug}: service handoff not rendered`);
}

const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
for(const post of posts) assert.ok(sitemap.includes(`/research/${post.slug}`),`${post.slug}: missing from sitemap`);
console.log(`PASS: ${posts.length} new Research articles; unique slugs, >=1200 body-only words excluding source appendix, date, canonical, media, service handoff, schema, static routes, and sitemap verified`);
