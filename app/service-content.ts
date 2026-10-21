import { services } from './data';

export type ServiceWorkflowStep = Readonly<{ title: string; detail: string }>;
export type ServiceFaq = Readonly<{ question: string; answer: string }>;

export type ServiceContent = Readonly<{
  slug: string;
  title: string;
  summary: string;
  audience: readonly string[];
  problem: readonly string[];
  scope: readonly string[];
  inputs: readonly string[];
  workflow: readonly ServiceWorkflowStep[];
  deliverables: readonly string[];
  boundaries: readonly string[];
  qualityControls: readonly string[];
  humanDecisions: readonly string[];
  startingScenarios: readonly string[];
  faqs: readonly ServiceFaq[];
  relatedServices: readonly string[];
  heroImage: string;
  heroAlt: string;
}>;

const contentRecords: readonly ServiceContent[] = [
  {
    slug: 'candidate-sourcing-coordination',
    title: 'Candidate Sourcing Coordination',
    summary: 'Keep candidate discovery, outreach records, and interview handoffs organized while your hiring team retains selection authority.',
    audience: ['Hiring teams with a defined role brief but limited time to maintain sourcing activity.', 'Recruiting leaders who need a visible candidate pipeline across job boards, referrals, and approved talent pools.'],
    problem: ['Candidate searches stall when criteria change without a record, outreach is duplicated, or promising profiles wait too long for review.', 'A coordinated queue gives recruiters a consistent way to capture source, status, follow-up dates, and hiring-team feedback.'],
    scope: ['Translate approved role criteria into search filters and sourcing checklists.', 'Record profiles, source links, contact status, and follow-up dates in the approved system.', 'Prepare interview availability options and maintain disposition reasons supplied by the hiring team.'],
    inputs: ['Approved job description, required criteria, and acceptable location or schedule.', 'Access to authorized sourcing tools and the applicant tracking system.', 'Outreach templates, employer information, and named reviewers.'],
    workflow: [{ title: 'Calibrate the search', detail: 'Review the role brief against sample profiles and record what qualifies, what does not, and what needs recruiter review.' }, { title: 'Build the candidate queue', detail: 'Search approved sources, remove duplicates, document evidence against criteria, and prepare outreach from approved templates.' }, { title: 'Route responses', detail: 'Update statuses, surface candidate questions, and send qualified profiles to the named reviewer on the agreed cadence.' }],
    deliverables: ['Current candidate tracker with source and status history.', 'Review-ready profile summaries tied to the approved criteria.', 'Open-question, follow-up, and scheduling queue.'],
    boundaries: ['The specialist does not promise employment, compensation, immigration support, or a hiring outcome.', 'Unapproved sources, sensitive screening criteria, and profile rejection decisions stay outside the coordination lane.'],
    qualityControls: ['Duplicate check before a profile enters the queue.', 'Required-criteria check against source evidence.', 'Regular aging review for unanswered outreach and pending manager feedback.'],
    humanDecisions: ['Hiring managers approve role criteria, interview progression, rejection, compensation, and the final selection.', 'Recruiting leadership resolves ambiguous qualifications and changes to sourcing strategy.'],
    startingScenarios: ['A recruiter has an approved role but needs consistent daily sourcing coverage.', 'Several hiring managers use one pipeline and need cleaner status ownership.', 'A sourcing sprint needs a documented handoff before interview review begins.'],
    faqs: [{ question: 'Can the coordinator screen candidates?', answer: 'The coordinator can check objective, written criteria and prepare evidence. A recruiter or hiring manager should make judgment-based progression decisions.' }, { question: 'Can we start with one role?', answer: 'Yes. One stable role brief is often the clearest starting point for calibrating sources, quality checks, and review timing.' }, { question: 'What happens when a candidate asks an unapproved question?', answer: 'The question is recorded and routed to the named recruiter rather than answered from assumption.' }],
    relatedServices: ['new-hire-onboarding', 'employment-document-administration', 'workforce-reporting'],
    heroImage: '/blog-thumbnails/recruiting-pipeline-hygiene.svg',
    heroAlt: 'Illustration of a documented candidate sourcing pipeline and review queue',
  },
  {
    slug: 'employment-document-administration',
    title: 'Employment Document Administration',
    summary: 'Coordinate approved employment documents through preparation, signature tracking, filing, and exception handoff without transferring legal judgment.',
    audience: ['People teams managing recurring offers, acknowledgements, amendments, and employee notices.', 'Operations teams that need consistent document status and version history across a distributed workforce.'],
    problem: ['Employment records become unreliable when templates, approvals, signatures, and final copies live in separate inboxes.', 'A controlled administration lane makes ownership, current version, missing information, and completion evidence visible.'],
    scope: ['Populate approved templates from verified source data.', 'Track internal approvals, employee receipt, signature status, and final filing.', 'Maintain version labels and an exception list for missing or conflicting information.'],
    inputs: ['Approved templates and instructions for when each template applies.', 'Verified employee data and authorized document repository access.', 'Approval matrix, naming convention, retention rules, and escalation contacts.'],
    workflow: [{ title: 'Check the request', detail: 'Confirm the document type, source data, template version, approver, and due date before preparation.' }, { title: 'Prepare and route', detail: 'Populate only authorized fields, run a completeness check, and route the draft through the stated approval and signature path.' }, { title: 'Close the record', detail: 'Store the final copy in the approved location, update the register, and escalate unresolved discrepancies.' }],
    deliverables: ['Prepared document packet from approved templates.', 'Status register showing approvals, signatures, versions, and storage location.', 'Exception queue for missing data, conflicting instructions, or overdue action.'],
    boundaries: ['The service does not draft legal language or decide which legal terms apply.', 'The specialist does not sign for an employee or employer, alter approved clauses, or provide legal advice.'],
    qualityControls: ['Template-version and required-field checks before routing.', 'Two-source check for sensitive identity, role, pay, and date fields when available.', 'Final-file check against naming, access, and retention instructions.'],
    humanDecisions: ['Authorized leaders choose templates, approve terms, resolve discrepancies, and sign where required.', 'Legal or HR owners decide how policy and law apply to an individual case.'],
    startingScenarios: ['Signed documents are difficult to locate or status is maintained in email.', 'A people team is introducing standard templates and a central register.', 'Document volume has grown but approval authority must remain internal.'],
    faqs: [{ question: 'Will the specialist write contracts?', answer: 'No. Work begins from approved templates and written instructions. New or changed legal language goes to the authorized owner.' }, { question: 'Can historical files be organized?', answer: 'Yes, when the storage, naming, access, and discrepancy rules are defined before the review starts.' }, { question: 'How are missing signatures handled?', answer: 'They remain visible in a follow-up queue and are escalated according to the agreed timing.' }],
    relatedServices: ['employee-records-management', 'new-hire-onboarding', 'offboarding-administration'],
    heroImage: '/blog-thumbnails/onboarding-documents.svg',
    heroAlt: 'Illustration of employment documents moving through review and approval',
  },
  {
    slug: 'new-hire-onboarding',
    title: 'New Hire Onboarding',
    summary: 'Coordinate the people, records, access requests, and first-week checkpoints that help a new hire begin with clear ownership.',
    audience: ['Growing teams onboarding employees across locations and time zones.', 'People operations teams that need one accountable checklist without giving up access or policy approvals.'],
    problem: ['New hires lose productive time when documents, equipment, introductions, training, and system access are requested in different places.', 'A single onboarding control point exposes blockers early and confirms that each owner has accepted the handoff.'],
    scope: ['Create an onboarding plan from the approved role and start date.', 'Coordinate document, account, equipment, orientation, and training requests with named owners.', 'Track completion evidence and first-week questions.'],
    inputs: ['Confirmed start date, role, manager, schedule, and contact details.', 'Approved onboarding checklist, welcome materials, and required policies.', 'System and equipment owners, access profiles, and escalation contacts.'],
    workflow: [{ title: 'Build the plan', detail: 'Map every prerequisite to an owner, due date, completion signal, and escalation route.' }, { title: 'Confirm readiness', detail: 'Check documents, account requests, equipment status, calendar invitations, and first-day instructions before the start.' }, { title: 'Monitor the first week', detail: 'Record completed milestones, route questions, and provide the manager with a concise blocker and decision summary.' }],
    deliverables: ['Role-specific onboarding checklist with ownership and status.', 'First-day schedule and confirmed instruction packet.', 'Blocker log and first-week completion summary.'],
    boundaries: ['The specialist does not approve access, waive requirements, or decide employment terms.', 'Technical provisioning, security approval, policy interpretation, and manager coaching remain with designated owners.'],
    qualityControls: ['Prerequisite review at agreed checkpoints before the start date.', 'Named evidence for each completed document, account, and training item.', 'Access and personal data shared only through approved systems.'],
    humanDecisions: ['Managers choose role priorities and confirm readiness expectations.', 'HR, security, IT, and legal owners approve exceptions and sensitive access.'],
    startingScenarios: ['Managers use different onboarding lists and People Operations needs one standard view.', 'Remote new hires need coordinated accounts, equipment, and calendar handoffs.', 'A start date is confirmed but prerequisite ownership is unclear.'],
    faqs: [{ question: 'Does the service provision accounts?', answer: 'It can prepare and track approved requests. System owners retain provisioning and access approval.' }, { question: 'How early should onboarding begin?', answer: 'Begin once the role, manager, and start date are confirmed so prerequisite lead times can be made visible.' }, { question: 'Can the checklist vary by role?', answer: 'Yes. A controlled core checklist can include role-specific access, training, and manager milestones.' }],
    relatedServices: ['employment-document-administration', 'training-coordination', 'employee-records-management'],
    heroImage: '/blog-thumbnails/onboarding-status-board.svg',
    heroAlt: 'Illustration of a new hire onboarding status board with owned tasks',
  },
  {
    slug: 'employee-records-management',
    title: 'Employee Records Management',
    summary: 'Maintain orderly employee files, change histories, access controls, and correction queues using your approved record rules.',
    audience: ['People teams with employee data spread across folders, inboxes, and HR systems.', 'Organizations that need recurring file hygiene and visible correction ownership.'],
    problem: ['A record cannot support operations when the current value, source, owner, or change history is unclear.', 'Structured records administration separates verified updates from discrepancies that need human review.'],
    scope: ['File authorized records using approved names, categories, and permissions.', 'Process documented employee data changes and retain source evidence.', 'Run completeness checks and maintain a discrepancy and expiry queue.'],
    inputs: ['Record inventory, source-of-truth map, and authorized change channels.', 'Naming, retention, access, and deletion instructions.', 'Required-document list and owners for disputed data.'],
    workflow: [{ title: 'Map the record', detail: 'Confirm the authoritative system, required fields, document categories, and access rule for each record type.' }, { title: 'Process controlled updates', detail: 'Match each request to source evidence, update approved fields, and record what changed and when.' }, { title: 'Reconcile exceptions', detail: 'Run scheduled completeness checks and route duplicates, conflicts, missing files, or expired items to the owner.' }],
    deliverables: ['Organized employee files and current record index.', 'Change log tied to approved requests and evidence.', 'Completeness, discrepancy, and expiry report.'],
    boundaries: ['The specialist does not decide retention law, employee status, disciplinary outcomes, or disputed facts.', 'Records are not copied into unapproved tools or shared beyond the documented permission model.'],
    qualityControls: ['Source-evidence check before material employee data changes.', 'Duplicate, naming, date, and required-field checks.', 'Periodic permission and exception review with the record owner.'],
    humanDecisions: ['HR owners resolve conflicts, approve corrections, and set retention or deletion rules.', 'Security and system owners authorize access and exports.'],
    startingScenarios: ['Employee folders use inconsistent names and required records are hard to verify.', 'Changes arrive through email without a reliable audit trail.', 'An HR system migration needs a clean exception register before import.'],
    faqs: [{ question: 'Can the service clean an existing archive?', answer: 'Yes, after the authoritative source, duplicate rule, retention instruction, and exception owner are documented.' }, { question: 'Who can request a record change?', answer: 'Only requesters and channels authorized in your change-control policy should initiate an update.' }, { question: 'Does this replace HR policy ownership?', answer: 'No. It administers approved rules and gives HR a clear queue for decisions.' }],
    relatedServices: ['employment-document-administration', 'workforce-reporting', 'offboarding-administration'],
    heroImage: '/blog-thumbnails/employee-records.svg',
    heroAlt: 'Illustration of organized employee records with controlled update history',
  },
  {
    slug: 'schedule-administration',
    title: 'Schedule Administration',
    summary: 'Keep approved work schedules, availability changes, coverage requests, and unresolved conflicts in one controlled operating view.',
    audience: ['Distributed teams coordinating shifts, recurring coverage, or planned schedule changes.', 'Operations and people teams that need schedule accuracy without delegating staffing decisions.'],
    problem: ['Coverage gaps appear when availability, approved changes, holidays, and manager decisions are recorded in different channels.', 'A schedule administration lane consolidates approved facts and surfaces conflicts before the work period begins.'],
    scope: ['Maintain the published schedule from approved staffing inputs.', 'Record availability and change requests, then route them to designated approvers.', 'Flag overlaps, uncovered periods, missed confirmations, and time-zone conflicts.'],
    inputs: ['Staff roster, roles, locations, time zones, and approved working patterns.', 'Coverage requirements, holiday calendar, cutoff times, and approval matrix.', 'Authorized request channel and escalation rules for urgent gaps.'],
    workflow: [{ title: 'Assemble the schedule', detail: 'Combine current roster, coverage requirements, approved leave, and availability in the designated system.' }, { title: 'Validate coverage', detail: 'Check overlaps, gaps, rest rules supplied by the client, time zones, and pending decisions before publication.' }, { title: 'Control changes', detail: 'Log requests, obtain approval, publish accepted updates, and alert affected owners with a traceable history.' }],
    deliverables: ['Current approved schedule with time-zone clarity.', 'Change request and approval history.', 'Coverage-gap and pending-decision report.'],
    boundaries: ['The specialist does not require overtime, deny leave, interpret labor rules, or choose who must cover a gap.', 'Only approved changes are published as final.'],
    qualityControls: ['Roster and time-zone check before each publishing cycle.', 'Conflict and required-coverage scan after every approved change.', 'Confirmation that affected people received the current version.'],
    humanDecisions: ['Managers approve schedule changes, coverage tradeoffs, overtime, and exceptions.', 'HR or legal owners determine applicable scheduling requirements.'],
    startingScenarios: ['Schedule changes are handled in chat and the published roster falls out of date.', 'A team spans several time zones and recurring coverage is hard to verify.', 'Managers need a clean queue of requests before the weekly schedule cutoff.'],
    faqs: [{ question: 'Can the administrator approve shift swaps?', answer: 'No. The administrator can check completeness and route a swap to the named approver.' }, { question: 'Can multiple time zones be shown?', answer: 'Yes. The source time zone and display convention should be agreed before schedules are maintained.' }, { question: 'How are urgent absences handled?', answer: 'They follow your urgent escalation path while the schedule remains marked as pending until a manager decides.' }],
    relatedServices: ['leave-tracking-support', 'workforce-reporting', 'payroll-input-preparation'],
    heroImage: '/blog-thumbnails/hr-calendar-administration.svg',
    heroAlt: 'Illustration of a team schedule calendar with coverage checks',
  },
  {
    slug: 'leave-tracking-support',
    title: 'Leave Tracking Support',
    summary: 'Record leave requests, approval evidence, balances supplied by your system, and schedule handoffs without making eligibility decisions.',
    audience: ['People teams handling recurring leave administration across managers or locations.', 'Operations leaders who need approved absences reflected consistently in staffing plans and payroll inputs.'],
    problem: ['Leave records drift when requests, approvals, balances, calendars, and payroll cutoffs are updated separately.', 'A reconciliation workflow keeps the same approved event visible across each authorized destination.'],
    scope: ['Check requests for required information and route them for approval.', 'Update approved leave in designated trackers and calendars.', 'Reconcile approval evidence, recorded dates, supplied balances, and downstream handoffs.'],
    inputs: ['Approved leave types, request form, and routing rules.', 'Balance source, holiday calendar, payroll cutoff, and schedule owners.', 'Escalation contacts for disputed eligibility or conflicting dates.'],
    workflow: [{ title: 'Validate intake', detail: 'Check dates, leave type, supporting fields, and approver before the request enters review.' }, { title: 'Record the decision', detail: 'After authorized approval, update designated records and notify schedule or payroll owners through approved channels.' }, { title: 'Reconcile the event', detail: 'Compare request, decision, calendar, tracker, and cutoff handoff, then flag any mismatch.' }],
    deliverables: ['Current leave request register and approval status.', 'Approved calendar and downstream handoff updates.', 'Balance, date, and evidence discrepancy queue.'],
    boundaries: ['The specialist does not approve or deny leave, calculate legal entitlement, or interpret medical information.', 'Balances are recorded from the approved source rather than independently invented or adjusted.'],
    qualityControls: ['Request-to-approval evidence match.', 'Date and leave-type comparison across designated systems.', 'Cutoff review for events that affect schedules or payroll inputs.'],
    humanDecisions: ['Managers and HR decide eligibility, approval, exceptions, and coverage response.', 'Authorized owners resolve balance disputes and policy interpretation.'],
    startingScenarios: ['Approved absences do not consistently reach team calendars or payroll preparation.', 'Managers need one queue for pending requests and approaching dates.', 'Historical leave records need reconciliation against approval evidence.'],
    faqs: [{ question: 'Can the specialist answer policy questions?', answer: 'The specialist can share approved policy text or route the question. Interpretation and exceptions stay with HR.' }, { question: 'Are leave balances calculated here?', answer: 'The workflow uses the balance from your authorized system and flags inconsistencies for review.' }, { question: 'Can this support several leave types?', answer: 'Yes, when each type has documented fields, routing, evidence, and downstream steps.' }],
    relatedServices: ['schedule-administration', 'payroll-input-preparation', 'employee-records-management'],
    heroImage: '/blog-thumbnails/leave-reconciliation.svg',
    heroAlt: 'Illustration of approved leave records being reconciled across systems',
  },
  {
    slug: 'payroll-input-preparation',
    title: 'Payroll Input Preparation',
    summary: 'Assemble, reconcile, and hand off approved payroll inputs while payment approval and payroll authority remain with your designated team.',
    audience: ['Payroll and People Operations teams collecting recurring time, leave, allowance, and employee-change inputs.', 'Organizations that need a traceable pre-payroll checklist and exception queue.'],
    problem: ['Payroll risk grows when source changes arrive after cutoff, totals do not reconcile, or approval evidence is missing.', 'Controlled input preparation identifies incomplete or conflicting records before the authorized payroll owner processes pay.'],
    scope: ['Collect approved payroll-impacting inputs from designated sources.', 'Normalize them into the authorized import or handoff format.', 'Reconcile totals, effective dates, approvals, duplicates, and late items.'],
    inputs: ['Payroll calendar, cutoff, required format, and current roster.', 'Authorized time, leave, allowance, deduction, and change sources.', 'Approval matrix, prior-period control totals, and exception contacts.'],
    workflow: [{ title: 'Open the cycle', detail: 'Confirm roster, cutoff, expected source files, prior controls, and changes due in the current period.' }, { title: 'Prepare the input set', detail: 'Compile authorized records, standardize fields, and attach or reference approval evidence.' }, { title: 'Reconcile and hand off', detail: 'Check counts and totals, isolate exceptions, then send a controlled package to the payroll owner for review.' }],
    deliverables: ['Payroll input file or structured handoff packet.', 'Control summary with record counts, totals, and source status.', 'Exception register for missing, late, duplicate, or conflicting inputs.'],
    boundaries: ['The specialist does not approve payroll, release funds, change bank details without the required control, or provide tax advice.', 'Calculation and statutory responsibility remain with the authorized payroll provider or internal owner.'],
    qualityControls: ['Roster, period, effective-date, duplicate, and required-field checks.', 'Control-total comparison to source and prior-period expectations.', 'Separate verification path for sensitive payment-detail changes.'],
    humanDecisions: ['Payroll owners approve calculations, corrections, payments, and cutoff exceptions.', 'HR, finance, tax, or legal advisers decide disputed or regulated treatment.'],
    startingScenarios: ['Payroll inputs arrive through multiple spreadsheets and messages.', 'The payroll owner spends the cutoff day chasing approvals and formatting files.', 'A growing team needs documented controls before handing data to a provider.'],
    faqs: [{ question: 'Does this service run payroll?', answer: 'No. It prepares and reconciles inputs for the authorized processor or payroll owner.' }, { question: 'Can bank detail changes be included?', answer: 'Only through your approved high-risk change procedure with independent verification and authorization.' }, { question: 'What happens after cutoff?', answer: 'Late items are recorded and routed to the payroll owner, who decides current-cycle or later treatment.' }],
    relatedServices: ['leave-tracking-support', 'schedule-administration', 'workforce-reporting'],
    heroImage: '/blog-thumbnails/payroll-checks.svg',
    heroAlt: 'Illustration of payroll inputs passing reconciliation checks before handoff',
  },
  {
    slug: 'benefits-administration-support',
    title: 'Benefits Administration Support',
    summary: 'Coordinate benefits information, enrollment records, employee questions, and provider handoffs from approved plan materials.',
    audience: ['People teams managing enrollment windows, life-event changes, and recurring employee benefits questions.', 'Organizations that need organized provider follow-up without delegating plan or eligibility decisions.'],
    problem: ['Benefits requests become hard to track when employee documents, plan deadlines, provider responses, and HR decisions stay in separate threads.', 'A managed queue shows what is complete, what is waiting, and who must decide.'],
    scope: ['Share approved plan information and intake requirements.', 'Check enrollment or change packets for required fields and route them to authorized owners.', 'Track provider submissions, acknowledgements, questions, and effective-date evidence.'],
    inputs: ['Current approved plan guides, forms, eligibility rules, and deadlines.', 'Provider contacts, authorized submission channels, and employee communication templates.', 'Decision owners for eligibility, exceptions, deductions, and sensitive cases.'],
    workflow: [{ title: 'Classify the request', detail: 'Identify the plan, event, deadline, required documents, and authorized decision path.' }, { title: 'Check and route', detail: 'Review the packet for completeness, request missing fields through approved channels, and submit only after required approval.' }, { title: 'Track confirmation', detail: 'Record provider acknowledgement, surface discrepancies, and update the employee-facing status without making promises.' }],
    deliverables: ['Benefits request and enrollment status register.', 'Complete submission packet using approved forms.', 'Provider follow-up and discrepancy queue.'],
    boundaries: ['The specialist does not recommend a plan, decide eligibility, interpret regulated benefits law, or promise coverage.', 'Health and other sensitive information is handled only in authorized systems and shared with approved recipients.'],
    qualityControls: ['Current-plan and current-form version check.', 'Required-field, deadline, approval, and submission-confirmation checks.', 'Restricted handling for sensitive employee information.'],
    humanDecisions: ['HR and plan administrators decide eligibility, exceptions, plan interpretation, and corrections.', 'Employees make their own benefit elections using approved information.'],
    startingScenarios: ['An enrollment window creates a high volume of incomplete packets.', 'Employee benefit questions need routing and status ownership.', 'Provider acknowledgements are not consistently matched to employee requests.'],
    faqs: [{ question: 'Can the specialist recommend a benefits option?', answer: 'No. The specialist can organize approved information and route questions to the authorized adviser or plan owner.' }, { question: 'Can life-event changes be tracked?', answer: 'Yes, using your approved evidence, deadline, review, and provider-submission process.' }, { question: 'How is sensitive information protected?', answer: 'Access, transfer, and storage follow the specific permission and system rules you approve for the workflow.' }],
    relatedServices: ['employee-records-management', 'payroll-input-preparation', 'new-hire-onboarding'],
    heroImage: '/blog-thumbnails/benefits-enrollment.svg',
    heroAlt: 'Illustration of a benefits enrollment packet and provider handoff',
  },
  {
    slug: 'performance-review-coordination',
    title: 'Performance Review Coordination',
    summary: 'Run the review calendar, evidence requests, completion tracking, and meeting logistics while managers retain every performance judgment.',
    audience: ['People teams coordinating recurring review cycles across many managers.', 'Leadership teams that need consistent completion evidence and fewer last-minute review gaps.'],
    problem: ['Review cycles slip when participants, forms, dates, evidence, and calibration steps lack one operational owner.', 'Coordination protects the timetable and record quality without turning administration into performance judgment.'],
    scope: ['Set up the approved review calendar, participant list, forms, and reminders.', 'Track self-review, manager review, calibration, acknowledgement, and meeting milestones.', 'Prepare completion and exception views for People Operations.'],
    inputs: ['Approved cycle design, participants, deadlines, forms, and communication copy.', 'System access, reporting fields, and escalation cadence.', 'Owners for rating, calibration, employee concerns, and policy questions.'],
    workflow: [{ title: 'Configure the cycle', detail: 'Verify the roster, reporting relationships, forms, dates, and expected completion evidence.' }, { title: 'Maintain the queue', detail: 'Send approved notices, track milestones, answer process questions from source material, and route sensitive issues.' }, { title: 'Close and reconcile', detail: 'Confirm acknowledgements and final records, report unresolved items, and archive cycle evidence under approved controls.' }],
    deliverables: ['Review calendar and participant milestone tracker.', 'Manager and employee reminder queue.', 'Completion, exception, and record-closure report.'],
    boundaries: ['The specialist does not assign ratings, write manager feedback, conduct calibration, or make promotion or compensation recommendations.', 'Sensitive concerns are routed to the designated HR owner rather than investigated.'],
    qualityControls: ['Roster and reporting-line confirmation before launch.', 'Form-version, required-section, and milestone checks.', 'Restricted access and final-record reconciliation.'],
    humanDecisions: ['Managers own feedback, ratings, goals, and performance conversations.', 'Leadership and HR own calibration, employee relations, pay, promotion, and policy exceptions.'],
    startingScenarios: ['Review reminders consume HR time and cycle status is unclear.', 'A first formal cycle needs a controlled participant and deadline register.', 'Several teams use the same cycle but follow different completion habits.'],
    faqs: [{ question: 'Can the coordinator draft manager feedback?', answer: 'No. Managers remain accountable for factual, fair, and role-specific feedback.' }, { question: 'Can incomplete forms be flagged?', answer: 'Yes. The coordinator can check required sections and route the form back without judging its conclusions.' }, { question: 'What happens with an employee concern?', answer: 'It is escalated promptly through your confidential HR path.' }],
    relatedServices: ['training-coordination', 'employee-records-management', 'workforce-reporting'],
    heroImage: '/blog-thumbnails/performance-review.svg',
    heroAlt: 'Illustration of a performance review cycle and completion tracker',
  },
  {
    slug: 'training-coordination',
    title: 'Training Coordination',
    summary: 'Coordinate training assignments, attendance, evidence, renewals, and unresolved access issues from an approved learning plan.',
    audience: ['People and compliance teams administering recurring required training.', 'Operations leaders coordinating role onboarding and skills programs across distributed teams.'],
    problem: ['Training records lose value when assignments, attendance, completions, renewal dates, and exceptions do not reconcile.', 'A controlled coordination lane gives owners a current view without allowing administration to certify competence.'],
    scope: ['Maintain the approved training catalog, audience list, assignment dates, and reminders.', 'Coordinate sessions, learning-system access, attendance, and completion evidence.', 'Track overdue, failed, inaccessible, or expiring assignments for owner action.'],
    inputs: ['Approved curriculum, audience rules, due dates, and renewal cadence.', 'Learning platform or record access, facilitator details, and communication templates.', 'Owners for exemptions, competence decisions, policy interpretation, and escalations.'],
    workflow: [{ title: 'Confirm assignments', detail: 'Match current workers and roles to the approved training matrix and identify missing prerequisites.' }, { title: 'Coordinate participation', detail: 'Issue approved instructions, schedule sessions, monitor access, and record attendance or platform status.' }, { title: 'Reconcile evidence', detail: 'Match completion evidence to the assignment, flag exceptions, and prepare the next renewal view.' }],
    deliverables: ['Current training assignment and renewal register.', 'Session schedule, attendance record, and access-issue queue.', 'Completion evidence index and overdue report.'],
    boundaries: ['The specialist does not design regulated curriculum, grant exemptions, or certify that a person is competent.', 'Completion status is based on approved evidence rather than informal confirmation.'],
    qualityControls: ['Roster-to-training-matrix reconciliation.', 'Course-version, due-date, learner-identity, and evidence checks.', 'Regular review of overdue and soon-to-expire items.'],
    humanDecisions: ['Subject owners approve curriculum and decide competence or remediation.', 'Managers and HR approve exemptions, extensions, and consequences.'],
    startingScenarios: ['Required training is tracked in several spreadsheets.', 'New hires need role-specific assignments after onboarding.', 'Renewals are approaching but current completion evidence is incomplete.'],
    faqs: [{ question: 'Can the coordinator create training content?', answer: 'Content production can be scoped separately, but required or regulated curriculum must be approved by the accountable subject owner.' }, { question: 'Does attendance prove competence?', answer: 'No. Attendance and completion are administrative records. Competence decisions require the assessment your owner approves.' }, { question: 'Can reminders be automated?', answer: 'They can follow approved system rules, with an exception queue for delivery or access failures.' }],
    relatedServices: ['new-hire-onboarding', 'performance-review-coordination', 'workforce-reporting'],
    heroImage: '/blog-thumbnails/training-workflow.svg',
    heroAlt: 'Illustration of training assignments, attendance, and completion evidence',
  },
  {
    slug: 'offboarding-administration',
    title: 'Offboarding Administration',
    summary: 'Coordinate approved departure tasks, record closure, access-removal evidence, and asset handoffs with clear decision ownership.',
    audience: ['People and IT teams managing employee or contractor departures across systems.', 'Operations leaders who need time-bound offboarding evidence and unresolved-item visibility.'],
    problem: ['Departures create risk when access, equipment, documents, final records, and customer handoffs close on different timelines.', 'A unified checklist makes each owner and completion signal visible while sensitive decisions remain internal.'],
    scope: ['Create the departure checklist from the authorized notice and worker profile.', 'Coordinate record, access, asset, knowledge, and communication tasks with designated owners.', 'Maintain completion evidence and escalate open items by risk and due time.'],
    inputs: ['Authorized departure instruction, effective time, role, and manager.', 'System inventory, asset register, record requirements, and approved communication plan.', 'Owners for access, final pay, legal documents, employee relations, and business continuity.'],
    workflow: [{ title: 'Open the controlled checklist', detail: 'Verify authority, timing, confidentiality level, owner list, and tasks before any departure communication or access action.' }, { title: 'Coordinate the handoffs', detail: 'Track approved notifications, knowledge transfer, assets, account requests, and required documents.' }, { title: 'Verify closure', detail: 'Collect evidence from each owner, isolate exceptions, and provide a final open-item report to HR and the manager.' }],
    deliverables: ['Time-bound offboarding checklist with named owners.', 'Access, asset, document, and handoff evidence register.', 'Closure summary and unresolved-risk queue.'],
    boundaries: ['The specialist does not decide termination, deliver sensitive employment decisions, calculate final pay, or independently disable access.', 'Only authorized owners execute legal, payroll, employee-relations, and security actions.'],
    qualityControls: ['Authority and effective-time confirmation before activation.', 'System and asset inventory reconciliation against the worker profile.', 'Evidence check for each closed item and immediate escalation of critical gaps.'],
    humanDecisions: ['Leadership and HR own the departure decision, messaging, legal steps, and employee relations.', 'IT, security, payroll, and managers approve and execute actions in their systems.'],
    startingScenarios: ['Departure tasks are split across HR, IT, finance, and a manager with no shared status.', 'Remote equipment and account closure need documented follow-through.', 'A recurring contractor offboarding process needs the same controls as employee exits.'],
    faqs: [{ question: 'Can the coordinator deactivate accounts?', answer: 'The coordinator tracks authorized requests and evidence. Designated system owners should execute access changes.' }, { question: 'Can urgent departures be supported?', answer: 'Yes, using a preapproved confidential path with exact authority, timing, and escalation contacts.' }, { question: 'When is an offboarding record complete?', answer: 'When required owners provide the agreed evidence or explicitly accept and document an unresolved exception.' }],
    relatedServices: ['employee-records-management', 'employment-document-administration', 'workforce-reporting'],
    heroImage: '/blog-thumbnails/offboarding-handoff.svg',
    heroAlt: 'Illustration of offboarding access, asset, and record handoffs',
  },
  {
    slug: 'workforce-reporting',
    title: 'Workforce Reporting',
    summary: 'Prepare repeatable workforce reports from defined sources, denominators, review rules, and a visible data-quality exception queue.',
    audience: ['People and operations leaders who need dependable recurring workforce views.', 'Teams combining roster, attendance, hiring, leave, training, or turnover records from several systems.'],
    problem: ['Workforce metrics become misleading when dates, populations, definitions, and correction history change between reports.', 'A governed reporting workflow makes each number traceable to an approved source and definition.'],
    scope: ['Maintain report definitions, source map, schedule, and owner list.', 'Extract or receive authorized data, normalize fields, and prepare recurring views.', 'Reconcile populations and totals, document exceptions, and preserve version history.'],
    inputs: ['Approved metric definitions, reporting period, population, and filters.', 'Authorized source access or controlled exports.', 'Prior reports, expected control totals, distribution list, and reviewers.'],
    workflow: [{ title: 'Lock the reporting basis', detail: 'Confirm cutoff, population, definitions, source versions, and any approved changes from the prior period.' }, { title: 'Prepare and reconcile', detail: 'Combine authorized data, apply documented transformations, and compare counts, totals, and exceptions.' }, { title: 'Review and publish', detail: 'Send a review copy with caveats and unresolved items, then distribute only the approved final version.' }],
    deliverables: ['Recurring workforce report in the approved format.', 'Definition and source note for each reported measure.', 'Data-quality, reconciliation, and change log.'],
    boundaries: ['The specialist does not invent missing values, change definitions silently, or make employment decisions from the report.', 'Interpretation beyond the documented measure remains with accountable leaders and advisers.'],
    qualityControls: ['Population, date, denominator, duplicate, and null-value checks.', 'Comparison against source totals and prior-period movement.', 'Named reviewer approval before distribution to the authorized audience.'],
    humanDecisions: ['Leaders approve definitions, access, material corrections, interpretation, and resulting action.', 'HR, finance, legal, or analytics owners resolve sensitive and regulated questions.'],
    startingScenarios: ['Monthly headcount differs across reports because teams use different cutoff dates.', 'Leaders need a repeatable view but source exports require manual reconciliation.', 'A reporting pack needs clear definitions and caveats before wider distribution.'],
    faqs: [{ question: 'Can the service define our workforce metrics?', answer: 'It can document options and implement approved definitions. Accountable leaders must select definitions and intended use.' }, { question: 'Can dashboards be updated?', answer: 'Yes, when the data source, transformations, access, refresh timing, and review step are documented.' }, { question: 'How are uncertain values shown?', answer: 'They remain in an exception queue or are clearly caveated. They are not silently estimated.' }],
    relatedServices: ['employee-records-management', 'payroll-input-preparation', 'performance-review-coordination'],
    heroImage: '/blog-thumbnails/reporting-calendar.svg',
    heroAlt: 'Illustration of a workforce reporting calendar and quality checks',
  },
] as const;

