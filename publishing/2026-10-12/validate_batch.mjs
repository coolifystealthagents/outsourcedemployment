import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const read=rel=>fs.readFileSync(path.join(root,rel),'utf8');
const assert=(value,message)=>{if(!value)throw new Error(message)};
const parseBatch=rel=>JSON.parse(read(rel).match(/=(\[[\s\S]*\]) as const;/)?.[1]||'null');
const words=value=>(value.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
const normalize=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const datePattern=/\b(?:oct(?:ober)?\s+12(?:st)?(?:,?\s+2026)?|2026[-/]10[-/]12|10[-/]12[-/]2026)\b/i;

const blog=parseBatch('app/blog/oct12-batch.ts');
const research=parseBatch('app/research/oct12-research-batch.ts');
const all=[...blog,...research];
assert(blog.length===12,`expected 12 Blog, found ${blog.length}`);
assert(research.length===5,`expected 5 Research, found ${research.length}`);
assert(new Set(all.map(item=>item.slug)).size===17,'batch slugs are not unique');
assert(new Set(all.map(item=>item.title)).size===17,'batch titles are not unique');
for(const item of all){
  assert(item.publishedDate==='2026-10-12',`${item.slug}: wrong publication date`);
  assert(!datePattern.test(item.title),`${item.slug}: date appears in title`);
  assert(item.image===`/oct12-heroes/${item.slug}.svg`,`${item.slug}: image mapping mismatch`);
  assert(item.body.every(p=>typeof p==='string'&&p.trim()),`${item.slug}: empty body paragraph`);
}
assert(blog.every(item=>words(item.body.join(' '))>=750),'a Blog article is under 750 words');
assert(research.every(item=>words(item.body.join(' '))>=1100),'a Research article is under 1,100 words');
assert(blog.every(item=>item.sources.length>=4&&item.sources.every(s=>s.url.startsWith('https://'))),'Blog source requirement failed');
assert(research.every(item=>item.sources.length===10&&item.sources.every(s=>s.url.startsWith('https://'))),'Research must have 10 authoritative HTTPS sources');

const existingText=[...fs.readdirSync(path.join(root,'app/blog')).filter(f=>f.endsWith('.ts')&&f!=='oct12-batch.ts').map(f=>read(`app/blog/${f}`)),...fs.readdirSync(path.join(root,'app/research')).filter(f=>f.endsWith('.ts')&&f!=='oct12-research-batch.ts').map(f=>read(`app/research/${f}`))].join('\n');
for(const item of all){assert(!new RegExp(`['\"]slug['\"]\\s*:\\s*['\"]${item.slug}['\"]`).test(existingText),`${item.slug}: pre-existing slug collision`);assert(!existingText.includes(item.title),`${item.slug}: pre-existing exact title collision`)}

const paragraphs=new Map();
for(const item of all)for(const paragraph of item.body){if(words(paragraph)<20||/^\[\d+\]/.test(paragraph))continue;const key=normalize(paragraph);assert(!paragraphs.has(key),`duplicate substantive paragraph: ${item.slug} and ${paragraphs.get(key)}`);paragraphs.set(key,item.slug);assert(!existingText.includes(paragraph),`${item.slug}: substantive paragraph duplicates existing content`)}

const hashes=new Set();
for(const item of all){const rel=`public${item.image}`,svg=read(rel);assert(/width="1200"/.test(svg)&&/height="630"/.test(svg),`${item.slug}: thumbnail is not 1200x630`);assert(svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;')}</title>`),`${item.slug}: thumbnail title is not exact`);assert(!datePattern.test(svg),`${item.slug}: date appears in thumbnail`);const hash=crypto.createHash('sha256').update(svg).digest('hex');assert(!hashes.has(hash),`${item.slug}: duplicate thumbnail bytes`);hashes.add(hash)}

const data=read('app/data.ts');
assert(data.includes("import { october12BlogBatch } from './blog/oct12-batch';")&&data.includes('allBlogPosts = [...october12BlogBatch'),'Blog registry wiring missing');
assert(data.includes("import { october12ResearchBatch } from './research/oct12-research-batch';")&&data.includes('researchPosts = [...october12ResearchBatch'),'Research registry wiring missing');
const blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx');
assert(blogRoute.includes('Published')&&blogRoute.includes('BlogArticleSidebar')&&blogRoute.includes('Related employment guides'),'Blog visible date/sidebar missing');
assert(researchRoute.includes('Published')&&researchRoute.includes('ResearchArticleSidebar')&&researchRoute.includes('Related research protocols'),'Research visible date/sidebar missing');
assert(blogRoute.includes('datePublished')&&researchRoute.includes('datePublished'),'structured publication dates missing');
assert(read('app/blog/page.tsx').includes('allBlogPosts')&&read('app/blog/page.tsx').includes('Published'),'Blog index wiring missing');
assert(read('app/research/page.tsx').includes('researchPosts')&&read('app/research/page.tsx').includes('Published'),'Research index wiring missing');
const sitemap=read('app/sitemap.xml/route.ts');assert(sitemap.includes('allBlogPosts.map')&&sitemap.includes('researchPosts.map'),'sitemap does not enumerate both systems');

const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
assert(manifest.domain==='OutsourcedEmployment.com'&&manifest.publicationDate==='2026-10-12','manifest identity mismatch');
assert(manifest.blog.length===12&&manifest.research.length===5,'manifest count mismatch');
assert(new Set([...manifest.blog,...manifest.research].map(x=>x.slug)).size===17,'manifest slug mismatch');

console.log(JSON.stringify({status:'PASS',blog:12,research:5,thumbnails:17,dimensions:'1200x630',blogMinWords:Math.min(...blog.map(x=>words(x.body.join(' ')))),researchMinWords:Math.min(...research.map(x=>words(x.body.join(' ')))),researchSources:10,visibleDate:'October 12, 2026 via article and index formatters',duplicateSubstantiveParagraphs:0},null,2));
