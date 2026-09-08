export type Sep8BlogPost={slug:string;title:string;excerpt:string;minutes:number;publishedDate:'2026-09-08';image:string;body:string[]};

const post=(slug:string,title:string,excerpt:string,image:string,body:string[]):Sep8BlogPost=>({slug,title,excerpt,minutes:8,publishedDate:'2026-09-08',image,body});

export const september8BlogBatch:Sep8BlogPost[]=[
post('philippines-candidate-interview-no-show-follow-up','What to Do After a Candidate Misses an Interview','Use a calm follow-up routine that protects the schedule without making assumptions about the candidate.','/blog-thumbnails/interview-scheduling.svg',[
'A missed interview leaves the recruiter with a small but awkward decision: wait, reschedule, or close the file. Write the rule before the calendar gets busy. Record the scheduled time, timezone, meeting link, invitation status, reminder delivery, and interviewer attendance in the recruiting system.',
'Send one approved follow-up through the candidate\'s agreed channel. State that the interview was missed, offer the available next step, and give a clear reply deadline. Do not guess why the person was absent or add a judgmental note to the record.',
'The coordinator can check delivery, offer approved time slots, and update the status. The hiring owner decides whether to extend a deadline, make an exception, or end the process. Accommodation requests and sensitive explanations go to the authorized HR contact.',
'Before rescheduling, confirm the interviewer and candidate in the same timezone. Replace the old invitation instead of leaving two live meetings on the calendar. A short internal note should explain which appointment is current.',
'Close the follow-up only after the candidate replies, the approved deadline passes, or the hiring owner gives a decision. Keep the factual event record. Leave speculation out of it.'
]),
post('philippines-employee-address-change-intake','A Safer Intake for Employee Address Changes','Collect the right request details, verify the sender, and route updates to the systems that actually need them.','/blog-thumbnails/employee-request-intake.svg',[
'An address change can touch payroll, benefits, tax records, emergency contacts, and equipment delivery. A general inbox message is not enough evidence to update all of them. Start with the approved request channel and require the employee identifier, effective date, and the fields the system owner has authorized.',
'Verify the request using the company\'s existing identity process. Do not ask an employee to send extra identity documents through ordinary email. The intake record should show verification status without copying private evidence into a broad task board.',
'Map each destination system and its owner. The coordinator may prepare the update and track acknowledgments, while payroll, benefits, or HR owners approve changes within their authority. One successful update does not prove that every dependent system changed.',
'Use a reconciliation check after processing. Compare the effective date and permitted address fields across the required systems, then flag mismatches with the source reference. Do not silently choose which version looks right.',
'Send the employee a plain completion notice that names the systems covered and any open item. Retain the request and approval according to the company\'s record policy.'
]),
post('philippines-leave-request-missing-information-check','How to Handle an Incomplete Leave Request','Ask for missing details without interpreting eligibility or exposing sensitive information.','/blog-thumbnails/leave-tracking.svg',[
'Incomplete leave requests tend to sit in an inbox because nobody knows who should ask the next question. Give the coordinator a checklist drawn from the company\'s approved process: request date, requested period, leave category, contact method, and any required secure submission step.',
'The first reply should name only the missing item and the approved way to provide it. Avoid asking for a diagnosis or other details the process does not require. Sensitive documents belong in the designated HR system, not in chat or a shared spreadsheet.',
'The coordinator records receipt and follows the published reminder schedule. The HR or leave owner interprets policy, determines eligibility, handles accommodations, and approves or denies the request. A complete form is ready for review; it is not an approved leave.',
'If dates conflict with a schedule or payroll cutoff, record the conflict and route it. Do not change the employee\'s requested dates to make the calendar fit.',
'Once the owner decides, update only the systems and audiences named in the process. The completion record should separate the employee notice, schedule update, and payroll handoff so an open step remains visible.'
]),
post('philippines-payroll-correction-evidence-packet','Build a Payroll Correction Packet Before the Cutoff','Put the source, effective period, approval, and prior value in one reviewable record.','/blog-thumbnails/payroll-checks.svg',[
'A payroll correction is hard to review when the original value lives in one export and the explanation lives in chat. Use one packet with the employee identifier, pay period, affected field, prior value, proposed value, source record, reason, and request time.',
'Keep the original evidence unchanged. If a clearer file arrives later, attach it as a new version and note which one supports the proposed correction. This makes the sequence readable without rewriting history.',
'A coordinator can assemble the packet and check required fields. The payroll owner validates the treatment and approves the change; the authorized payment owner retains release authority. Do not let a completeness check become an approval.',
'Late requests need an explicit disposition. Record whether the item will enter the current run, move to the next run, or follow the company\'s exception process. Tell the requester what was decided without promising a payment date that the owner has not confirmed.',
'After processing, compare the approved correction with the payroll result. Record the check and keep unresolved differences open for the next authorized review.'
]),
post('philippines-benefits-enrollment-confirmation-check','Check Benefits Enrollment Without Treating Submission as Completion','Separate form delivery, carrier acceptance, and employee confirmation in the follow-up record.','/blog-thumbnails/benefits-enrollment.svg',[
'An employee can submit a benefits form while the enrollment itself remains incomplete. Track the stages separately: request sent, employee response received, completeness checked, owner approved, provider submitted, provider accepted, and employee notified.',
'Use the benefits system or other approved channel for dependent and personal information. The coordination list needs status, dates, owner, and a secure reference. It should not become a second copy of the enrollment file.',
'The coordinator may check the form against a written completeness list and follow up on missing fields. The plan owner decides eligibility, coverage interpretation, effective dates, exceptions, and corrections.',
'A portal upload receipt proves delivery, not acceptance. Ask the provider or authorized owner for the evidence that closes the enrollment stage. If confirmation is delayed, keep the case open with a named next check.',
'The employee notice should say what has been confirmed and where to raise a discrepancy. Avoid paraphrasing plan terms when the approved plan document or benefits owner should answer the question.'
]),
post('philippines-training-roster-version-control','Stop Old Training Rosters From Coming Back','Use version labels and a single owner so facilitators work from the current attendance list.','/blog-thumbnails/training-workflow.svg',[
'Training rosters often multiply as people download a sheet, add names, and send it back. Give the live roster one controlled location. Show its session date, course version, roster owner, last update time, and status near the top.',
'Changes should arrive through an approved request path. The coordinator checks the employee identifier and session, records who requested the change, and updates the controlled copy. Avoid circulating attachments that can be mistaken for the live list.',
'Freeze the attendance version at the start of the session, but keep late arrivals and approved changes in a separate event log. The training owner decides admission, completion rules, exemptions, and any exception to capacity.',
'After the session, reconcile the frozen roster with attendance evidence and the learning system. A name on the invitation does not prove attendance, and an attendance entry does not prove that every completion requirement was met.',
'Archive the final roster under the retention rule and remove broad sharing links when they are no longer needed. Record later corrections as corrections instead of editing the closed file without a trace.'
]),
post('philippines-offboarding-shared-mailbox-handoff','Who Owns the Shared Mailbox After an Employee Leaves?','Transfer business mail deliberately while keeping private messages and access decisions with authorized owners.','/blog-thumbnails/offboarding-handoff.svg',[
'A shared mailbox can lose its working owner even when the departing employee\'s personal account is removed on time. List every shared mailbox, queue, alias, routing rule, and delegated permission tied to the role before the departure date.',
'For each item, name the receiving owner and the business reason for continued access. Security or system administrators approve permission changes. The coordinator can maintain the inventory and collect confirmation, but should not grant access or read messages outside the approved scope.',
'Decide how open work will move. Use assigned conversations or a handoff queue when the tool supports them. Avoid forwarding an entire mailbox to a personal address or copying private employee material into a team folder.',
'Test the new owner\'s access and the removal of the departing account. Check automated routing and out-of-office text separately because they can continue after the visible permission changes.',
'Close the handoff with direct evidence for each mailbox and an unresolved-item list. If ownership is unclear, leave access unchanged only when the authorized security owner makes and records that decision.'
]),
post('philippines-performance-review-reminder-calendar','A Performance Review Reminder Calendar That Respects Ownership','Schedule prompts around real dependencies while keeping ratings and feedback with the manager.','/blog-thumbnails/performance-review.svg',[
'A review deadline is made of smaller deadlines: employee input, manager evidence, calibration, final writing, conversation, and acknowledgment. Put those dependencies on one calendar with a named owner for each step.',
'Reminders should say what is due, where it belongs, and who can answer a process question. They should not reveal ratings in a general channel or pressure a manager to choose a particular outcome.',
'The coordinator can monitor completion, check required fields, and reschedule within the approved window. Managers own feedback and ratings. HR owners handle policy interpretation, sensitive cases, and employment actions.',
'Track blocked and late as different states. A manager waiting for approved data needs a source owner and next check. A missed deadline needs the escalation set by the review process.',
'After the cycle, compare planned dates with actual handoffs. Change the next calendar when a dependency repeatedly takes longer, but keep any policy change with the authorized owner.'
]),
post('philippines-employee-record-duplicate-file-review','A Practical Review for Duplicate Employee Files','Compare identifiers, dates, and provenance before anyone merges or deletes a record.','/blog-thumbnails/file-naming.svg',[
'Two files with similar names may be duplicates, revisions, or records for different people. Begin with stable employee identifiers, document type, effective date, source, upload time, and system location. File names alone are weak evidence.',
'Place suspected duplicates in a review queue without changing either source record. The coordinator can compare approved fields and prepare a difference note. The record owner decides whether to merge, retain, supersede, or remove anything.',
'Pay attention to signatures, attachments, annotations, and access history. A newer timestamp does not always mean a newer document, especially after a migration or bulk upload.',
'If two records conflict, route the discrepancy to the owner and preserve both versions until a decision is recorded. Do not select the more convenient value just to clear the queue.',
'The closed review should show what was compared, the owner\'s decision, and the retained record reference. Follow the retention and legal hold rules before deletion.'
]),
post('philippines-workforce-report-late-source-log','Keep Late Source Data Visible in Workforce Reporting','Show which inputs missed the reporting cutoff and how the owner treated them.','/blog-thumbnails/reporting-calendar.svg',[
'A workforce report can look final even when one department sent data after the cutoff. Add a late-source log with the source, expected time, actual receipt time, reporting period, affected metric, and owner decision.',
'Use the published cutoff and timezone. Do not move the timestamp or quietly include a late file. The workforce owner decides whether to hold the report, publish with a limitation, or include the input under an approved exception.',
'The coordinator can reconcile file versions and calculate the affected rows under the approved definition. Metric definitions, exclusions, forecasts, and interpretation stay with the report owner.',
'If a corrected source arrives after publication, preserve the released report and label any replacement with a new version and reason. Readers should be able to tell which numbers were available at each release.',
'Review the log for recurring delays by source. The useful outcome is a clearer handoff and backup owner, not a hidden adjustment that makes every delivery appear on time.'
]),
post('philippines-hr-inbox-duplicate-request-linking','Link Duplicate HR Requests Without Losing the Conversation','Join related tickets carefully so employees receive one clear response and sensitive details stay contained.','/blog-thumbnails/hr-inbox-triage.svg',[
'Employees sometimes email twice, submit a form, and ask a manager about the same issue. Treat those messages as possible duplicates, not automatic duplicates. Compare the verified sender, subject, requested action, relevant dates, and secure case reference.',
'Choose one primary case and link the others when the match is confirmed. Preserve channel and receipt times. Do not paste sensitive content from a restricted case into a broadly visible ticket simply to make the history easier to read.',
'The coordinator can tag, link, and acknowledge requests under written rules. The HR owner decides case access, substantive responses, policy interpretation, and any merge when identities or issues are uncertain.',
'Send one update that names the primary reference and next step. Stop automated reminders on linked duplicates so the employee does not receive several conflicting messages.',
'Before closing the extra cases, confirm that their attachments and requested actions are represented in the primary record. A shared topic does not mean every request asks for the same result.'
]),
post('philippines-new-hire-first-week-question-log','Turn First-Week Questions Into Better Onboarding Instructions','Capture repeated questions, answer them through the right owner, and repair the source guide.','/blog-thumbnails/first-30-days.svg',[
'A new hire\'s questions are useful evidence about the onboarding material. Keep a small log with the question, task, time asked, source guide used, responder, answer status, and any access or policy dependency.',
'Answer routine process questions from the approved guide. Route policy, security, customer, payment, and employment questions to the named owner. The coordinator should not invent an answer because the new hire is waiting.',
'Link the final answer to its source. If the answer exists but was hard to find, fix navigation or wording. If it does not exist, the process owner should approve a guide change before the coordinator publishes it.',
'Keep personal performance feedback and private employee matters outside the general question log. The log is for improving the shared route, not building a shadow personnel file.',
'Review the log after the first week and again after the first month. Retire resolved entries only after the updated instruction has been tested by someone who did not write it.'
])
];
