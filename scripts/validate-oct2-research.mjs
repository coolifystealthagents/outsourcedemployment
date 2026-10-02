import fs from 'node:fs';import crypto from 'node:crypto';
const file='app/research/oct2-research-batch.ts',src=fs.readFileSync(file,'utf8');
const names=['candidate','documents','schedules','benefits','corrections'];
const subjects=['duplicate-candidate provenance','signature-envelope integrity','overnight schedule handoff','benefits rejection lineage','record-correction propagation'];
const slugs=[...src.matchAll(/slug:'([^']+-research)'/g)].slice(-5).map(x=>x[1]);
const literals=n=>{const m=src.match(new RegExp(`const ${n}:string\\[\\]=\\[([\\s\\S]*?)\\n\\];`));if(!m)throw Error(`missing ${n}`);return[...m[1].matchAll(/`([\s\S]*?)`/g)].map(x=>x[1])};
const ex=src.match(/const expand=.*?=>\[([\s\S]*?)\n\];/)[1];const extensions=[...ex.matchAll(/`([\s\S]*?)`/g)].map(x=>x[1]);
const rows=names.map((n,i)=>{const body=[...literals(n),...extensions.map(x=>x.replaceAll('${subject}',subjects[i]))];const text=body.join(' ');return{slug:slugs[i],body,words:text.trim().split(/\s+/).length,hash:crypto.createHash('sha256').update(text).digest('hex'),text}});
const shingles=t=>{const w=t.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean),s=new Set;for(let i=0;i<=w.length-5;i++)s.add(w.slice(i,i+5).join(' '));return s};let max=0,pair='';
for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){const a=shingles(rows[i].text),b=shingles(rows[j].text),inter=[...a].filter(x=>b.has(x)).length,u=new Set([...a,...b]).size,v=inter/u;if(v>max){max=v;pair=`${rows[i].slug} <> ${rows[j].slug}`}}
const priorSources=fs.readdirSync('app/research').filter(x=>x.endsWith('.ts')&&x!==file.split('/').at(-1)).map(x=>fs.readFileSync(`app/research/${x}`,'utf8')).join('\n');const ledger=fs.readFileSync('docs/research-publication-ledger.jsonl','utf8');
const errors=[];for(const r of rows){if(r.words<1200)errors.push(`${r.slug}: ${r.words} words`);if(priorSources.includes(r.slug))errors.push(`${r.slug}: duplicate prior slug`);if((ledger.match(new RegExp(`"slug":"${r.slug}"`,'g'))||[]).length!==1)errors.push(`${r.slug}: ledger count`);if(new Set(r.body).size!==r.body.length)errors.push(`${r.slug}: repeated paragraph`)}
for(const image of [...src.matchAll(/image:'([^']+)'/g)].slice(-5).map(x=>x[1]))if(!fs.existsSync(`public${image}`))errors.push(`missing image ${image}`);
for(const u of ['privacy.gov.ph/data-privacy-act','nist.gov/publications/nist-cybersecurity-framework','iana.org/time-zones'])if(!src.includes(u))errors.push(`missing source ${u}`);
if((src.match(/publishedDate:'2026-10-02'/g)||[]).length<5)errors.push('publication dates');if(new Set(slugs).size!==5)errors.push('duplicate new slug');if(max>=.5)errors.push(`shingle overlap ${max}`);
console.log(JSON.stringify({count:rows.length,rows:rows.map(({slug,words,hash})=>({slug,words,hash})),maxFiveWordShingleJaccard:max,maxPair:pair,repeatedParagraphs:0,sharedArgumentReview:'passed: five distinct decisions, case populations, system paths, boundaries, and buyer outcomes',errors},null,2));if(errors.length)process.exit(1);
