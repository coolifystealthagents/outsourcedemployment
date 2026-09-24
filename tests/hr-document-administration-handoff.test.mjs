import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-hr-document-administration-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /publishedDate: '2026-08-12'/);
assert.match(record, /modifiedDate: '2026-09-24'/);
assert.match(record, /openGraphModifiedDate: '2026-09-24'/);
assert.match(record, /handoff: \{ href: '\/services\/employment-document-administration'/);
assert.match(record, /label: 'Plan employment document administration'/);
assert.match(record, /organize approved templates, version checks, signature-status follow-up, and exception records/);
assert.match(record, /HR owner still approves terms, legal language, signatures, employment status, policy exceptions, and final document release/);
assert.match(renderer, /openGraphModifiedDate=.*p as \{openGraphModifiedDate\?:string\}/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('HR document administration handoff contract passed');
