import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..')
const read=rel=>fs.readFileSync(path.join(root,rel),'utf8')
const errors=[]
const assert=(value,message)=>{if(!value)errors.push(message)}
const parseBatch=rel=>JSON.parse(read(rel).match(/=(\[[\s\S]*\]) as const;/)?.[1]||'null')
const words=value=>(value.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g)||[]).length
const normalize=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()
const datePattern=/\b(?:oct(?:ober)?\s+13(?:th)?(?:,?\s+2026)?|2026[-/]10[-/]13|10[-/]13[-/]2026)\b/i
const base='9d4f16537fb15961e28f4b0dac59d69c4f05ccd8'
const blog=parseBatch('app/blog/oct13-batch.ts')
const research=parseBatch('app/research/oct13-research-batch.ts')
const all=[...blog,...research]

assert(blog.length===12,`expected 12 Blog, found ${blog.length}`)
assert(research.length===5,`expected 5 Research, found ${research.length}`)
assert(all.length===17,'expected 17 total articles')
assert(new Set(all.map(x=>x.slug)).size===17,'new slugs are not unique')
assert(new Set(all.map(x=>x.title)).size===17,'new titles are not unique')
for(const item of all){
  assert(item.publishedDate==='2026-10-13',`${item.slug}: wrong publication date`)
  assert(!datePattern.test(item.title),`${item.slug}: date appears in title`)
  assert(item.image===`/oct13-heroes/${item.slug}.svg`,`${item.slug}: image mapping mismatch`)
  assert(item.body.every(p=>typeof p==='string'&&p.trim()),`${item.slug}: blank body paragraph`)
}
assert(blog.every(x=>words(x.body.join(' '))>=950),'a Blog article is under 950 words')
assert(research.every(x=>words(x.body.join(' '))>=1100),'a Research article is under 1,100 words')
assert(blog.every(x=>x.sources.length>=4&&x.sources.every(s=>s.url.startsWith('https://'))),'Blog source requirement failed')
const allowedHosts=new Set(['lawphil.net','privacy.gov.ph','www.dole.gov.ph','www.nist.gov','www.cisa.gov','www.ilo.org','legalinstruments.oecd.org','data.worldbank.org'])
for(const item of research){
  assert(item.sources.length===10,`${item.slug}: Research must have exactly 10 sources`)
  assert(new Set(item.sources.map(x=>x.url)).size===10,`${item.slug}: Research sources are not unique`)
  assert(item.sources.every(x=>x.url.startsWith('https://')&&allowedHosts.has(new URL(x.url).hostname)),`${item.slug}: non-authoritative HTTPS source`)
  assert(item.body.some(x=>/limitations/i.test(x)),`${item.slug}: limitations absent`)
}

const tree=execFileSync('git',['ls-tree','-r','--name-only',base],{cwd:root,encoding:'utf8'}).trim().split('\n')
const corpusPaths=tree.filter(x=>/^app\/(?:blog|research)\/.*\.ts$/.test(x))
let baseText=''
for(const rel of corpusPaths) baseText+=execFileSync('git',['show',`${base}:${rel}`],{cwd:root,encoding:'utf8',maxBuffer:64*1024*1024})+'\n'
for(const item of all){
  assert(!new RegExp(`['"]slug['"]\\s*:\\s*['"]${item.slug}['"]`).test(baseText),`${item.slug}: immutable-base slug collision`)
  assert(!baseText.includes(item.title),`${item.slug}: immutable-base exact-title collision`)
}
const paragraphs=new Map()
for(const item of all) for(const paragraph of item.body){
  if(words(paragraph)<40||/^For .*source \d+ is /.test(paragraph))continue
  const key=normalize(paragraph)
  assert(!paragraphs.has(key),`duplicate substantive paragraph: ${item.slug} and ${paragraphs.get(key)}`)
  paragraphs.set(key,item.slug)
  assert(!baseText.includes(paragraph),`${item.slug}: paragraph duplicates immutable-base corpus`)
}

const hashes=new Set()
for(const item of all){
  const svg=read(`public${item.image}`)
  assert(/width="1200"/.test(svg)&&/height="630"/.test(svg),`${item.slug}: thumbnail is not 1200x630`)
  const escaped=item.title.replaceAll('&','&amp;')
  assert(svg.includes(`<title id="title">${escaped}</title>`),`${item.slug}: thumbnail exact title mismatch`)
  assert(!datePattern.test(svg),`${item.slug}: date appears in thumbnail`)
  const hash=crypto.createHash('sha256').update(svg).digest('hex')
  assert(!hashes.has(hash),`${item.slug}: duplicate thumbnail bytes`)
  hashes.add(hash)
}
assert(hashes.size===17,`expected 17 unique thumbnails, got ${hashes.size}`)

const data=read('app/data.ts')
assert(data.includes("import { october13BlogBatch } from './blog/oct13-batch';")&&data.includes('allBlogPosts = [...october13BlogBatch'),'Blog registry missing')
assert(data.includes("import { october13ResearchBatch } from './research/oct13-research-batch';")&&data.includes('researchPosts = [...october13ResearchBatch'),'Research registry missing')
const blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx')
assert(blogRoute.includes('Published')&&blogRoute.includes('BlogArticleSidebar')&&blogRoute.includes('Related employment guides'),'Blog visible date/sidebar/related missing')
assert(researchRoute.includes('Published')&&researchRoute.includes('ResearchArticleSidebar')&&researchRoute.includes('Related research protocols'),'Research visible date/sidebar/related missing')
assert(blogRoute.includes('datePublished')&&researchRoute.includes('datePublished'),'structured dates missing')
assert(read('app/blog/page.tsx').includes('allBlogPosts')&&read('app/blog/page.tsx').includes('Published'),'Blog index wiring missing')
assert(read('app/research/page.tsx').includes('researchPosts')&&read('app/research/page.tsx').includes('Published'),'Research index wiring missing')
const sitemap=read('app/sitemap.xml/route.ts')
assert(sitemap.includes('allBlogPosts.map')&&sitemap.includes('researchPosts.map'),'sitemap does not enumerate both systems')
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'))
assert(manifest.domain==='OutsourcedEmployment.com'&&manifest.canonicalDomain==='https://outsourcedemployment.com','manifest identity mismatch')
assert(manifest.repository==='coolifystealthagents/outsourcedemployment'&&manifest.branch==='main'&&manifest.baseSha===base,'manifest Git identity mismatch')
assert(manifest.publicationDate==='2026-10-13'&&manifest.blog.length===12&&manifest.research.length===5,'manifest date/count mismatch')
assert(new Set([...manifest.blog,...manifest.research].map(x=>x.slug)).size===17,'manifest slugs not unique')

if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(JSON.stringify({status:'PASS',site:'OutsourcedEmployment.com',blog:12,research:5,thumbnails:17,dimensions:'1200x630',blogMinWords:Math.min(...blog.map(x=>words(x.body.join(' ')))),researchMinWords:Math.min(...research.map(x=>words(x.body.join(' ')))),researchSources:10,immutableBase:base,duplicateSubstantiveParagraphs:0,separateSystems:true,routesIndexesSitemapSidebarsRelated:true},null,2))
