const blogSources = [
  { name: 'ILO labour statistics', url: 'https://ilostat.ilo.org/' },
  { name: 'Philippine Statistics Authority', url: 'https://psa.gov.ph/' },
];

const researchSources = [
  { name: 'ILO labour statistics', url: 'https://ilostat.ilo.org/' },
  { name: 'Philippine Statistics Authority', url: 'https://psa.gov.ph/' },
  { name: 'World Bank, World Development Indicators', url: 'https://databank.worldbank.org/source/world-development-indicators' },
];

export const october22BlogBatch = [
  {
    slug: 'offshore-employment-contract-checklist', title: 'A contract checklist before an offshore role starts', excerpt: 'Check parties, scope, hours, pay, leave, equipment, and termination terms before the first shift.', minutes: 6, publishedDate: '2026-10-22', image: '/oct22/offshore-employment-contract-checklist.png', sources: blogSources,
    body: [
      '## Confirm the parties and the role', 'The contract should name the legal employer, the client, the worker, and the role. Where a staffing provider is involved, state which entity pays, which entity directs the work, and which entity owns the equipment. Ambiguity here becomes a dispute when something goes wrong.',
      'Attach the role description and the reporting line. Record the work location or remote arrangement, the normal hours, the time zone, and the approved flexibility. A contract that says "as required" invites an unbounded schedule.',
      '## Check pay, leave, and deductions', 'Record the pay frequency, currency, gross and net calculation, and the statutory deductions that apply under the employment arrangement. Attach the current contribution rules rather than a summary from memory.',
      'State the leave entitlement, the request process, and the treatment of public holidays. If the client schedule differs from the statutory calendar, say which one governs and how the difference is handled.',
      '## Cover equipment and termination', 'List the equipment, the allowance, and the return obligation. Note who owns the data on the device and how it is removed at the end.',
      'Record the notice period, the grounds for termination, and the final-pay timeline. Give the worker a named contact for questions and a date to return the signed copy.',
    ],
  },
  {
    slug: 'philippines-payroll-calendar-handoff', title: 'Handing payroll inputs to a Philippines payroll owner', excerpt: 'A cut-off, evidence, and approval routine that prevents late changes from becoming late pay.', minutes: 6, publishedDate: '2026-10-22', image: '/oct22/philippines-payroll-calendar-handoff.png', sources: blogSources,
    body: [
      '## Set the cut-off and the calendar', 'Publish the payroll calendar with the input cut-off, the review window, the approval date, and the pay date. Include the holiday dates that affect the bank or the payroll team.',
      'Record who may submit a late change and what evidence is required. A late change without an approver is a reason to pay it next cycle, not to improvise.',
      '## Separate inputs from approvals', 'The offshore team prepares timesheets, leave records, allowances, and deductions. The authorized payroll owner approves the register. Keep the preparation file and the approved register as separate versions.',
      'Use one exception list for missing timesheets, disputed hours, and new deductions. Give each item an owner and a resolution date before the cut-off.',
      '## Reconcile after payment', 'Compare the paid register with the approved one. Record any manual payment, correction, or reversal with the reason and the approver.',
      'Review the cycle monthly for repeated late inputs and failed approvals. The fix is usually an earlier reminder or a clearer form, not more checking at the end.',
    ],
  },
  {
    slug: 'remote-timesheet-exception-review', title: 'Reviewing remote timesheet exceptions without micromanaging', excerpt: 'Focus on missing records, pattern changes, and approval gaps rather than watching every hour.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/remote-timesheet-exception-review.png', sources: blogSources,
    body: [
      '## Define what counts as an exception', 'An exception is a missing entry, an unapproved overtime hour, a schedule mismatch that changes pay, or a repeated pattern that the manager has not reviewed. It is not a single short lunch.',
      'Write the list before the review so the criteria do not drift toward whoever is being discussed.',
      '## Review with the record open', 'For each exception, check the timesheet, the schedule, the approval, and any leave or holiday record. Ask the worker for the missing fact rather than inferring it.',
      'Where the record is wrong, correct it with the date and the approver. Where the process is wrong, note the change and move on.',
      '## Report the pattern, not the person', 'Report the exception count by type and by week. Share the pattern with the team and coach individuals privately.',
      'A stable, low exception count is a better sign than a perfect-looking timesheet that nobody checked.',
    ],
  },
  {
    slug: 'probation-review-evidence-pack', title: 'Building a probation review evidence pack', excerpt: 'Collect examples, corrections, attendance, and manager notes before the review meeting, not after.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/probation-review-evidence-pack.png', sources: blogSources,
    body: [
      '## Start from the written expectations', 'Use the role brief and the probation goals as the standard. If the goals changed, record the change and the date it was communicated.',
      'The pack should show what was expected, what happened, and what support was given. Without that sequence, the review becomes a memory contest.',
      '## Gather specific examples', 'Include completed work samples, corrections, missed handoffs, and any recognition. Anonymise client or customer details where necessary.',
      'Add attendance, leave, and training records. Note any access or equipment issue that affected the work.',
      '## Hold the conversation and record the decision', 'Share the pack in advance. Ask the worker to add their own examples and context before the meeting.',
      'Record the outcome, the support plan, and the next review date. A decision to extend probation needs specific goals, not a general instruction to improve.',
    ],
  },
  {
    slug: 'leave-coverage-request-flow', title: 'A leave request flow that protects coverage', excerpt: 'Make the request, the approval, and the backup plan one record with a clear owner.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/leave-coverage-request-flow.png', sources: blogSources,
    body: [
      '## Capture the request and the dates', 'Record the leave type, the dates, the hours affected, and the work that will pause. Ask for the request early enough to arrange coverage.',
      'Link the leave record to the coverage plan rather than keeping them in separate messages.',
      '## Name the backup and the handoff', 'For each critical task, name the person covering it and the handoff note. The backup should confirm they can access what they need before the leave starts.',
      'Where no backup exists, the manager decides whether the task pauses or the leave dates change. Do not leave the decision to the person going on leave.',
      '## Close the record', 'On return, confirm that the handoff came back, the access is restored, and the leave was recorded correctly for payroll.',
      'Review recurring coverage gaps quarterly. Repeated shortfalls are a staffing signal, not a scheduling inconvenience.',
    ],
  },
  {
    slug: 'equipment-allowance-reconciliation', title: 'Reconciling equipment and allowances for remote staff', excerpt: 'Match the asset, the allowance, and the payroll line so remote work costs stay auditable.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/equipment-allowance-reconciliation.png', sources: blogSources,
    body: [
      '## List the assets and the entitlements', 'Record each company asset with the serial number, the assigned person, and the return obligation. Separately record the allowances: internet, power, or equipment stipend.',
      'Do not treat an allowance as a substitute for an asset. The two have different ownership and different tax or payroll treatment.',
      '## Match the payment to the policy', 'Check that each allowance payment matches the approved policy and the pay period. Flag a payment without a policy reference or a person without an approved assignment.',
      'Where the policy changed, apply it from the effective date and keep the old version for prior periods.',
      '## Review the exceptions', 'List missing assets, duplicate allowances, and returned equipment still being paid. Give each item an owner and a correction date.',
      'Reconcile quarterly and at offboarding. The record should let finance and IT agree on what is owned and what is owed.',
    ],
  },
  {
    slug: 'contractor-vs-employee-status-review', title: 'A status review for contractor and employee arrangements', excerpt: 'Document control, integration, and economic reality questions before a misclassification becomes expensive.', minutes: 6, publishedDate: '2026-10-22', image: '/oct22/contractor-vs-employee-status-review.png', sources: blogSources,
    body: [
      '## Describe how the work actually runs', 'Record who sets the schedule, who assigns tasks, who reviews quality, who provides equipment, and who bears the financial risk. The written label matters less than the operating facts.',
      'Keep the description factual and dated. Do not rewrite policy to match the desired answer.',
      '## Identify the decision owner', 'Classification is a legal and tax question. The operations team prepares the facts; the authorized adviser or counsel decides.',
      'Where the facts conflict with the current arrangement, pause changes until the decision is documented.',
      '## Record the review and the action', 'Store the facts, the advice received, the decision, and the date. If the arrangement changes, record what changed and when the new terms take effect.',
      'Review at renewal and whenever the working relationship changes materially.',
    ],
  },
  {
    slug: 'onboarding-document-collection', title: 'Collecting onboarding documents without chasing for weeks', excerpt: 'A checklist, a reminder schedule, and a single owner for missing documents.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/onboarding-document-collection.png', sources: blogSources,
    body: [
      '## Publish the list and the deadline', 'Give the new hire the document list, the format accepted, the secure upload path, and the date required. Explain why each item is needed.',
      'Keep the list short and specific. A vague request for "all documents" produces partial submissions.',
      '## Track status, not just receipt', 'Record received, verified, missing, and expiring for each item. A document that arrived but does not match the name or the requirement is still open.',
      'Send reminders on a fixed schedule and record each one. Escalate to the manager only after the agreed window.',
      '## Close before the first pay cycle', 'Confirm that payroll and statutory requirements are complete before the first payment. Keep the evidence in the approved system, not in email.',
      'Review the process after each cohort to remove steps that do not change a decision.',
    ],
  },
  {
    slug: 'performance-improvement-plan-records', title: 'Keeping performance improvement records that hold up', excerpt: 'Specific expectations, dated feedback, support offered, and review points, without turning the file into a narrative.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/performance-improvement-plan-records.png', sources: blogSources,
    body: [
      '## Write observable expectations', 'State the expected output, the standard, and the review date. Replace "improve attitude" with the behaviors and communication the role requires.',
      'Give the worker the document and a chance to respond before the plan starts.',
      '## Record feedback and support', 'Keep dated examples of the gap and the support provided: training, clearer instructions, additional review, or adjusted access.',
      'Do not rely on a single end-of-period summary. The record should show what happened week by week.',
      '## Review and decide', 'Hold the review on the scheduled date. Record whether the expectation was met, extended, or changed.',
      'Store the record under the retention policy and limit access. The purpose is a fair decision, not a permanent file of complaints.',
    ],
  },
  {
    slug: 'offboarding-final-pay-checklist', title: 'An offboarding final pay checklist', excerpt: 'Sequence the last day, the asset return, the leave balance, and the final pay with named owners.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/offboarding-final-pay-checklist.png', sources: blogSources,
    body: [
      '## Set the last day and the cut-off', 'Record the last working day, the final timesheet, and the leave balance. Confirm which deductions and adjustments apply under the contract and local rules.',
      'Give payroll the approved final inputs before the cut-off, not after the pay run.',
      '## Recover access and assets', 'Disable access at the agreed time, recover the device, and confirm the data handover. Record each step with the time and the owner.',
      'Where an asset is not returned, record the agreed deduction or recovery action before final pay is released.',
      '## Confirm the payment and the record', 'Compare the final pay with the approved calculation. Send the payslip and the required documents to the worker.',
      'Close the file with the access log, the asset record, and the payroll confirmation.',
    ],
  },
  {
    slug: 'remote-work-policy-acknowledgment', title: 'Getting remote work policy acknowledgments that mean something', excerpt: 'A short acknowledgment flow with version control, a readable summary, and evidence of receipt.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/remote-work-policy-acknowledgment.png', sources: blogSources,
    body: [
      '## Version the policy before sending', 'Record the policy version, the effective date, and the changes since the last version. Send the full text with a short summary of what changed.',
      'Do not bury a material change in a long document without a note.',
      '## Collect a dated acknowledgment', 'Use a system that records the person, the version, and the time. A reply emoji is not an acknowledgment.',
      'For new hires, make the acknowledgment part of onboarding. For changes, set a deadline and a reminder.',
      '## Follow up on exceptions', 'List people who have not acknowledged and route the list to the manager. Record the escalation and the resolution.',
      'Keep the acknowledgments for as long as the policy applies and review the flow when the policy changes.',
    ],
  },
  {
    slug: 'role-change-amendment-log', title: 'Logging role changes before they become payroll errors', excerpt: 'One record for title, pay, hours, manager, and access changes, with effective dates and approvals.', minutes: 5, publishedDate: '2026-10-22', image: '/oct22/role-change-amendment-log.png', sources: blogSources,
    body: [
      '## Capture the change and the effective date', 'Record the old value, the new value, the reason, the approver, and the effective date for each change. Separate pay changes from title or manager changes.',
      'Give payroll and access owners the approved change before the effective date.',
      '## Update the systems in order', 'Update the employment record, the payroll register, the schedule, and the system access. Check that the change did not create a duplicate account or an orphaned approval.',
      'Where a change is delayed, record the retroactive correction and the approver rather than editing history silently.',
      '## Review monthly', 'Compare the amendment log with payroll and access changes. A change that appears in one system but not the others is an open item.',
      'The log is the evidence that the change was approved and applied, not just discussed.',
    ],
  },
];

