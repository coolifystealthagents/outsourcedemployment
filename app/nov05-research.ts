export const november05ResearchBatch = [
 {
  "slug": "how-often-do-employment-records-lack-a-source-reference",
  "title": "How often do employment records lack a source reference?",
  "excerpt": "A bounded method for measuring whether employment records point to the document or confirmation that supports the recorded value.",
  "publishedDate": "2026-11-05",
  "publishedAt": "2026-11-05",
  "modifiedDate": "2026-11-05",
  "category": "Research",
  "image": "/thumbnails/november-05/outsourcedemployment-how-often-do-employment-records-lack-a-source-reference.png",
  "sources": [
   {
    "name": "U.S. Department of Labor — Fair Labor Standards Act",
    "url": "https://www.dol.gov/agencies/whd/flsa"
   },
   {
    "name": "U.S. Department of Labor — New Hire Reporting",
    "url": "https://www.dol.gov/agencies/whd/new-hire-reporting"
   },
   {
    "name": "U.S. Equal Employment Opportunity Commission",
    "url": "https://www.eeoc.gov/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   }
  ],
  "body": [
   "## Question and scope",
   "This study asks how often an employment record contains a value without a source reference that another reviewer can check. It examines identity, pay, schedule, leave, and status fields at a defined review point. The scope is one employer or one defined employee group during a fixed period. The result describes documentary traceability in that setting and is not an industry benchmark.",
   "The unit is one record at the review point. If a record contains several fields, the study scores each field separately when the source can differ. Include records that were corrected after the review, and keep the original rating. Exclude test records and duplicate profiles, and record the reason. Report the number of employees and the number of fields separately.",
   "## Method and evidence standard",
   "Define what counts as a source before opening any record. A signed form, an approved request, a system confirmation, or a dated manager note may qualify if it is linked to the field. A general reference to the personnel file is not enough when the reviewer cannot identify the document. A copied value from an unknown spreadsheet is not a source.",
   "Sample from a frozen employee list using a documented method. Include records across roles, locations, and recent changes. Two reviewers should calibrate on a small set and resolve disagreements about whether a source is specific enough. Preserve the initial rating and the adjudication. The study measures whether a source is present and identifiable, not whether the underlying value is correct.",
   "## Measures, findings, and interpretation",
   "Report the share of fields with a complete source, a partial source, or no source. Show the result by field type and by whether the record changed during the period. Include the number of records with at least one unsourced pay or status field. A record-level percentage can hide a pattern in which the most sensitive fields are the least traceable.",
   "Inspect the records behind the largest gaps before assigning a cause. A cluster in pay fields may reflect an import from a payroll system that does not carry a source reference. A cluster in schedule fields may reflect verbal agreements that were never written down. The study cannot show whether the recorded value was accurate, and it should not be used to compare individual employees.",
   "## Limitations and practical next step",
   "The review sees the record and the linked source, not the conversation that produced the value. A source may exist outside the system and still be valid, and a linked document may be outdated. The study also depends on the sample and the reviewer calibration. It does not establish compliance with a recordkeeping rule or a retention requirement.",
   "Choose one change based on the most common gap, such as a required source field, a link to the approved document, or a review before a change is saved. Record the owner, the effective date, and the measure. Recheck the same fields with the next cohort. Keep the sample and the decision log with the employment record process."
  ]
 },
 {
  "slug": "measuring-timesheet-approval-latency-across-shifts",
  "title": "Measuring timesheet approval latency across shifts",
  "excerpt": "A stage-level method for measuring how long timesheets wait for approval and where the wait accumulates across shifts.",
  "publishedDate": "2026-11-05",
  "publishedAt": "2026-11-05",
  "modifiedDate": "2026-11-05",
  "category": "Research",
  "image": "/thumbnails/november-05/outsourcedemployment-measuring-timesheet-approval-latency-across-shifts.png",
  "sources": [
   {
    "name": "U.S. Department of Labor — Fair Labor Standards Act",
    "url": "https://www.dol.gov/agencies/whd/flsa"
   },
   {
    "name": "U.S. Department of Labor — New Hire Reporting",
    "url": "https://www.dol.gov/agencies/whd/new-hire-reporting"
   },
   {
    "name": "U.S. Equal Employment Opportunity Commission",
    "url": "https://www.eeoc.gov/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   }
  ],
  "body": [
   "## Question and scope",
   "This study asks how long a submitted timesheet waits before an authorized manager approves it. It separates submission, manager review, correction, and final approval. The scope is one employer or one defined shift group during a fixed period. The result describes that group and should not be presented as an industry service level.",
   "The unit is one timesheet for one employee and one pay period. If a timesheet is returned for correction, keep the original submission and add the correction segment. Exclude test entries and duplicate submissions, and record the reason. Report the number of timesheets and the number of approval events separately.",
   "## Method and evidence standard",
   "Define each stage and its start and end event before extracting data. Submission starts when the employee confirms the timesheet. Manager review ends when an authorized approver records a decision. Correction starts when the timesheet is returned and ends when it is resubmitted. Final approval ends when the system records the approved status.",
   "Use system timestamps where possible and mark estimates separately. If a manager approves a batch at the end of the week, record the batch event and the individual timesheets it covered. Sample across shifts, roles, and submission days. Two reviewers should compare a small set of timelines and resolve differences in stage boundaries. The study measures elapsed time, not the quality of the hours reported.",
   "## Measures, findings, and interpretation",
   "Report the median and range for each stage, the share of timesheets returned for correction, and the number approved after the payroll cut-off. Show the result by shift, role, and submission day. A long wait before review is different from a long correction cycle, and the report should keep them separate. Include the number of timesheets with missing timestamps.",
   "Inspect the timesheets behind the longest waits before assigning a cause. A cluster on one shift may reflect a manager's schedule, while a cluster across shifts may reflect an approval rule that sends every timesheet to one person. A cluster of corrections may reflect an unclear entry rule. The study cannot show whether the recorded hours were accurate, and it should not be used to rank individual managers without context.",
   "## Limitations and practical next step",
   "The timestamps reflect the timekeeping and approval systems and may not capture reminders sent through chat or email. The study also cannot observe staffing levels, absence, or the complexity of the work. A stable median can still hide a small group of timesheets that wait far longer. Report the tail and the missing data with the central measure.",
   "Choose one change, such as a named backup approver, a daily review window, or a clearer correction reason. Record the owner and the start date, then recheck the same stage with the next pay period. Keep the before-and-after sample. The most useful result is a specific control to test, not a general claim that approvals are fast or slow."
  ]
 },
 {
  "slug": "can-a-payroll-change-be-reproduced-from-its-evidence",
  "title": "Can a payroll change be reproduced from its evidence?",
  "excerpt": "A documentary test of whether a payroll change can be reconstructed from the request, approval, source, and confirmed result.",
  "publishedDate": "2026-11-05",
  "publishedAt": "2026-11-05",
  "modifiedDate": "2026-11-05",
  "category": "Research",
  "image": "/thumbnails/november-05/outsourcedemployment-can-a-payroll-change-be-reproduced-from-its-evidence.png",
  "sources": [
   {
    "name": "U.S. Department of Labor — Fair Labor Standards Act",
    "url": "https://www.dol.gov/agencies/whd/flsa"
   },
   {
    "name": "U.S. Department of Labor — New Hire Reporting",
    "url": "https://www.dol.gov/agencies/whd/new-hire-reporting"
   },
   {
    "name": "U.S. Equal Employment Opportunity Commission",
    "url": "https://www.eeoc.gov/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   }
  ],
  "body": [
   "## Question and scope",
   "This study asks whether a reviewer can reconstruct a completed payroll change from the request, the approval, the source, and the confirmed result. It examines the effective date, the old and new values, the approver, and the downstream confirmation. The scope is one pay period or one defined change type. The result is a traceability finding, not a payroll audit opinion.",
   "The unit is one payroll change for one employee. If a change affects several fields, record each field separately when the approval or source can differ. Include changes that were reversed or corrected. Exclude test payrolls, and record the reason. Report the number of changes and the number of employees separately.",
   "## Method and evidence standard",
   "Define the required evidence before sampling: the request, the source, the required approval, the effective date, the value change, and the confirmation that the change appeared in the payroll register. A request alone is not a completed change. A register entry without the approval is partial. Record the version of each document and the date it was used.",
   "Sample across change types, departments, and preparers. Include changes that were processed late and changes that required a retroactive adjustment. Two reviewers should calibrate on a small set and discuss disagreements about whether a confirmation is specific enough. Preserve the initial rating and the adjudication. The study measures whether the change can be reconstructed, not whether the amount was correct.",
   "## Measures, findings, and interpretation",
   "Report the share of changes with a complete request, source, approval, effective date, value record, and confirmation. Show the result by change type and by whether the change was late. Include the number of changes where the register value differed from the request and the number with no confirmation. Use counts and rates together so a small group is not overinterpreted.",
   "Inspect the changes behind the largest gaps before assigning a cause. A cluster of missing confirmations may mean the pay run is closed before the check happens. A cluster of missing sources may mean the request form accepts free text without a document. The study cannot show whether the change complied with tax or employment law, and it should not be used to compare individual payroll specialists.",
   "## Limitations and practical next step",
   "The review sees the documents and the register, not the conversations or the system state at the time. A change may be correct even when the evidence is incomplete, and a complete file may contain a value that was applied to the wrong employee. The study also depends on the sample and the version of the register. Note any system change or reprocessing during the period.",
   "Choose one control to test, such as a required source link, an approval step before data entry, or a post-run confirmation check. Record the owner and the date, then recheck the same measure on the next pay period. Keep the sample and the decision log. A reproducible change record helps payroll, the employee, and a later reviewer answer the same questions."
  ]
 },
 {
  "slug": "where-does-leave-request-handling-wait-for-a-decision",
  "title": "Where does leave request handling wait for a decision?",
  "excerpt": "A stage-level method for locating wait time between a leave request, its approval, and the payroll or coverage handoff.",
  "publishedDate": "2026-11-05",
  "publishedAt": "2026-11-05",
  "modifiedDate": "2026-11-05",
  "category": "Research",
  "image": "/thumbnails/november-05/outsourcedemployment-where-does-leave-request-handling-wait-for-a-decision.png",
  "sources": [
   {
    "name": "U.S. Department of Labor — Fair Labor Standards Act",
    "url": "https://www.dol.gov/agencies/whd/flsa"
   },
   {
    "name": "U.S. Department of Labor — New Hire Reporting",
    "url": "https://www.dol.gov/agencies/whd/new-hire-reporting"
   },
   {
    "name": "U.S. Equal Employment Opportunity Commission",
    "url": "https://www.eeoc.gov/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   }
  ],
  "body": [
   "## Question and scope",
   "This study asks where time is spent between a leave request and the first recorded decision. It separates receipt, missing-information follow-up, manager review, payroll or benefits review, and the coverage handoff. The scope is one employer or one defined leave type during a fixed period. The result describes that queue and is not a benchmark.",
   "The unit is one leave request followed to the approval or denial. If a request is withdrawn and resubmitted, keep the original and add the new segment. Exclude duplicates and test requests, and record the reason. Report the number of requests and the number of stages observed. A request that waits for the employee is different from one that waits for an internal approver.",
   "## Method and evidence standard",
   "Define each stage and its start and end event before extracting data. Receipt starts when the request enters the approved channel. Missing-information follow-up starts when the request is returned and ends when the employee responds. Manager review ends when the approver records a decision. Payroll or benefits review ends when the pay treatment is confirmed. The coverage handoff ends when the manager names the person who will cover urgent work.",
   "Use system timestamps where possible and mark estimates separately. If a request was approved verbally and recorded later, note the gap. Sample across leave types, teams, and request dates. Two reviewers should compare a small set of timelines and resolve differences in stage boundaries. The study measures elapsed time, not whether the leave decision was fair or consistent with policy.",
   "## Measures, findings, and interpretation",
   "Report the median and range for each stage, the share of requests with missing information, and the number approved after the requested start date. Show the result by leave type and team. A long wait for employee information is different from a long wait for manager review, and the report should keep them separate. Include the number of requests with no named coverage owner.",
   "Inspect the requests behind the longest waits before assigning a cause. A cluster in manager review may reflect an approver list that is out of date, while a cluster in payroll review may reflect an unclear pay treatment. A cluster of late approvals may reflect a request that arrived after the cut-off. The study cannot show whether the eventual decision was correct, and it should not be used to rank individual approvers.",
   "## Limitations and practical next step",
   "The timestamps reflect the leave system and may not capture conversations or offline approvals. The study also cannot observe staffing levels or the urgency of each request. A stable median can still hide a small group of requests that waited far longer. Report the tail and the missing data with the central measure. Local law, contracts, and company policy may impose requirements the study does not test.",
   "Choose one stage for a bounded improvement, such as a complete request form, a named backup approver, or a coverage handoff before approval. Record the owner and the start date, then recheck the same stage with the next cohort. Keep the before-and-after sample. The most useful result is a specific next test, not a general claim that leave handling is fast or slow."
  ]
 },
 {
  "slug": "testing-whether-employment-handoffs-preserve-the-approval-trail",
  "title": "Testing whether employment handoffs preserve the approval trail",
  "excerpt": "A method for checking whether an employment handoff keeps the approval, the source, and the next owner connected.",
  "publishedDate": "2026-11-05",
  "publishedAt": "2026-11-05",
  "modifiedDate": "2026-11-05",
  "category": "Research",
  "image": "/thumbnails/november-05/outsourcedemployment-testing-whether-employment-handoffs-preserve-the-approval-trail.png",
  "sources": [
   {
    "name": "U.S. Department of Labor — Fair Labor Standards Act",
    "url": "https://www.dol.gov/agencies/whd/flsa"
   },
   {
    "name": "U.S. Department of Labor — New Hire Reporting",
    "url": "https://www.dol.gov/agencies/whd/new-hire-reporting"
   },
   {
    "name": "U.S. Equal Employment Opportunity Commission",
    "url": "https://www.eeoc.gov/"
   },
   {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
   }
  ],
  "body": [
   "## Question and scope",
   "This study asks whether a completed employment handoff lets a reviewer connect the action to the approval that authorized it and the person who now owns the next step. It examines the source, the approval, the effective date, and the handoff note. The scope is one handoff type or one employment operations queue during a fixed period. The result is an evidence-quality finding, not a legal conclusion.",
   "The unit is one handoff event. If a task moves through several teams, record each event separately. Include handoffs that were returned or corrected. Exclude tasks that were cancelled before any transfer, and record the reason. Report the number of tasks and the number of handoff events separately so a single task does not dominate the result.",
   "## Method and evidence standard",
   "Define what counts as an approval before sampling. A named approver and a date are the minimum. A shared inbox or a general note that the manager agreed is not enough unless the record identifies the person and the scope. Define what counts as a source and what counts as an acceptance. A handoff that says done without either is incomplete for this study.",
   "Sample across task types, teams, and shifts. Include handoffs that happened during an approver's absence. Two reviewers should calibrate on a small set and discuss disagreements about whether a delegated approval is sufficient. Preserve the initial rating and the adjudication. The study measures traceability, not whether the underlying employment decision was correct.",
   "## Measures, findings, and interpretation",
   "Report the share of handoffs with a complete source, a named approval, an effective date, and a next owner. Show the result by task type and by whether the handoff crossed a team. Include the number of tasks that were returned because the approval or the next owner was unclear. A high acceptance rate can still hide a small group of tasks with no clear authority.",
   "Inspect the failed handoffs before proposing a cause. A cluster at a shift boundary may mean the note is written at the end of the day with too little context. A cluster at a team boundary may mean the receiving team uses a different approval standard. The study cannot show whether the next owner had the authority or the information to act, and it should not be used to compare individual performance without context.",
   "## Limitations and practical next step",
   "The review sees the written handoff and cannot observe the conversation or the system state. A task may be approved informally even when the record is incomplete, and a complete record may be paired with a weak acceptance. The study also depends on the sample and the reviewer calibration. It does not establish compliance with a payroll, privacy, or employment rule.",
   "Choose one change, such as a required approver field, a source link, or an acceptance step before closure. Record the owner and the date, then recheck the same measure with the next cohort. Keep a short log of returned handoffs and the reason. The aim is a handoff that another authorized person can reconstruct without asking who approved it."
  ]
 }
];
