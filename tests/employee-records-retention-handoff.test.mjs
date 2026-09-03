import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-employee-records-retention-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /publishedDate: '2026-08-12'/);
assert.match(record, /modifiedDate: '2026-09-03'/);
assert.match(record, /openGraphModifiedDate: '2026-09-03'/);
assert.match(record, /handoff: \{ href: '\/services\/employee-records-management'/);
assert.match(record, /label: 'Plan employee records management'/);
assert.match(record, /inventory checks, access reviews, and exception notes/);
assert.match(record, /responsible owner still decides record changes, disclosure, retention exceptions, employment status, and access/);
assert.match(renderer, /openGraphModifiedDate=.*p as \{openGraphModifiedDate\?:string\}/);
assert.match(renderer, /type:'article' as const/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('employee-records retention handoff contract passed');
