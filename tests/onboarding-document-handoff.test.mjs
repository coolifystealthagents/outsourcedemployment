import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const batch = await readFile(new URL('../app/oct22-batch.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'onboarding-document-completeness-sampling';
const start = batch.indexOf(`slug: '${slug}'`);
const end = batch.indexOf('\n  },', start);
assert.ok(start >= 0 && end > start, 'selected onboarding research record must have clear boundaries');
const record = batch.slice(start, end);

assert.match(record, /publishedDate: '2026-10-22'/);
assert.match(record, /modifiedDate: '2026-10-24'/);
assert.match(record, /handoff: \{ href: '\/services\/new-hire-onboarding'/);
assert.match(record, /label: 'Plan new-hire onboarding'/);
assert.match(record, /track approved documents, account requests, and first-week blockers in one clear list/);
assert.match(record, /A Philippines-based coordinator can prepare the list and route gaps/);
assert.match(record, /HR owner still decides employment terms, policy answers, access, and start approval/);
assert.match(renderer, /href=\{handoff\.href\}/);
assert.match(renderer, /const modifiedDate = typeof post\.modifiedDate/);

console.log('onboarding document handoff contract passed');