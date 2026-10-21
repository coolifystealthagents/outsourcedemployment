import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const requiredFields = [
  'audience',
  'problem',
  'scope',
  'inputs',
  'workflow',
  'deliverables',
  'boundaries',
  'qualityControls',
  'humanDecisions',
  'startingScenarios',
  'faqs',
  'relatedServices',
  'heroImage',
  'heroAlt',
];

const serviceSlugs = [
  'candidate-sourcing-coordination',
  'employment-document-administration',
  'new-hire-onboarding',
  'employee-records-management',
  'schedule-administration',
  'leave-tracking-support',
  'payroll-input-preparation',
  'benefits-administration-support',
  'performance-review-coordination',
  'training-coordination',
  'offboarding-administration',
  'workforce-reporting',
];

test('service content uses a typed, runtime-validated schema with all depth fields', () => {
  assert.ok(existsSync(join(root, 'app/service-content.ts')));
  const source = read('app/service-content.ts');
  assert.match(source, /export type ServiceContent/);
  assert.match(source, /validateServiceContent/);
  for (const field of requiredFields) assert.match(source, new RegExp(`\\b${field}\\b`), `missing schema field ${field}`);
});

test('all twelve service routes have page-specific substantial content and unique local hero art', () => {
  const source = read('app/service-content.ts');
  for (const slug of serviceSlugs) assert.match(source, new RegExp(`['\"]${slug}['\"]`), `missing ${slug}`);
  const heroImages = [...source.matchAll(/heroImage:\s*['\"]([^'\"]+)['\"]/g)].map(match => match[1]);
  assert.equal(heroImages.length, serviceSlugs.length);
  assert.equal(new Set(heroImages).size, serviceSlugs.length, 'hero imagery must be route-specific');
  for (const image of heroImages) {
    assert.match(image, /^\//, `hero image must be local: ${image}`);
    assert.ok(existsSync(join(root, 'public', image.slice(1))), `missing hero image ${image}`);
  }
});

test('shared detail template renders every required long-form section and canonical CTA', () => {
  const source = read('app/services/[slug]/page.tsx');
  for (const field of requiredFields) assert.match(source, new RegExp(`content\\.${field}`), `template does not render ${field}`);
  for (const heading of ['Who this is for', 'The problem to solve', 'Scope of work', 'What we need from you', 'Workflow', 'Deliverables', 'Boundaries', 'Quality controls', 'Human decisions', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(source, new RegExp(heading, 'i'), `missing visible section ${heading}`);
  }
  assert.match(source, /href="\/contact-us"/);
  assert.doesNotMatch(source, /href="\/contact"/);
});

test('service index is image-led and includes guidance, boundaries, FAQs, and final CTA', () => {
  const source = read('app/services/page.tsx');
  assert.match(source, /<img/);
  for (const marker of ['engagement guidance', 'boundaries', 'frequently asked questions']) assert.match(source, new RegExp(marker, 'i'));
  assert.match(source, /href="\/contact-us"/);
});

test('service pages use a dedicated CSS module and avoid decorative zero-padded labels', () => {
  const detail = read('app/services/[slug]/page.tsx');
  const index = read('app/services/page.tsx');
  assert.match(detail, /service-pages\.module\.css/);
  assert.match(index, /service-pages\.module\.css/);
  assert.doesNotMatch(`${detail}\n${index}`, />\s*0[1-9]\s*</);
  assert.doesNotMatch(`${detail}\n${index}`, /[—–]/);
});
