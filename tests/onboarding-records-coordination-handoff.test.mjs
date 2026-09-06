import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-onboarding-records-coordination-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /publishedDate: '2026-08-12'/);
assert.match(record, /modifiedDate: '2026-09-06'/);
assert.match(record, /openGraphModifiedDate: '2026-09-06'/);
assert.match(record, /handoff: \{ href: '\/services\/new-hire-onboarding'/);
assert.match(record, /label: 'Plan new-hire onboarding'/);
assert.match(record, /approved documents, account-request follow-up, orientation records, and open questions/);
assert.match(record, /HR owner still decides eligibility, employment terms, policy answers, access, and start approval/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('onboarding records coordination handoff contract passed');
