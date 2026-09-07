export type Sep7ResearchPost={slug:string;title:string;excerpt:string;publishedDate:'2026-09-07';image:string;body:string[]};

const sources='Sources consulted: NIST Cybersecurity Framework 2.0 (https://www.nist.gov/cyberframework); CISA Identity and Access Management guidance (https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management); U.S. Government Accountability Office, Standards for Internal Control in the Federal Government (https://www.gao.gov/products/gao-14-704g); Google Search Central, Article structured data (https://developers.google.com/search/docs/appearance/structured-data/article); Sitemaps protocol (https://www.sitemaps.org/protocol.html). These public sources provide general control and publishing concepts. They do not measure Outsourced Employment, establish employment or legal obligations, guarantee indexing, or certify any workflow.';
const study=(slug:string,title:string,excerpt:string,body:string[]):Sep7ResearchPost=>({slug,title,excerpt,publishedDate:'2026-09-07',image:'/aug23-research-heroes/philippines-employment-record-timeline-research.png',body:[...body,sources]});

export const september7ResearchBatch:Sep7ResearchPost[]=[
study('philippines-onboarding-readiness-evidence-research','What Counts as Onboarding Readiness Evidence?','A bounded study design for comparing request status with direct proof that a new hire can begin approved work.',[
'Research question: Which checks distinguish a submitted onboarding request from a ready account, device, orientation plan, and first assignment?',
'Method: Build forty sanitized onboarding packets with seeded conditions such as an open access ticket, failed sign-in, missing equipment confirmation, conflicting start date, absent manager, and complete controls. Review half using request status alone and half using direct verification fields. Preserve all ambiguous cases in the results.',
'Unit and measures: The unit is one seeded readiness condition. Record detection by condition, false-ready decisions, review time, reviewer agreement, and the point at which the issue was escalated. Report account, equipment, document, schedule, and ownership results separately.',
'Scope and limitations: Synthetic packets cannot reproduce every HR system, jurisdiction, accommodation, security requirement, or individual onboarding need. Direct verification at one time does not prove future availability, employee eligibility, or the quality of training.',
'Use: The findings may help an operations owner design a readiness checklist. HR and system owners still decide employment status, document acceptance, access, exceptions, and start approval.'
]),
study('philippines-hr-inbox-triage-consistency-research','Can Two Reviewers Triage the Same HR Inbox Consistently?','Test whether explicit categories and escalation rules improve agreement on sanitized employment-support requests.',[
'Research question: Do defined request categories, urgency criteria, and owner rules produce more consistent triage than a general "use judgment" instruction?',
'Method: Create sixty sanitized messages spanning routine questions, payroll cutoffs, benefits documents, access reports, incomplete requests, privacy-sensitive material, and ambiguous cases. Give reviewers either a broad instruction or a defined triage card, then rotate the message order.',
'Unit and measures: The unit is one message classification. Compare category agreement, urgency agreement, correct owner selection, missed sensitivity flags, and time to first routing decision. Do not collapse privacy and payroll errors into one average without showing both.',
'Scope and limitations: Synthetic messages omit conversational history and cannot establish how real employees experience a response. Agreement may show that instructions are clear, not that the chosen policy is fair, lawful, or operationally sound.',
'Use: Results can identify ambiguous labels and missing escalation paths. The authorized HR owner must approve categories, response commitments, disclosures, and case decisions before a live workflow changes.'
]),
study('philippines-payroll-input-lineage-research','Tracing Payroll Inputs From Source to Approval','A documentary test of whether a payroll packet preserves source, change, approval, and release evidence.',[
'Research question: Which record fields allow an authorized reviewer to trace a payroll input back to its approved source without relying on chat history?',
'Method: Prepare thirty-two de-identified input chains containing time, leave, recurring pay, one-time changes, corrections, and late submissions. Seed missing source links, mismatched effective dates, duplicate changes, approval gaps, and clean controls. Reviewers reconstruct each chain from the packet.',
'Unit and measures: The unit is one input chain. Measure successful source reconstruction, approval verification, duplicate detection, effective-date accuracy, unresolved exceptions, and review time. Treat an unavailable source as unavailable rather than incorrect.',
'Scope and limitations: The study evaluates documentary traceability, not calculation accuracy, tax treatment, wage compliance, provider performance, or payment release. De-identified examples may be simpler than live payroll records and integrations.',
'Use: A payroll owner may use the findings to set packet fields and correction rules. Coordinators can prepare evidence, but authorized payroll and finance owners retain approval, interpretation, record-change, and payment authority.'
]),
study('philippines-offboarding-access-closure-research','Does Ticket Closure Prove Access Removal?','Compare administrative closure records with direct system evidence across a synthetic offboarding inventory.',[
'Research question: How often does a closed removal ticket agree with direct evidence for named accounts, delegated access, active sessions, tokens, shared assets, and administrator ownership?',
'Method: Create twenty-five synthetic offboarding inventories across common system categories. Seed closed tickets with incomplete removal, open tickets with completed action, orphaned shared assets, stale sessions, and verified controls. Two reviewers compare ticket-only and direct-check conditions.',
'Unit and measures: The unit is one access path in one inventory. Report confirmed removal, unresolved state, false closure, orphaned ownership, reviewer agreement, and time to verification by access type.',
'Scope and limitations: Simulated records do not test a live vendor, technical exploit, insider behavior, legal hold, or every form of cached access. A direct check is evidence at a point in time and cannot prove that no undiscovered account exists.',
'Use: Security and system owners may use the pattern to define closure evidence. The coordinator can maintain the inventory, while authorized owners decide removal timing, exceptions, data retention, and incident response.'
]),
study('philippines-workforce-metric-definition-drift-research','Measuring Definition Drift in Workforce Reports','Test how versioned metric definitions affect reproducibility when source data and reporting periods stay constant.',[
'Research question: Can a versioned definition sheet reduce unexplained changes in headcount, attendance, and completion metrics across reporting cycles?',
'Method: Give reviewers matched, synthetic workforce datasets and three instruction conditions: label only, written definition, or versioned definition with effective date and numerator-denominator rules. Seed exclusions, status changes, late records, and prior-period corrections.',
'Unit and measures: The unit is one metric for one reporting period. Compare reproducibility, disagreement, unexplained variance, correct definition-version use, and review time. Report each metric separately because the sources and denominators differ.',
'Scope and limitations: Synthetic data cannot represent every HR information system or company policy. Reproducibility does not prove that a definition is useful, lawful, complete, or appropriate for management decisions. Small test sets limit generalization.',
'Use: Findings can support a definition and change-control routine. The workforce owner still approves metric meaning, exclusions, access, distribution, interpretation, and any employment decision based on the report.'
])
];
