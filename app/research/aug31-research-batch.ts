export type Aug31ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: '2026-08-31';
  body: string[];
};

const publishedDate = '2026-08-31' as const;
const sources = 'Sources consulted: NIST Cybersecurity Framework 2.0 (https://www.nist.gov/cyberframework); CISA Identity and Access Management (https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management); GAO Standards for Internal Control in the Federal Government (https://www.gao.gov/products/gao-14-704g); International Labour Organization, Decent Work (https://www.ilo.org/topics-and-sectors/decent-work). These sources provide general control and work-design context; they do not certify a provider, decide an employment matter, or prescribe one company workflow.';

export const august31ResearchBatch: Aug31ResearchPost[] = [
  {
    slug: 'philippines-employment-onboarding-readiness-evidence-research',
    title: 'Philippines Employment Onboarding: What Evidence Shows Operational Readiness?',
    excerpt: 'A bounded research framework for testing whether a remote employee can begin defined work with usable sources, access, and review ownership.',
    publishedDate,
    body: [
      'Published August 31, 2026. Research question: what evidence supports a conclusion that a Philippines-based employee is operationally ready for a defined first-week workload?',
      'Operational readiness is narrower than hiring success, legal compliance, employee capability, or future performance. This brief defines readiness as the presence and usability of an approved task scope, authoritative sources, bounded permissions, accepted ownership, sample outputs, stop conditions, and a review schedule at a stated time.',
      'Methodology: construct a twenty-case synthetic test set covering complete tasks, missing sources, conflicting identifiers, unavailable reviewers, excessive permissions, time-zone ambiguity, sensitive data, and changes after approval. Two reviewers apply the same readiness rubric and record agreement, disagreement, missing evidence, and the next owner. No live employee or customer data is required.',
      'The unit of analysis is one task-access-review combination, not the employee as a whole. A person may be ready for candidate scheduling but not payroll-input preparation because the latter lacks a source owner or approved permission. Reporting a task-level result avoids turning an operational gap into an unsupported judgment about a worker.',
      'Evidence fields should include task identifier, purpose, source, example, expected output, permitted action, stop condition, account, entitlement, access owner, reviewer, review window, escalation owner, test result, and timestamp. Every field needs a definition so absence is not confused with failure.',
      'A practical test asks the employee to locate a sample, complete a normal case, identify an incomplete case, explain an escalation, and show where the handoff is recorded. The reviewer observes the process rather than supplying missing context during the test. Intervention should be logged because it changes what the result means.',
      'The evidence should separate administrative action from managerial decision. A coordinator can prepare the task package, schedule the test, record observations, and route gaps. The manager approves scope and acceptance. System owners approve permissions. Legal, HR, security, or provider owners address questions within their authority.',
      'Analytical cautions include selection bias, reviewer inconsistency, access that works only in a test environment, and checklists that confirm presence without usability. A passed login does not prove correct permissions. A completed example does not prove the employee can handle every exception. Readiness should be stated for the tested scope and time only.',
      'Privacy requires synthetic or minimum-necessary examples. Sensitive records should remain in approved systems, with broad trackers carrying references rather than copies. The test should not expose credentials or invite workers to bypass access controls merely to demonstrate task completion.',
      'Limitations: a small synthetic set cannot establish productivity, fairness, retention, legal compliance, security effectiveness, or employment outcomes. It may miss rare events and depends on truthful source and access inventories. Results should not be generalized beyond the roles, systems, instructions, and date tested.',
      'Conclusion: onboarding readiness is defensible when another authorized reviewer can reproduce the task, source, permission, ownership, and acceptance evidence. Unknown or failed elements should become named actions, not silent waivers. The result should read “ready for these bounded tasks” rather than “fully ready.”',
      sources
    ]
  },
  {
    slug: 'philippines-employment-queue-aging-measurement-research',
    title: 'Philippines Employment Queue Aging: A Reproducible Measurement Design',
    excerpt: 'Research how queue-aging measures can distinguish active work, missing inputs, and decisions waiting on owners.',
    publishedDate,
    body: [
      'Published August 31, 2026. Research question: how can a distributed employment-support team measure queue aging without treating every elapsed hour as employee working time or performance?',
      'An aging measure needs an event definition, clock, calendar, state model, source, and denominator. “Days open” may include nights, weekends, client decision waits, provider dependencies, system outages, and incomplete requests. Without those distinctions, a precise chart can support an inaccurate conclusion.',
      'Methodology: select thirty de-identified or synthetic queue items across routine, incomplete, duplicate, approval-dependent, access-blocked, returned, reopened, and closed states. Freeze the extraction time and reconstruct every state transition from immutable events. Compare total elapsed age, active processing age, and time in each declared waiting state.',
      'The unit of analysis is one uniquely identified request. Duplicates must be linked and treated under a written rule. Reopened items should preserve their prior closure rather than reset history invisibly. Transfers between queues need an event and owner so time is not lost during reassignment.',
      'Use explicit timestamps and a declared calendar. Record original time zone and normalized time. Define when the clock starts, pauses, resumes, and ends before examining results. A missing timestamp is an unknown, not zero. A calendar choice is an analytical assumption and should remain visible.',
      'Classify waiting reasons narrowly: requester input, manager decision, provider action, system access, scheduled future date, external dependency, or unknown. These labels describe the record, not blame. A Philippines-based coordinator can maintain events and flag inconsistencies; accountable owners decide priorities, staffing, and service responses.',
      'Report distributions and state composition rather than one average. Median, upper quartile, oldest items, and total time by state can show different patterns. Publish the count of excluded, duplicate, and unknown cases. Small populations should be described cautiously, especially where individuals may be identifiable.',
      'Validation should have a second reviewer reproduce a sample from source events. Disagreement may reveal an ambiguous pause rule, missing event, or inconsistent status. Correct the method or mark uncertainty before using the measure in a management decision.',
      'Analytical cautions: faster closure may reflect premature closure, narrower intake, or a changed definition. A high waiting share may reflect sound escalation rather than poor work. Aging cannot prove effort, complexity, quality, intent, or provider performance without additional evidence.',
      'Limitations: reconstructed logs may omit informal work, deleted messages, system latency, or local calendar exceptions. Thirty cases cannot establish a stable benchmark or causal effect. Findings apply only to the chosen population, definitions, extraction, and source completeness.',
      'Conclusion: queue aging becomes decision-useful when time is partitioned by observable state and ownership. The best output identifies where work waits and which evidence is missing while avoiding unsupported conclusions about individuals. Definitions and unknowns belong beside the result.',
      sources
    ]
  },
  {
    slug: 'philippines-employee-record-correction-evidence-research',
    title: 'Philippines Employee Record Corrections: An Evidence and Control Study',
    excerpt: 'A research design for distinguishing source corrections, data-entry fixes, and management decisions in employee records.',
    publishedDate,
    body: [
      'Published August 31, 2026. Research question: what evidence allows an employment-support operation to correct a record while preserving the source, authority, change history, and unresolved uncertainty?',
      'A correction can mean several things: fixing a transcription error, applying a newly approved effective date, resolving duplicate identity records, updating a source system, or reversing an unauthorized change. Those events require different owners. A single “corrected” status hides the distinction.',
      'Methodology: build a twenty-five-case synthetic sample covering typographical error, conflicting sources, duplicate identity, late approval, changed instruction, wrong effective date, incomplete request, unauthorized requester, and failed downstream synchronization. Reviewers classify the event and identify the evidence needed before action.',
      'The unit of analysis is one field-level change event. Required fields include person identifier, system and record, original value, proposed value, source, source date, requestor, authority, effective date, preparer, reviewer, resulting state, downstream impact, and verification. Sensitive values can be masked while retaining a controlled evidence link.',
      'Separate source truth from system state. A source may support a value that has not yet reached every system, or two approved sources may conflict. The coordinator should preserve both observations and route the conflict. Choosing the more convenient value is a managerial or policy decision disguised as administration.',
      'Version history is essential. Never overwrite the old observation in the working evidence. Record a new event with reason and authority. If the system does not preserve sufficient history, use an approved restricted change log and disclose that limitation rather than claiming full traceability.',
      'Test downstream confirmation separately from submission. A ticket, file upload, or API response may prove that an action was requested; it may not prove the record changed correctly. Verification should compare the authorized instruction with the resulting state and leave partial failures open.',
      'Privacy and security limit what should appear in a queue. Use unique identifiers, masked values, role-based access, and source links. Avoid copying identity documents, medical information, banking details, or credentials. Review retention and disclosure with the authorized owners.',
      'Analytical cautions: a high correction count may reflect better detection, a migration, poor intake, or unstable source definitions. A low count may reflect under-reporting. Rates need a defined denominator and should separate detection, preparation, approval, implementation, and verification.',
      'Limitations: synthetic cases cannot prove real-world control effectiveness, legal compliance, data accuracy, or employee impact. Some systems may not expose complete event histories. This method does not determine which source should be legally authoritative or who has decision rights in a particular organization.',
      'Conclusion: a defensible correction connects original and proposed states to sources, authority, effective date, implementation, and verification. Unresolved conflicts remain visible with a named owner. The research supports an auditable workflow without shifting employment decisions to administrative staff.',
      sources
    ]
  },
  {
    slug: 'philippines-employment-handoff-completeness-research',
    title: 'Philippines Employment Handoffs: Measuring Completeness Without Inventing Quality',
    excerpt: 'Research a reproducible way to assess whether employment-support handoffs contain the evidence a next owner needs.',
    publishedDate,
    body: [
      'Published August 31, 2026. Research question: can a team measure handoff completeness without claiming that a complete packet guarantees a correct decision or high-quality outcome?',
      'A handoff connects administrative preparation to another person’s action. Completeness is therefore relational: it depends on the declared recipient, task, evidence, and decision. A long note may be incomplete if it omits the source or requested action; a short structured packet may be sufficient.',
      'Methodology: define a rubric, then test forty synthetic handoffs across onboarding, interview scheduling, employee records, payroll inputs, leave administration, access changes, reporting, and offboarding. Include normal, urgent, conflicting, privacy-sensitive, and incomplete examples. Two reviewers score each field independently and explain disagreements.',
      'The unit of analysis is one sender-to-recipient transfer for one bounded next action. Suggested fields are item identifier, purpose, observed facts, source and time, work performed, unresolved issue, requested action, decision owner, deadline and time zone, sensitivity, and evidence location.',
      'Score presence separately from fitness. A source link may exist but be inaccessible, stale, or unrelated. A named owner may lack authority. Reviewers should mark present-and-usable, present-but-defective, absent, or not applicable. This prevents superficial completion from receiving the same result as decision-ready evidence.',
      'Inter-rater disagreement is itself useful evidence. If reviewers disagree about whether a deadline, source, or owner is adequate, definitions may be vague. Revise the rubric and preserve the change date. Do not tune definitions merely to improve historical scores.',
      'Keep outcome measures separate. Acceptance, rework, decision time, error, and customer impact require their own definitions and evidence. A complete handoff can still carry a mistaken source; an incomplete handoff can be rescued through private knowledge. Neither event proves the rubric is irrelevant.',
      'Privacy review should ask whether each field is necessary for the recipient. Sensitive narratives should remain in restricted systems with a neutral reference in the general queue. Handoff quality does not increase when unnecessary personal data is copied more widely.',
      'Analytical cautions include selection bias, learned scoring behavior, changing tools, and hidden verbal context. Report sample selection, missing records, rubric version, reviewer agreement, and exceptions. Avoid converting a process measure into a score of individual employee worth.',
      'Limitations: forty synthetic cases cannot establish productivity, causation, provider quality, or compliance. The rubric may need adaptation for different decisions and systems. It tests recorded handoff evidence, not whether every source fact is true.',
      'Conclusion: completeness can be measured narrowly when the next action, evidence, owner, and boundary are predefined. The most valuable result identifies which missing or defective field prevents safe continuation and who can resolve it.',
      sources
    ]
  },
  {
    slug: 'philippines-employment-access-revocation-verification-research',
    title: 'Philippines Employment Access Revocation: What Counts as Verified?',
    excerpt: 'A bounded study of the evidence needed to distinguish a removal request from verified access revocation.',
    publishedDate,
    body: [
      'Published August 31, 2026. Research question: what observable evidence allows an organization to state that a specific employment-related permission was revoked, rather than merely requested or assumed removed?',
      'Revocation is a system-state claim. An offboarding notice, closed service ticket, expired calendar event, or manager email may authorize or request action, but none automatically proves the resulting permission state. Verification connects the authorized instruction to the identity, entitlement, system, action, timestamp, and observed result.',
      'Methodology: construct thirty synthetic entitlement records across direct accounts, group membership, shared resources, temporary roles, application tokens, provider-managed systems, physical access, failed synchronization, and unavailable evidence. Reviewers trace each record from instruction through resulting state and classify confidence.',
      'The unit of analysis is one identity-entitlement-system tuple. An employee with ten systems creates at least ten review units, with additional units for groups or inherited access. A global “offboarded” status is not granular enough to prove each permission changed.',
      'Use event states such as instruction confirmed, owner approved, action submitted, system reported changed, independent check passed, exception open, and unable to verify. Preserve timestamps and actors. Do not collapse submitted and verified into one completed status.',
      'Inherited and shared access create special uncertainty. Removing a direct account may leave group, forwarding, shared-drive, or third-party access. The reviewer should inspect paths the system exposes and disclose paths it cannot observe. Unknown does not mean retained or removed.',
      'Authority remains separate from verification. The employment owner supplies the approved trigger; system owners execute or authorize changes; a coordinator maintains evidence and routes gaps. The coordinator should not infer termination or remove access based on an ambiguous roster state.',
      'Security controls must not expose credentials during testing. Use administrative audit views, controlled test identities, or documented owner attestations where appropriate. Retain evidence according to policy and restrict detailed entitlement information to authorized reviewers.',
      'Analytical cautions: a fast ticket closure may be automated without proving downstream state; slower verification may reflect thorough review. Counts need the complete expected entitlement population. Missing inventory items can make a perfect percentage misleading.',
      'Limitations: synthetic records cannot certify a real organization’s access controls, offboarding compliance, incident prevention, or inventory completeness. Some platforms do not expose independent verification, inherited paths, or reliable timestamps. Results apply only to the systems and evidence tested.',
      'Conclusion: verified revocation requires an approved instruction, identified entitlement, recorded action, and observable post-action state—or an explicit limitation. Reporting should distinguish verified, partially verified, failed, pending, and unknown. That language is more useful than treating a closed checklist as proof.',
      sources
    ]
  }
];