export function validateServiceContent(records: readonly ServiceContent[]): Readonly<Record<string, ServiceContent>> {
  const serviceSlugs = new Set(services.map(service => service.slug));
  const seen = new Set<string>();
  const heroes = new Set<string>();
  const result: Record<string, ServiceContent> = {};

  if (records.length !== services.length) throw new Error(`Expected ${services.length} service content records, received ${records.length}`);
  for (const record of records) {
    if (!serviceSlugs.has(record.slug as (typeof services)[number]['slug'])) throw new Error(`Unknown service slug: ${record.slug}`);
    if (seen.has(record.slug)) throw new Error(`Duplicate service content: ${record.slug}`);
    if (!record.heroImage.startsWith('/') || heroes.has(record.heroImage)) throw new Error(`Hero image must be a unique local path: ${record.slug}`);
    if (!record.heroAlt.trim() || !record.summary.trim()) throw new Error(`Missing hero copy: ${record.slug}`);
    for (const field of ['audience', 'problem', 'scope', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'humanDecisions', 'startingScenarios', 'faqs', 'relatedServices'] as const) {
      if (record[field].length < 2) throw new Error(`${record.slug} needs at least two ${field} entries`);
    }
    for (const related of record.relatedServices) {
      if (!serviceSlugs.has(related as (typeof services)[number]['slug']) || related === record.slug) throw new Error(`Invalid related service ${related} for ${record.slug}`);
    }
    seen.add(record.slug);
    heroes.add(record.heroImage);
    result[record.slug] = Object.freeze(record);
  }
  for (const service of services) if (!seen.has(service.slug)) throw new Error(`Missing service content: ${service.slug}`);
  return Object.freeze(result);
}

export const serviceContent = validateServiceContent(contentRecords);
