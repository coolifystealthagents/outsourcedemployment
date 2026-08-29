# Service-led research link ledger

This planning ledger connects existing Philippines-only employment research to existing service pillars. It does not add claims, create routes, or change reader-facing output. A future route edit must use the exact source and destination listed here, retain the named owner boundary, refresh the post-specific modified date, and prove the link inside the rendered article.

## Confirmed service pillars

- `/services/candidate-sourcing-coordination` — candidate sourcing coordination
- `/services/employee-records-management` — employee records management
- `/services/new-hire-onboarding` — new-hire onboarding
- `/services/leave-tracking-support` — leave tracking support
- `/services/payroll-input-preparation` — payroll input preparation

## Research-to-service queue

| Status | Existing research URL | Existing service URL | Reader question | Boundary to retain | Next action |
| --- | --- | --- | --- | --- | --- |
| Delivered | `/research/philippines-candidate-scheduling-evidence-research` | `/services/candidate-sourcing-coordination` | How can a manager organize interview scheduling and record checks without handing over selection? | The hiring owner chooses candidates, sets qualifications, and makes offers. | Do not add a second handoff. Recheck the rendered article before any related edit. |
| Ready | `/research/philippines-employee-records-retention-research` | `/services/employee-records-management` | What can a records coordinator prepare before the responsible owner decides retention or disclosure? | The owner decides record changes, disclosure, retention exceptions, employment status, and access. | Add one route-local handoff only after baseline gates pass and the source article still lacks this href. |
| Ready | `/research/philippines-onboarding-records-coordination-research` | `/services/new-hire-onboarding` | Which onboarding records should be complete before an HR owner confirms readiness? | The HR owner decides terms, employment status, policy answers, and access. | Use this only after the employee-records candidate is delivered or explicitly deferred. |
| Ready | `/research/philippines-leave-records-reconciliation-research` | `/services/leave-tracking-support` | How can a coordinator surface leave-record conflicts without deciding entitlement? | The owner decides entitlement, exceptions, balances, and dispute outcomes. | Confirm the service href is absent from the route-local article before drafting. |
| Ready | `/research/philippines-payroll-input-reconciliation-research` | `/services/payroll-input-preparation` | What evidence should finance review before payroll input is approved? | Finance retains pay approval, exceptions, employee-record changes, and fund release. | Keep this after the lower-risk records and onboarding pairs. |

## Execution rules

1. Work one row at a time and never add a link where the same service already appears inside the source article.
2. Keep the service destination Philippines-specific and use the route record rather than a renderer exception when the model supports a handoff.
3. Verify the source and destination H1, canonical URL, generated sitemap entries, and the source article's route-local link count after each public-facing change.
4. Treat this ledger as source-only planning. It is not a deployment or public-release record.
