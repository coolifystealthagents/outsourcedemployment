import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();
const personalEmailDomains = new Set(['gmail.com', 'googlemail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);

function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}
function errorResponse(request: NextRequest, status: number) {
  if (request.headers.get('accept')?.includes('application/json')) return NextResponse.json({ ok: false }, { status });
  return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>', { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}
function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) for (const [storedKey, values] of attempts) if (!values.some((time) => now - time < WINDOW_MS)) attempts.delete(storedKey);
  return recent.length > max;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const length = Number(request.headers.get('content-length') || 0);
  const origin = request.headers.get('origin');
  if ((origin && origin !== request.nextUrl.origin) || !Number.isFinite(length) || length > MAX_BODY_BYTES || (!contentType.includes('application/x-www-form-urlencoded') && !contentType.includes('multipart/form-data'))) return errorResponse(request, 400);
  if (limited(`ip:${ip(request)}`, 10)) return errorResponse(request, 429);
  let form: FormData;
  try { form = await request.formData(); } catch { return errorResponse(request, 400); }
  if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) return errorResponse(request, 400);
  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const name = `${first} ${last}`.trim() || text(form, 'name', 200);
  const email = text(form, 'email', 320).toLowerCase();
  if (!name || !EMAIL_RE.test(email) || personalEmailDomains.has(email.split('@').pop() || '')) return errorResponse(request, 422);
  if (limited(`email:${email}`, 3)) return errorResponse(request, 429);
  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const phoneLocal = text(form, 'phoneLocal', 100);
  const countryCode = text(form, 'countryCode', 10);
  const phone = text(form, 'phone', 100) || [countryCode, phoneLocal].filter(Boolean).join(' ');
  const business = text(form, 'company', 300) || text(form, 'companyName', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions') || text(form, 'role');
  const referral = text(form, 'referral', 300) || text(form, 'source', 300);
  const referralSpecify = text(form, 'referralSpecify', 300);
  const messageText = text(form, 'message');
  if (!phone || !business || !companySize || !positions || !referral || !messageText || (referral === 'Other' && !referralSpecify)) return errorResponse(request, 422);
  const message = [messageText, `Positions: ${positions}`, `Company size: ${companySize}`, text(form, 'website') ? `Website: ${text(form, 'website')}` : '', referralSpecify ? `Referral detail: ${referralSpecify}` : ''].filter(Boolean).join('\n');
  const payload = { full_name: name, email, phone, company_name: business, message, how_they_heard: referral, client_event_id: crypto.randomUUID(), attribution: { source_page: pageUrl, landing_page: pageUrl, referrer: request.headers.get('referer') || '', page_journey: ['Contact form'] } };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorResponse(request, 503);
  try {
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', 'x-lead-token': token }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(12_000) });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorResponse(request, 502);
  } catch { return errorResponse(request, 502); }
  void sendLeadFallbackToMattermost({ name, email, phone, business, message, companySize, positions, referral, pageUrl, userAgent: request.headers.get('user-agent') || '' });
  if (request.headers.get('accept')?.includes('application/json')) return NextResponse.json({ ok: true });
  return NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
}
