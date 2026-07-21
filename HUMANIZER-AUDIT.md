# Site-wide humanizer audit

Date: 2026-07-21

## Scope

Reviewed public marketing and editorial copy across the homepage, shared site data, service template, guide index and template, contact page, thank-you page, shared header, CTA, footer, and metadata.

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/layout.tsx`

## What changed

- Repaired a guide title damaged by an earlier bulk copy change: `What does it plan?` now says what the guide covers.
- Replaced the repeated generic fallback on three guides with route-specific planning, task-selection, and first-week advice.
- Removed corporate wording such as `measured handoffs` and replaced it with work a buyer can check: written steps, named owners, issue logs, and review times.
- Replaced a sales-style contrast and a forced numbered heading on the homepage with direct contract and provider questions.
- Tightened the contact and shared CTA copy without changing the inquiry route or conversion goal.
- Shortened homepage and guide headings after visual QA found awkward wraps, then limited basic guide text to a readable line length.
- Kept the staffing model explicit: all offered talent is Filipino and recruited and hired only in the Philippines.

## Final anti-AI pass

The remaining lists are functional checklists, not decorative groups of three. The copy uses concrete tasks, approval lines, access limits, and provider responsibilities. It avoids significance claims, chatbot language, vague proof, generic upbeat endings, and invented results.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. No legal policy meaning, route slug, cited source, schema identity, testimonial, statistic, credential, or pricing claim was changed or invented.
