import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const api = readFileSync(new URL('../app/api/contact/route.ts', import.meta.url), 'utf8');
const form = readFileSync(new URL('../app/contact-us/StandardContactForm.tsx', import.meta.url), 'utf8');

test('contact endpoint accepts the client form payload and preserves referral attribution', () => {
  assert.match(form, /phone,/, 'client payload must send the normalized phone value');
  assert.match(api, /if \(!phone \|\| !business/, 'server must validate the normalized phone accepted from JS or native form fields');
  assert.doesNotMatch(api, /if \(!phoneLocal \|\| !business/, 'server must not require a field omitted by the JS payload');
  assert.match(api, /const referral = text\(form, 'referral'/, 'visitor referral answer must take priority over generic source metadata');
});