export const october22ResearchBatch = [
  {
    slug: 'timesheet-variance-detection-method', title: 'Detecting timesheet variance without measuring people', excerpt: 'A method for comparing approved schedules, recorded hours, and payroll lines, with exception classes and limits.', publishedDate: '2026-10-22', modifiedDate: '2026-10-22', image: '/oct22/timesheet-variance-detection-method.png', sources: researchSources,
    body: [
      '## The question and the unit', 'This note tests a local question: where do recorded hours differ from the approved schedule, the leave record, or the payroll line, and what explains the difference? The unit is one worker-day. The method describes variance; it does not judge productivity.',
      '## Build the comparison', 'Join the schedule, the timesheet, the leave record, and the payroll register by worker and date. Record the time zone and the cut-off. Mark missing joins rather than dropping them.',
      '## Classify the variance', 'Use a small taxonomy: approved overtime, unapproved overtime, leave mismatch, holiday treatment, schedule change, entry error, and unknown. Unknown is a real category and should be reported.',
      '## Sample and reconcile', 'Take a stratified sample by week and by team. For each item, open the approval and the payroll line. Where the difference is a process issue, note the step that failed.',
      '## Report', 'Report the variance count, the value, and the class mix. Pair it with the number of items reconciled and the number still open. Do not convert the result into a performance score.',
      '## Limitations', 'The method depends on consistent records and may miss informal schedule swaps. It measures recorded agreement, not whether the work was useful.',
    ],
  },
  {
    slug: 'onboarding-document-completeness-sampling', title: 'Sampling onboarding files for completeness', excerpt: 'A field-level check of onboarding documents before the first pay cycle, with missingness and expiry categories.', publishedDate: '2026-10-22', modifiedDate: '2026-10-24', image: '/oct22/onboarding-document-completeness-sampling.png', sources: researchSources,
    body: [
      '## Define the standard', 'List the documents required before the first pay cycle and before system access. Record the acceptable format and the verification step for each.',
      '## Sample the cohort', 'Use all new hires in a defined period if the cohort is small, or a stratified sample by role. Include at least one file with an expired document and one with a name mismatch.',
      '## Score and classify', 'Score each file as complete, missing, expiring, or unverified. Record the reason and the owner. Do not treat a document that arrived but fails verification as complete.',
      '## Report', 'Report the cohort, the file count, the field completeness, and the exceptions. Add the time from start date to complete file where the data supports it.',
      '## Limitations', 'The method measures file completeness, not the legality of the arrangement. It also depends on the approved system being the only source of truth.',
      'A Philippines-based coordinator can prepare the list and route gaps. The HR owner decides employment terms, policy answers, access, and start approval.',
    ],
    handoff: { href: '/services/new-hire-onboarding', label: 'Plan new-hire onboarding', body: 'Use this service to track approved documents, account requests, and first-week blockers in one clear list. Your HR owner still decides employment terms, policy answers, access, and start approval.' },
  },
  {
    slug: 'leave-request-latency-analysis', title: 'Analyzing leave request latency and coverage risk', excerpt: 'A time-based method for the gap between request, approval, and coverage confirmation.', publishedDate: '2026-10-22', modifiedDate: '2026-10-22', image: '/oct22/leave-request-latency-analysis.png', sources: researchSources,
    body: [
      '## Three events', 'Record the request time, the approval time, and the coverage confirmation time. Each has a different owner and a different failure mode.',
      '## Compare against the planned window', 'Define the expected notice period for each leave type. Report the share of requests inside the window and the share that created a coverage gap.',
      '## Segment', 'Separate short leave, extended leave, and unplanned absence. A single median hides the cases that actually threaten coverage.',
      '## Report', 'Report counts, medians, and the oldest open request. Add the number of shifts that required reassignment.',
      '## Limitations', 'The method depends on timestamps that may not reflect informal conversations. It measures process latency, not the reason for the request.',
    ],
  },
  {
    slug: 'probation-review-consistency-method', title: 'Testing consistency in probation decisions', excerpt: 'A review method that compares evidence packs and outcomes across similar roles without ranking people.', publishedDate: '2026-10-22', modifiedDate: '2026-10-22', image: '/oct22/probation-review-consistency-method.png', sources: researchSources,
    body: [
      '## The limited question', 'Does the documentation support the probation outcome, and are similar cases treated similarly? The unit is one completed probation review.',
      '## Score the pack', 'Check the written expectations, dated examples, support offered, worker response, and final decision. Record missing items and the decision date.',
      '## Compare without ranking', 'Group cases by role family and manager. Look for differences in evidence quality and outcome that are not explained by the role.',
      '## Report', 'Report the sample, the completeness rate, and the unexplained differences. Do not publish individual performance data.',
      '## Limitations', 'Small samples and manager judgment limit comparison. The method tests documentation and consistency, not the correctness of a business decision.',
    ],
  },
  {
    slug: 'final-pay-timeline-audit-method', title: 'Auditing the final pay timeline', excerpt: 'A stage-based audit from last working day to final payment, with asset and access dependencies recorded.', publishedDate: '2026-10-22', modifiedDate: '2026-10-22', image: '/oct22/final-pay-timeline-audit-method.png', sources: researchSources,
    body: [
      '## Stages and owners', 'Record the last working day, the final timesheet, the leave balance, the asset return, the approval, and the payment date. Each stage needs an owner and a timestamp.',
      '## Find the wait', 'Compare the elapsed time with the planned timeline. Classify the delay: missing timesheet, asset dispute, approval wait, payroll cut-off, or correction.',
      '## Sample', 'Use a defined period and include both voluntary and involuntary exits. Exclude cases still in progress and report them separately.',
      '## Report', 'Report the median and the 90th percentile by stage, plus the share paid on time. Pair the numbers with two examples.',
      '## Limitations', 'The audit measures the process, not the legal correctness of the final pay. Local rules and contract terms still govern the amount.',
    ],
  },
];
