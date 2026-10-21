import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const exists = (path) => existsSync(join(root, path));

const components = read('app/components.tsx');
const booking = read('app/booking-components.tsx');
const contact = read('app/contact-us/page.tsx');
const services = read('app/services/[slug]/page.tsx');
const nextConfig = read('next.config.mjs');
const sitemap = read('app/sitemap.xml/route.ts');

test('global header and footer expose required parent attribution and canonical navigation', () => {
  assert.ok((components.match(/Powered by StealthAgents/g) || []).length >= 2);
  assert.match(components, /href="\/contact-us"[^>]*>Contact Us/);
  assert.doesNotMatch(components, /href="\/contact"/);
  assert.match(components, /skip-link/);
});

test('approved review rail has ten unique records and no playback controls', () => {
  const names = [...booking.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.ok(names.length >= 10, `expected at least 10 reviews, found ${names.length}`);
  assert.equal(new Set(names).size, names.length);
  assert.match(booking, /StealthAgents reviews/);
  assert.doesNotMatch(booking, /pause|play|previous|next/i);
});

test('contact page implements form-first conversion and official team credibility', () => {
  assert.match(contact, /TestimonialsRail/);
  assert.match(contact, /StandardContactForm/);
  assert.match(contact, /stealth-agents-team-bacolod\.jpg/);
  assert.match(contact, /stealth-agents-logo\.png/);
  assert.match(contact, /Official team, Bacolod/);
  assert.doesNotMatch(contact, /OnceHub|oncehub/i);
});

test('required conversion and recovery routes exist', () => {
  assert.ok(exists('app/thank-you/page.tsx'));
  assert.ok(exists('app/thanks-whats-next/page.tsx'));
  assert.ok(exists('app/not-found.tsx'));
  assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/);
});

test('service detail system is long form and image led', () => {
  for (const marker of ['audience', 'inputs', 'workflow', 'deliverables', 'qualityControls', 'humanDecisions', 'faqs', 'related']) {
    assert.match(services, new RegExp(marker, 'i'), `missing service marker ${marker}`);
  }
  assert.match(services, /<img/);
});

test('canonical contact path and security policy are configured', () => {
  assert.match(nextConfig, /source:\s*['"]\/contact['"]/);
  assert.match(nextConfig, /destination:\s*['"]\/contact-us['"]/);
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(nextConfig, new RegExp(header));
  assert.match(sitemap, /contact-us/);
  assert.doesNotMatch(sitemap, /['"]\/contact['"]/);
});

test('uniform subsidiary logo and official parent assets exist', () => {
  assert.ok(exists('public/logo.svg'));
  assert.ok(exists('app/icon.svg'));
  assert.ok(exists('public/brand/stealth-agents-logo.png'));
  assert.ok(exists('public/brand/stealth-agents-team-bacolod.jpg'));
});

test('design registry records the required fingerprint', () => {
  const registry = JSON.parse(read('design-registry.json'));
  for (const key of ['domain','industry','audience','designFamily','heroComposition','typeCharacter','paletteFamily','shapeGrammar','imageTreatment','sectionRhythm','navigationTreatment','motionSignature','density','signatureElement']) assert.ok(registry[key], `missing ${key}`);
});
