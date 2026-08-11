import fs from 'node:fs';
import crypto from 'node:crypto';

const root = new URL('..', import.meta.url).pathname;
const manifestPath = `${root}.paperclip/aug10-2026/research.json`;
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const data = fs.readFileSync(`${root}app/data.ts`, 'utf8');
const detail = fs.readFileSync(`${root}app/research/[slug]/page.tsx`, 'utf8');
const index = fs.readFileSync(`${root}app/research/page.tsx`, 'utf8');
const sitemap = fs.readFileSync(`${root}app/sitemap.xml/route.ts`, 'utf8');

if (manifest.entries.length < manifest.minimum) throw new Error('accepted count is below minimum');
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error(`duplicate slug: ${entry.slug}`);
  seen.add(entry.slug);
  if (!entry.route.startsWith('/research/')) throw new Error(`wrong family route: ${entry.route}`);
  if (entry.sourcePath !== 'app/data.ts' || !fs.existsSync(`${root}${entry.sourcePath}`)) throw new Error(`missing source: ${entry.sourcePath}`);
  if (entry.sourceDate !== manifest.targetDate || entry.renderedDate !== manifest.targetDate) throw new Error(`wrong date: ${entry.slug}`);
  if (!data.includes(`slug: '${entry.slug}'`)) throw new Error(`missing source slug: ${entry.slug}`);
  const sourceRecord = data.split('\n').find(line => line.includes(`slug: '${entry.slug}'`));
  if (!sourceRecord || !sourceRecord.includes(`publishedDate: '${manifest.targetDate}'`)) throw new Error(`source date field absent for ${entry.slug}`);
  if (!detail.includes('datePublished') || !detail.includes('dateTime={publishedDate}')) throw new Error('rendered date fields absent');
  if (!detail.includes('articleUrl') || !detail.includes('alternates:{canonical')) throw new Error('canonical route rendering absent');
  if (!sitemap.includes('researchPosts.map')) throw new Error('research sitemap eligibility absent');
}
if (!index.includes('sort((a,b)=>(b.publishedDate||\'0000-00-00\').localeCompare(a.publishedDate||\'0000-00-00\'))')) throw new Error('index is not newest-first');
console.log(`PASS ${manifest.entries.length} research entries; manifest sha256 ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
