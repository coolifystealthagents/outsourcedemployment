export type Sep1ResearchPost={slug:string;title:string;excerpt:string;publishedDate:'2026-09-01';body:string[]};
const publishedDate='2026-09-01' as const;
const sources='Sources consulted: NIST Cybersecurity Framework 2.0 (https://www.nist.gov/cyberframework); CISA Identity and Access Management (https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management); GAO Standards for Internal Control in the Federal Government (https://www.gao.gov/products/gao-14-704g); International Labour Organization, Decent Work (https://www.ilo.org/topics-and-sectors/decent-work). These sources provide general research and control context; they do not certify an employer, provider, employment outcome, or legal conclusion.';
const study=(slug:string,title:string,excerpt:string,body:string[]):Sep1ResearchPost=>({slug,title,excerpt,publishedDate,body:[`Published September 1, 2026. ${body[0]}`,...body.slice(1),sources]});
export const september1ResearchBatch:Sep1ResearchPost[]=[
study('philippines-employment-intake-completeness-research','Philippines Employment Intake Completeness: A Reproducible Field Study','A bounded method for testing whether employment-support requests contain usable sources, authority, and next-owner evidence.',[
'Research question: which recorded fields allow a Philippines-based employment-support team to begin a request safely, and how consistently can reviewers identify missing evidence?',
'Completeness means fitness for the declared next administrative action. It does not mean the request is correct, finally authorized, legally sufficient, or likely to produce a favorable outcome.',
'Methodology: create forty synthetic requests across onboarding, records, leave routing, benefits, payroll inputs, scheduling, access, and offboarding. Two reviewers independently apply a versioned rubric to complete, conflicting, duplicate, excessive-data, and missing-source cases.',
'The unit is one request for one bounded action. Test request and subject identifiers, purpose, action, source and date, requester, approving owner, effective date, deadline, sensitivity, and next owner. Score usable, defective, absent, not applicable, or unknown.',
'Analyze field-level missingness, reviewer agreement, return reasons, and clarification waits. Defective forms and unclear ownership can create the same observations as individual mistakes, so do not convert results into a productivity score.',
'Use synthetic examples to avoid live exposure. Limitations include artificial cases, selected processes, reviewer training, and system differences. Conclusion: unknowns should create named follow-up rather than an assumed pass.'
]),
study('philippines-payroll-input-lineage-research','Philippines Payroll Input Lineage: From Approved Source to Verified Result','Study how payroll input evidence can be traced across preparation, approval, submission, and resulting system state.',[
'Research question: what event trail is needed to trace one Philippines employment payroll input from its approved source through preparation, submission, and observable result?',
'Lineage is narrower than payroll correctness. It reconstructs transformations and handoffs but does not decide entitlement, tax treatment, classification, legality, or payment amount.',
'Methodology: build thirty synthetic field-level cases spanning ordinary inputs, corrections, duplicates, late approvals, conflicting dates, rejected submissions, partial imports, and post-cutoff changes.',
'The unit is one employee-period-input tuple. Record source identifier and version, observed and prepared values, preparer, approval, batch version, provider receipt, output where visible, verification, and timestamps.',
'Approval supports a decision; upload supports transmission; acceptance supports processing; output comparison supports resulting state. Measure traceable, partial, conflicting, failed, pending, and unknown cases against the full expected population.',
'Protect values through masking and restricted evidence paths. Limitations include artificial data, incomplete system events, and limited output visibility. Conclusion: each lineage claim must be tied to the event it can actually prove.'
]),
study('philippines-remote-work-review-latency-research','Philippines Remote Work Review Latency: Separating Work Time from Decision Waits','A state-based research design for measuring review latency across time zones without assigning unsupported blame.',[
'Research question: how can a distributed employment-support operation measure time between prepared and accepted work while separating employee processing, reviewer queues, rework, and missing evidence?',
'Review latency is not a direct measure of effort, quality, or responsiveness. Elapsed time crosses shifts, weekends, time zones, priority rules, and manager availability.',
'Methodology: create fifty synthetic work items with immutable events for intake, preparation, ready for review, reviewer opened, returned, resubmitted, accepted, and closed. Include reassignments and missing timestamps.',
'The unit is one version of one deliverable. Preserve transitions, actor role, timestamp, and reason. Calculate total elapsed, preparation where observable, review wait, reviewer handling, return wait, and unknown intervals.',
'Report median, quartiles, oldest cases, and state composition. A second reviewer reconstructs a sample. Shorter review can mean better flow or superficial review; timing alone supports neither conclusion.',
'Limitations include inconsistent statuses and omitted informal work. Conclusion: state-based latency is useful when it identifies where evidence waits and which authorized owner can change the process.'
]),
study('philippines-employee-access-inventory-coverage-research','Philippines Employee Access Inventory Coverage: Measuring the Unknowns','Research how to compare expected and observed access while preserving unknown, inherited, and provider-managed permissions.',[
'Research question: how can an organization estimate access-inventory coverage for Philippines-based employment operations without treating unobserved permissions as absent?',
'Coverage compares a declared expected population with observable identity-entitlement-system records. It does not prove that permissions are appropriate, secure, used, or removed.',
'Methodology: create thirty synthetic worker profiles across direct accounts, groups, shared resources, application roles, tokens, physical access, provider platforms, and systems without reliable exports.',
'The unit is one identity-entitlement-system tuple. Record identity match, entitlement, access path, owner, purpose, approval, observed state, last review, evidence type, and verification limitation.',
'Classify expected and observed, unexpected, expected but unobserved, unable to observe, identity conflict, and out of scope. Keep unknowns in the declared denominator and label provider attestations.',
'Limitations include incomplete expected populations and uneven platform evidence. Conclusion: an honest coverage report gives unknown and unobservable paths the same prominence as confirmed records.'
]),
study('philippines-employment-correction-recurrence-research','Philippines Employment Corrections: Studying Recurrence Without Mislabeling Workers','A process-level method for grouping repeated corrections by source, field, workflow stage, and control gap.',[
'Research question: how can recurring employment-record corrections be identified as process patterns without turning incomplete evidence into judgments about individual workers?',
'A recurrence is a similarly defined correction event in a stated population and period. It is not automatically personal error; unstable definitions, forms, mapping, late approval, and access can produce patterns.',
'Methodology: create sixty synthetic correction events across records, onboarding, benefits, scheduling, access, reporting, and payroll inputs. Two reviewers apply a coding guide fixed before analysis.',
'The unit is one field-level correction linked to its original event. Preserve old, proposed, and accepted values where appropriate, source versions, actor roles, reason, detection point, downstream systems, and verification.',
'Group only observed attributes: intake defect, source conflict, transcription, mapping, stale instruction, late authority, duplicate, synchronization, or unknown. Report counts with transaction denominators.',
'Limitations include synthetic events, incomplete reasons, and absent informal fixes. Conclusion: recurrence analysis should direct attention to testable workflow conditions rather than unsupported personal attribution.'
])];
