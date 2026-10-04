import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const data = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-schedule-administration-research';
const start = data.indexOf(`{ slug: '${slug}'`);
const end = data.indexOf('\n  { slug:', start + 1);
assert.ok(start >= 0 && end > start, 'target research record must have forward record boundaries');
const record = data.slice(start, end);

assert.match(record, /modifiedDate: '2026-10-04'/);
assert.match(record, /openGraphModifiedDate: '2026-10-04'/);
assert.match(record, /handoff: \{ href: '\/services\/schedule-administration'/);
assert.match(record, /label: 'Plan schedule administration'/);
assert.match(record, /prepare availability checks, coverage reports, change logs, and reminder messages/);
assert.match(record, /manager still approves schedules, overtime, exceptions, attendance disputes, staffing commitments, and policy changes/);
assert.match(renderer, /modifiedTime:openGraphModifiedDate/);
assert.match(renderer, /const handoff=.*p as \{handoff\?:\{href:string;label:string;body:string\}\}/);
assert.match(renderer, /href=\{handoff\.href\}/);

console.log('schedule administration handoff contract passed');
