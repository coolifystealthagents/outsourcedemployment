export type Sep2ResearchPost={slug:string;title:string;excerpt:string;publishedDate:'2026-09-02';body:string[]};
const publishedDate='2026-09-02' as const;
const sources='Sources consulted: NIST Cybersecurity Framework 2.0 (https://www.nist.gov/cyberframework); CISA Identity and Access Management (https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management); GAO Standards for Internal Control in the Federal Government (https://www.gao.gov/products/gao-14-704g); International Labour Organization, Decent Work (https://www.ilo.org/topics-and-sectors/decent-work). These sources provide general research and control context; they do not certify an employer, provider, employment outcome, or legal conclusion.';
const study=(slug:string,title:string,excerpt:string,body:string[]):Sep2ResearchPost=>({slug,title,excerpt,publishedDate,body:[`Published September 2, 2026. ${body[0]}`,...body.slice(1),sources]});

export const september2ResearchBatch:Sep2ResearchPost[]=[
study('philippines-employee-record-change-propagation-research','Philippines Employee Record Changes: A Propagation Evidence Study','A reproducible method for testing whether an approved record change reaches each declared downstream system.',[
'Research question: how reliably can a Philippines employment-support operation trace one approved employee-record change from its source through every declared destination?',
'Propagation means that the expected field state is observed at a defined destination after an authorized event. It does not establish that the source decision was lawful, correct, or complete.',
'Methodology: create forty-eight synthetic change cases across contact, reporting line, schedule, payroll input, benefits, directory, and access fields. Include future-dated, corrected, rejected, duplicate, and conflicting events.',
'The unit is one employee-field-destination tuple. Record source version, authority, effective date, entry event, observed state, observer, timestamp, exception, and verification limitation.',
'Report confirmed, pending within target, rejected, conflicting, not observable, and unknown results by destination. Do not remove unreachable systems or late cases from the denominator.',
'Limitations include synthetic records, platform-specific timing, and incomplete audit events. Conclusion: an end-to-end change claim requires destination-level evidence rather than a single successful entry.'
]),
study('philippines-employment-queue-ownership-continuity-research','Philippines Employment Queue Ownership: Testing Continuity Through Absence','Study whether primary-to-backup transfers preserve visible ownership, authority, access, and response state.',[
'Research question: which recorded controls allow employment-support queues to remain usable when a primary owner becomes unavailable?',
'Continuity means that a qualified backup can accept defined work and preserve its state. It does not mean every decision is delegable or that continuous coverage is required.',
'Methodology: construct thirty-six synthetic queue events across onboarding, records, leave routing, payroll inputs, benefits, access, and offboarding. Simulate planned absence, sudden absence, overlapping ownership, and failed access.',
'The unit is one item at one ownership transition. Observe activation trigger, authority scope, access, acceptance event, response timing, decision boundary, return handoff, and temporary-access removal.',
'Compare no-backup, named-but-untested, and tested-backup conditions. Report ownerless time, bounced assignments, unauthorized attempts, safe pauses, and unresolved items without treating volume as worker performance.',
'Limitations include artificial scenarios and selected systems. Conclusion: a named backup adds little assurance unless activation, permissions, acceptance, and deactivation are independently visible.'
]),
study('philippines-onboarding-document-version-error-research','Philippines Onboarding Documents: Measuring Version-Selection Errors','A controlled study of how source location, effective dates, and audience labels affect correct document selection.',[
'Research question: which document-control fields reduce wrong-version selection during Philippines employee onboarding?',
'Correct selection means the approved document version matches the synthetic employee audience and event date. It does not establish legal sufficiency, comprehension, agreement, or enforceability.',
'Methodology: prepare fifty synthetic selection tasks containing current, superseded, future, duplicate, locally saved, and ambiguously labeled documents. Randomize whether a controlled register and source link are available.',
'The unit is one required-document selection. Record document identifier, version, effective interval, audience, source location, selector choice, reason, elapsed time, and reviewer outcome.',
'Measure wrong-version, wrong-audience, unofficial-copy, unresolved, and correct selections. Analyze disagreements separately and preserve cases where the control source itself is conflicting.',
'Limitations include synthetic files, trained reviewers, and no live employee outcomes. Conclusion: explicit version and audience metadata should be evaluated together with source control, not as a filename-only solution.'
]),
study('philippines-employment-inbox-routing-agreement-research','Philippines Employment Inbox Routing: A Reviewer Agreement Study','Test whether a declared routing guide produces consistent privacy, urgency, and owner assignments.',[
'Research question: can independent reviewers consistently route employment-support messages using observable content and a versioned decision guide?',
'Routing agreement concerns the administrative destination and handling state. It does not determine the merits, legal status, or final response to a message.',
'Methodology: create sixty synthetic messages across records, payroll input, benefits, leave, access, complaints, safety, legal process, misdirected mail, mixed topics, and unknown cases. Remove unnecessary personal data.',
'The unit is one message-routing decision. Two reviewers independently assign purpose, sensitivity, urgency, primary owner, acknowledgment class, and stop condition before reconciling differences.',
'Report raw agreement and category-level disagreement alongside unknown and multi-owner rates. Examine whether ambiguous labels, missing identity, or overlapping routes explain inconsistency.',
'Limitations include artificial messages and organization-specific rules. Conclusion: disagreement should trigger revision of route definitions or escalation paths rather than unsupported certainty.'
]),
study('philippines-employment-handoff-acceptance-evidence-research','Philippines Employment Handoffs: Distinguishing Delivery from Acceptance','A state-based experiment comparing sent records, recipient acknowledgment, usability checks, and accepted ownership.',[
'Research question: which evidence best distinguishes a delivered employment-support handoff from one that a receiving owner can actually continue?',
'Acceptance means a named recipient confirms ownership and sufficient usable state for the declared next action. It does not prove the underlying work is correct or finally approved.',
'Methodology: create forty synthetic handoffs across onboarding, record changes, payroll inputs, benefits files, access requests, schedule changes, and offboarding. Vary missing sources, unclear next actions, deadlines, and recipient authority.',
'The unit is one handoff event. Observe transmission, receipt, opening where available, recipient acknowledgment, usability check, ownership acceptance, return reason, and time to resolution.',
'Compare sent-only, acknowledged, checklist-reviewed, and explicitly accepted states. Report returned, silently idle, misrouted, accepted-with-exception, and unknown outcomes as separate categories.',
'Limitations include simulated recipients and selected workflows. Conclusion: delivery evidence should not be reported as completed transfer when ownership or usability remains unconfirmed.'
])
];
