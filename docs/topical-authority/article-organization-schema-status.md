# Article Organization schema rollout status

## 2026-10-11 — deployment pending public verification

- **Scope:** Shared and special-case Article JSON-LD renderers now use the established Outsourced Employment Organization identity as both `author` and `publisher`. This is a schema-only repair; it does not add a byline, change article copy, dates, canonicals, or sitemap inventory.
- **Rendered source:** `df9815a79bc4b5ee81ed0488735514020477f998`
- **Local proof:** `npm run validate:article-organization-identity`, `npm run lint`, `npm test`, `npm run validate:research-schema-identity`, and `npm run build` passed. Fresh production artifacts for the representative blog, comparison, and research routes each contained an Article node whose `author` and `publisher` were the same Organization (`Outsourced Employment`, `https://outsourcedemployment.com`); all three routes were present in the generated sitemap. This repository's sitemap contract omits `lastmod`.
- **Public evidence:** Cache-busted canonical and `www` probes returned HTTP 200 with the expected H1 and canonical URL for all three representative routes, and both served sitemaps contained those routes. Parsed public Article JSON-LD did not yet contain the Organization author/publisher pair on any probe, so public output is stale relative to the rendered source.
- **Deployment decision:** No current repository-approved deployment target or application identifier was available. Historical verification material was not treated as authorization; no deployment was guessed or triggered.
- **Next action:** After an authorized rollout, cache-bust and parse Article JSON-LD on canonical and `www` forms of the representative routes. Verify the exact Organization identity for both `author` and `publisher` before marking this public.
- Preserve rendered-source commit `df9815a79bc4b5ee81ed0488735514020477f998`.
