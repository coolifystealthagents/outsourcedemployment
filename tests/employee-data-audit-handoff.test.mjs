import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-employee-data-audit-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /publishedDate: '2026-08-10'/);
assert.match(record, /modifiedDate: '2026-10-15'/);
assert.match(record, /openGraphModifiedDate: '2026-10-15'/);
assert.match(record, /handoff: \{ href: '\/services\/employee-records-management'/);
assert.match(record, /label: 'Plan employee records management'/);
assert.match(record, /missing fields, duplicate flags, access evidence, and exception notes/);
assert.match(record, /HR owner still decides record changes, disclosure, retention exceptions, employment status, and confidential access/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('employee-data audit handoff contract passed');