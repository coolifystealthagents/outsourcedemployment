import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-leave-records-reconciliation-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /publishedDate: '2026-08-12'/);
assert.match(record, /modifiedDate: '2026-09-12'/);
assert.match(record, /openGraphModifiedDate: '2026-09-12'/);
assert.match(record, /handoff: \{ href: '\/services\/leave-tracking-support'/);
assert.match(record, /label: 'Plan leave tracking support'/);
assert.match(record, /comparing leave requests, recorded balances, and missing approvals/);
assert.match(record, /authorized owner still decides entitlement, exceptions, balances, and dispute outcomes/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('leave-records reconciliation handoff contract passed');