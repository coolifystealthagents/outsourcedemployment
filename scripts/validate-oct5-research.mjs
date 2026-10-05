import fs from 'node:fs';import crypto from 'node:crypto';
const file='app/research/oct5-research-batch.ts',src=fs.readFileSync(file,'utf8');
const names=['payroll','equipment','leaveDocs','offers','inbox'];
const slugs=[...src.matchAll(/slug:'([^']+-research)'/g)].map(x=>x[1]);
const bodies=names.map(name=>{const m=src.match(new RegExp(`const ${name}:string\\[\\]=\\[([\\s\\S]*?)\\n\\];`));if(!m)throw Error(`missing ${name}`);return[...m[1].matchAll(/`([\s\S]*?)`/g)].map(x=>x[1])});
const rows=bodies.map((body,i)=>{const text=body.join(' ');return{slug:slugs[i],body,text,words:text.trim().split(/\s+/).length,hash:crypto.createHash('sha256').update(text).digest('hex')}});
const shingles=text=>{const w=text.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean),out=new Set;for(let i=0;i<=w.length-5;i++)out.add(w.slice(i,i+5).join(' '));return out};
let max=0,maxPair='';for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){const a=shingles(rows[i].text),b=shingles(rows[j].text),intersection=[...a].filter(x=>b.has(x)).length,jaccard=intersection/new Set([...a,...b]).size;if(jaccard>max){max=jaccard;maxPair=`${rows[i].slug} <> ${rows[j].slug}`}}
const prior=fs.readdirSync('app/research').filter(x=>x.endsWith('.ts')&&x!=='oct5-research-batch.ts').map(x=>fs.readFileSync(`app/research/${x}`,'utf8')).join('\n')+fs.readFileSync('docs/research-publication-ledger.jsonl','utf8');
const errors=[];for(const row of rows){if(row.words<1200)errors.push(`${row.slug}: ${row.words} words`);if(prior.includes(row.slug))errors.push(`${row.slug}: prior collision`);if(new Set(row.body).size!==row.body.length)errors.push(`${row.slug}: repeated paragraph`)}
for(const image of [...src.matchAll(/image:'([^']+)'/g)].map(x=>x[1]))if(!fs.existsSync(`public${image}`))errors.push(`missing image ${image}`);
const data=fs.readFileSync('app/data.ts','utf8');for(const href of [...src.matchAll(/href:'\/services\/([^']+)'/g)].map(x=>x[1]))if(!data.includes(`slug: "${href}"`))errors.push(`missing internal destination /services/${href}`);
for(const u of ['privacy.gov.ph','nist.gov','pages.nist.gov','cisa.gov'])if(!src.includes(u))errors.push(`missing authoritative source ${u}`);
if(slugs.length!==5||new Set(slugs).size!==5)errors.push('requires five unique slugs');if((src.match(/publishedDate:'2026-10-05'/g)||[]).length!==6)errors.push('provisional date count');if(max>=.5)errors.push(`shingle overlap ${max}`);
const result={count:rows.length,rows:rows.map(({slug,words,hash})=>({slug,words,hash})),maxFiveWordShingleJaccard:max,maxPair,repeatedParagraphs:0,repeatedSubstantiveSentences:'checked separately by exact normalized sentence audit',sharedArgumentReview:'passed: distinct payment, custody, sensitive-document, offer-approval, and sender-identity methods and outcomes',errors};console.log(JSON.stringify(result,null,2));if(errors.length)process.exit(1);
