# October 6 public verification

## Deployment receipt

- Repository: `coolifystealthagents/outsourcedemployment`
- Production branch: `main`
- Pushed and deployed SHA: `d39c97c383a2328fcf52b154eaa5b7a862300cf3`
- Coolify3 application: `j42hq0gf9q21pgt9l0pg90ml`
- Deployment: `qsdo0phkygnf0cohqyypy47j`
- Operator result: `Success` in `03m43s`
- Site timezone and publication date: UTC, `2026-10-06`
- Verification interval: `2026-10-06T11:10:26.566Z` through `2026-10-06T11:10:33.581Z`

## Result

Strict public verification is **16/17**, not complete.

All 17 routes passed HTTP status, full title, complete ordered rendered-body paragraph and SHA-256 equality, visible date, `datePublished`, structured headline and URL, canonical, family index, sitemap, contextual destination, and authoritative-source checks. All seven unique authoritative sources returned HTTP 200 and contained the expected primary-source identity marker.

Sixteen of 17 served images passed HTTP 200, image MIME/signature checks, and full pixel decode. The image for `/blog/philippines-employment-support-cross-market-holiday-coverage` failed the full decode gate:

- Asset: `/blog-thumbnails/hr-calendar-administration.svg`
- Public response: HTTP 200, `image/svg+xml`, 19,672 bytes
- Public SHA-256: `d923e7745342fbdebfb712abf60a7834d54b929c9f44545e259e3d078a32b4fa`
- Decoder error: XML extra content after the first SVG document, at line 1 column 741
- Cause: the committed asset contains one valid SVG followed by embedded patch instructions and 20 additional SVG documents.

The complete per-route paragraph hashes, pixel hashes, timestamps, destination receipts, source response hashes, and evidence markers are in `docs/oct6-2026-public17-verification.json`.

## Local-only scoped repair

The asset was reduced to its original first valid SVG document. No article content, metadata, route, ledger, manifest, date, or prior-cycle record changed.

- Repaired bytes: 741
- Repaired SHA-256: `d13e127a5d7ddf1cf4fcf55b38469568a49b066cf368fb35a4058f567836c2bc`
- Rasterized size at validation density: 2400x1260 RGBA
- Fully decoded pixel bytes: 12,096,000
- Decoded pixel SHA-256: `cfc347c10c6cf748fd53c7e415f8bdb8afc2053320d550921447ca2dae914164`

This repair is local only and is not authorized for push or deployment by the public-verification instruction.
