import assert from 'node:assert/strict';
import fs from 'node:fs';
import {october2BlogBatch as posts} from '../app/blog/oct2-batch.ts';
import {september28BlogBatch as priorPosts} from '../app/blog/sep28-batch.ts';

const source=fs.readFileSync('app/blog/oct2-batch.ts','utf8');
const words=s=>s.match(/\b[\w’'-]+\b/g)||[];
const shingles=s=>{const w=s.toLowerCase().match(/[a-z0-9]+/g)||[];return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')))};
const jaccard=(a,b)=>{let n=0;for(const x of a)if(b.has(x))n++;return n/(a.size+b.size-n)};

assert.equal(posts.length,12,'expected exactly 12 Blog articles');
assert.equal(new Set(posts.map(p=>p.slug)).size,12,'duplicate Blog slug');
assert.ok(!source.includes('const body='),'shared body generator remains in source');
assert.ok(!source.includes('const prose='),'shared prose generator remains in source');

const counts={};
const paragraphs=new Map();
const repeated=[];
for(const post of posts){
  const body=post.body.join(' ');
  counts[post.slug]=words(body).length;
  assert.ok(counts[post.slug]>=900,`${post.slug}: ${counts[post.slug]} body words`);
  assert.equal(post.publishedDate,'2026-10-02');
  assert.ok(post.sources.length>=3);
  assert.ok(post.cta.startsWith('/services'));
  assert.ok(!/[—–]/.test(body),`${post.slug}: dash style failure`);
  for(const paragraph of post.body){
    const normalized=paragraph.replace(/\s+/g,' ').trim().toLowerCase();
    if(paragraphs.has(normalized)) repeated.push([paragraphs.get(normalized),post.slug]);
    else paragraphs.set(normalized,post.slug);
  }
}
assert.equal(repeated.length,0,`repeated paragraphs: ${JSON.stringify(repeated)}`);

let max={value:0,slugs:[]};
for(let i=0;i<posts.length;i++)for(let j=i+1;j<posts.length;j++){
  const value=jaccard(shingles(posts[i].body.join(' ')),shingles(posts[j].body.join(' ')));
  if(value>max.value)max={value,slugs:[posts[i].slug,posts[j].slug]};
}
assert.ok(max.value<.5,`within-family overlap: ${JSON.stringify(max)}`);
let crossMax={value:0,slugs:[]};
for(const post of posts)for(const prior of priorPosts){
  const value=jaccard(shingles(post.body.join(' ')),shingles(prior.body.join(' ')));
  if(value>crossMax.value)crossMax={value,slugs:[post.slug,prior.slug]};
}
assert.ok(crossMax.value<.5,`cross-cycle overlap: ${JSON.stringify(crossMax)}`);
console.log(JSON.stringify({status:'PASS',counts,withinFamilyMax:max,crossCycleMax:crossMax,repeatedParagraphs:0},null,2));
