import { dailyBlogBatch } from './blog/daily-batch';

export const site = {
  "domain": "OutsourcedEmployment.com",
  "slug": "outsourcedemployment",
  "brand": "Outsourced Employment",
  "primary": "outsourced employment",
  "audience": "leaders comparing employment models for Filipino talent",
  "angle": "employment models, compliance questions, role fit, and onboarding plans",
  "style": "Hiring pipeline magazine",
  "dark": "#2e1065",
  "color": "#9333ea",
  "accent": "#14b8a6",
  "heroImage": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "alt": "remote employees joining virtual onboarding meeting",
  "badge": "Employment model"
} as const;

export const services = [
  { slug: "candidate-sourcing-coordination", title: "Candidate Sourcing Coordination", desc: "Filipino employment administration specialists can handle candidate sourcing coordination with documented workflows, approval limits, and owner review." },
  { slug: "employment-document-administration", title: "Employment Document Administration", desc: "Filipino employment administration specialists can handle employment document administration with documented workflows, approval limits, and owner review." },
  { slug: "new-hire-onboarding", title: "New Hire Onboarding", desc: "Filipino employment administration specialists can handle new hire onboarding with documented workflows, approval limits, and owner review." },
  { slug: "employee-records-management", title: "Employee Records Management", desc: "Filipino employment administration specialists can handle employee records management with documented workflows, approval limits, and owner review." },
  { slug: "schedule-administration", title: "Schedule Administration", desc: "Filipino employment administration specialists can handle schedule administration with documented workflows, approval limits, and owner review." },
  { slug: "leave-tracking-support", title: "Leave Tracking Support", desc: "Filipino employment administration specialists can handle leave tracking support with documented workflows, approval limits, and owner review." },
  { slug: "payroll-input-preparation", title: "Payroll Input Preparation", desc: "Filipino employment administration specialists can handle payroll input preparation with documented workflows, approval limits, and owner review." },
  { slug: "benefits-administration-support", title: "Benefits Administration Support", desc: "Filipino employment administration specialists can handle benefits administration support with documented workflows, approval limits, and owner review." },
  { slug: "performance-review-coordination", title: "Performance Review Coordination", desc: "Filipino employment administration specialists can handle performance review coordination with documented workflows, approval limits, and owner review." },
  { slug: "training-coordination", title: "Training Coordination", desc: "Filipino employment administration specialists can handle training coordination with documented workflows, approval limits, and owner review." },
  { slug: "offboarding-administration", title: "Offboarding Administration", desc: "Filipino employment administration specialists can handle offboarding administration with documented workflows, approval limits, and owner review." },
  { slug: "workforce-reporting", title: "Workforce Reporting", desc: "Filipino employment administration specialists can handle workforce reporting with documented workflows, approval limits, and owner review." },
] as const;

export const blogPosts = [
  {
    "slug": "philippines-hr-records-assistant-access-guide",
    "title": "Philippines HR Records Assistant: A Safe Access Guide",
    "excerpt": "Plan what a Filipino HR records assistant can prepare, what the manager keeps, and how access is opened and removed.",
    "minutes": 11,
    "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  { "slug": "philippines-outsourced-employment-cost-planning", "title": "Philippines Outsourced Employment Cost Planning", "excerpt": "Build a clear cost model for Philippines-based support before comparing providers or employment models.", "minutes": 9, "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-virtual-assistant-role-scorecard", "title": "Philippines Virtual Assistant Role Scorecard", "excerpt": "Turn recurring work into a practical scorecard that a manager can review during the first month.", "minutes": 8, "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourced-employment-compliance-questions", "title": "Philippines Outsourced Employment: Compliance Questions", "excerpt": "Questions to ask about contracts, payroll ownership, worker classification, and local employment support.", "minutes": 10, "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-customer-service-handoff-plan", "title": "Philippines Customer Service Handoff Plan", "excerpt": "Design a customer-service lane with scripts, quality checks, escalation rules, and manager ownership.", "minutes": 9, "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-operations-assistant-first-week", "title": "Philippines Operations Assistant: The First Week", "excerpt": "A focused first-week plan for tools, examples, review times, and safe delegation.", "minutes": 8, "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-remote-staff-access-checklist", "title": "Philippines Remote Staff Access Checklist", "excerpt": "Set up named accounts, least privilege, review dates, and clean offboarding for remote staff.", "minutes": 8, "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-employment-provider-comparison", "title": "How to Compare Philippines Employment Providers", "excerpt": "Compare providers on management, replacement, records, security, and the work your team retains.", "minutes": 10, "image": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourcing-onboarding-checklist", "title": "Philippines Outsourcing Onboarding Checklist", "excerpt": "Prepare the role brief, accounts, examples, review cadence, and escalation path before day one.", "minutes": 9, "image": "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-admin-assistant-work-sample", "title": "Philippines Admin Assistant Work Sample", "excerpt": "Use a realistic sample to measure accuracy, written follow-up, judgment, and stop rules.", "minutes": 8, "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourced-employment-manager-guide", "title": "Manager Guide to Philippines Outsourced Employment", "excerpt": "Keep ownership clear while a Philippines-based specialist handles repeatable daily work.", "minutes": 9, "image": "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-payroll-support-boundaries", "title": "Philippines Payroll Support: Safe Boundaries", "excerpt": "Separate payroll input preparation from approvals, payment authority, and sensitive employee decisions.", "minutes": 9, "image": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-remote-hiring-process", "title": "A Practical Philippines Remote Hiring Process", "excerpt": "Move from task inventory to screening, work sample, access setup, and a measured first month.", "minutes": 10, "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-employment-records-workflow", "title": "Philippines Employment Records Workflow", "excerpt": "Create a repeatable records workflow with naming rules, checks, approvals, and an audit trail.", "minutes": 8, "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourced-team-communication", "title": "Philippines Outsourced Team Communication", "excerpt": "Choose clear channels, response expectations, review notes, and escalation rules for distributed work.", "minutes": 8, "image": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-staffing-replacement-planning", "title": "Philippines Staffing Replacement Planning", "excerpt": "Read replacement promises closely and protect open work, access, and customer continuity.", "minutes": 9, "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourced-employment-security-controls", "title": "Security Controls for Philippines Outsourced Employment", "excerpt": "Match access, authentication, device, incident, and removal controls to the actual role.", "minutes": 10, "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-back-office-support-role-design", "title": "Philippines Back-Office Support Role Design", "excerpt": "Define the queue, tools, quality standard, manager decisions, and measurable outputs.", "minutes": 8, "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-outsourced-employment-weekly-review", "title": "Weekly Review for Philippines Outsourced Employment", "excerpt": "Use a short weekly review to catch quality drift, access issues, workload changes, and open decisions.", "minutes": 7, "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" },
  { "slug": "philippines-hiring-brief-template", "title": "Philippines Hiring Brief Template", "excerpt": "A plain-language brief for tasks, schedule, tools, examples, boundaries, and first-week success.", "minutes": 8, "image": "https://images.unsplash.com/photo-1456324504439-367dee3b3c32?auto=format&fit=crop&w=1200&q=80" },
  ...dailyBlogBatch
] as const;

// The repaired August 10 batch is newest; retain every prior route after it.
export const allBlogPosts = [...dailyBlogBatch.slice(22), ...blogPosts, ...dailyBlogBatch.slice(0, 22)];

export type GuideBasics = {
  overview: readonly string[];
  prepare: readonly string[];
  questions: readonly string[];
};

export const guideBasics: Record<string, GuideBasics> = {
  'outsourced-employment-planning': {
    overview: [
      'Write down the work before you choose an employment model. Name the tasks that repeat, the systems involved, and the person who checks the first outputs. This makes it easier to compare a Philippines staffing provider, an employer of record, and contractor support without relying on sales labels.',
      'Separate routine work from decisions. A Filipino staff member may prepare a report, update a customer record, or draft a reply. Your manager can keep approval over refunds, policy changes, spending, and other calls that carry more risk.',
      'The role brief should also state the schedule, required overlap, access limits, and what happens when work falls outside the written scope. Providers can then explain who employs the worker, who manages attendance, and what support continues after hiring.',
    ],
    prepare: [
      'Two or three real examples of the work',
      'A list of tools and the access each task needs',
      'The decisions that stay with your manager',
      'A first-week review time and named reviewer',
    ],
    questions: [
      'Who employs the worker in the Philippines?',
      'Who handles attendance, leave, payroll, and equipment?',
      'What does our manager need to review each day or week?',
      'What changes if the role grows beyond the first task list?',
    ],
  },
  'outsourced-employment-tasks-to-outsource': {
    overview: [
      'Start with work that already happens often and has a visible right answer. Inbox sorting, CRM updates, report preparation, ticket tagging, and follow-up lists are easier to hand off than work that depends on undocumented judgment.',
      'Choose a small group of tasks that use similar tools and belong to the same workday. A random list of chores creates a hard role to screen and manage. Keep money movement, legal calls, policy exceptions, and sensitive employee decisions with your own manager.',
      'Give the Filipino staff member examples of finished work and a clear escalation line. Review a small sample at first. When the results hold up, add the next related task instead of widening the role all at once.',
    ],
    prepare: [
      'A recent example of each starting task',
      'A short checklist for what counts as complete',
      'The due time or response window',
      'Examples that must go back to a manager',
    ],
    questions: [
      'Which tasks can be checked in a few minutes?',
      'Where does the worker need approval?',
      'Which systems can begin with limited or read-only access?',
      'What related task should be added only after the first work is steady?',
    ],
  },
  'outsourced-employment-onboarding-checklist': {
    overview: [
      'A first week works better when the new Filipino staff member knows what to do, where to find examples, and when to stop and ask. Send the task list and account setup before the start date so the first call is not spent chasing passwords.',
      'Begin with sample work or a narrow live queue. Review outputs at a set time each day and write down corrections where the staff member can reuse them. Spoken feedback disappears quickly; a corrected example is easier to follow tomorrow.',
      'End the week by checking the task list, access, open questions, and missed work. Keep what is working. Fix unclear instructions before adding more responsibility. The provider should know which issues belong with its manager and which belong with yours.',
    ],
    prepare: [
      'Named accounts with only the access needed for week one',
      'SOPs plus examples of good and poor work',
      'Daily review times and a backup reviewer',
      'An escalation list for customers, money, policy, and data',
    ],
    questions: [
      'Who confirms that every account works before day one?',
      'Where will questions and corrections be recorded?',
      'Who handles attendance or equipment problems?',
      'What must be true before the role receives more access?',
    ],
  },
};

export type BlogDetail = {
  takeaways: readonly string[];
  sections: readonly {
    id: string;
    title: string;
    paragraphs: readonly string[];
    questions: readonly string[];
  }[];
  comparison: readonly { check: string; weak: string; useful: string }[];
  quoteScript: string;
  faqs: readonly { question: string; answer: string }[];
  sources: readonly { name: string; url: string; note: string }[];
};

export const blogDetails: Record<string, BlogDetail> = {
  'outsourced-employment-provider-questions': {
    takeaways: [
      'Ask who employs the worker, who manages daily work, and who handles payroll or local employment duties.',
      'Get the replacement, notice, and added-fee terms in writing before you sign.',
      'Start with limited tool access and name the person who approves sensitive work.',
      'Judge the provider by specific examples, not promises about great talent or easy scaling.',
    ],
    sections: [
      {
        id: 'employment-model',
        title: 'Find out what you are buying',
        paragraphs: [
          'The phrase outsourced employment can describe several different setups. A provider may employ the worker and manage payroll. It may only recruit a contractor you manage. It may also sell a managed service where you buy an outcome instead of one person\'s time. Those choices affect your contract, day-to-day control, and who answers when work stops.',
          'Ask for a plain explanation of the parties on the agreement. You should know whose name appears on the worker\'s contract, who sets the schedule, who approves time off, and who handles a complaint. If the sales answer stays vague, ask the provider to draw the relationship on one page.',
          'Worker classification depends on the facts, not the label in a contract. The IRS explains that the degree of control and independence matters when deciding whether someone is an employee or an independent contractor. A provider should explain its model, but your own legal or tax adviser should review the setup for your business and location.',
        ],
        questions: [
          'Who signs the employment or contractor agreement with the worker?',
          'Who handles pay, tax forms, benefits, leave, and local employment requirements?',
          'Who directs daily work, and who handles poor attendance or conduct?',
          'What records will we receive for hours, invoices, and staffing changes?',
        ],
      },
      {
        id: 'screening-management',
        title: 'Test the screening and management plan',
        paragraphs: [
          'A list of interviews and tests tells you very little unless the provider connects them to your role. Ask how it would screen someone who must update your CRM, answer customer email, or prepare a weekly report. A useful answer names the work sample, the reviewer, and the pass standard.',
          'Then ask what happens after placement. Some providers stop at recruiting. Others check attendance, help with coaching, and keep a manager available. Neither model is automatically better, but the price and your own management load should match the service you receive.',
          'Request one example of a first-week plan. It should cover sample work, review times, access limits, and escalation rules. Do not accept a promise that the worker will simply learn your business. The provider should be able to explain who helps when instructions are unclear or quality slips.',
        ],
        questions: [
          'What work sample will you use for this exact role?',
          'Who reviews the sample, and what would cause a candidate to fail?',
          'Who checks attendance and quality after the start date?',
          'What will you need from our manager during the first two weeks?',
        ],
      },
      {
        id: 'access-exit',
        title: 'Plan access, problems, and the exit',
        paragraphs: [
          'Filipino staff may need email, files, customer records, or business software. Ask the Philippines provider how it supports separate user accounts, multifactor authentication, and access removal. CISA recommends strong passwords and multifactor authentication. NIST\'s Cybersecurity Framework gives businesses a way to discuss risk, protection, detection, response, and recovery. These sources do not approve a provider. They give you a better set of controls to ask about.',
          'Keep the first access list narrow. The worker should receive only the systems and records needed for the first tasks. Name someone on your team who can grant, review, and remove access. Shared passwords and broad admin rights make a staffing change much harder than it needs to be.',
          'Read the exit terms before launch. Ask about notice, final invoices, account removal, file return, and replacement support. If a worker leaves, you need a clear owner for open work and customer messages. A replacement promise is useful only when the contract states the conditions, timing, and possible fees.',
        ],
        questions: [
          'Will every worker use a separate account with multifactor authentication?',
          'Who can see our data, and how is access removed after a role ends?',
          'What notice, replacement, and early-exit terms apply?',
          'How will files, open tasks, and customer messages return to us?',
        ],
      },
    ],
    comparison: [
      {
        check: 'Employment model',
        weak: '"We take care of everything."',
        useful: 'Names the legal parties, daily manager, payroll owner, and records you receive.',
      },
      {
        check: 'Candidate screening',
        weak: '"We only send top talent."',
        useful: 'Explains the role-specific work sample, reviewer, and pass standard.',
      },
      {
        check: 'Data access',
        weak: '"Our systems are secure."',
        useful: 'Describes separate accounts, MFA, permission limits, access reviews, and removal.',
      },
      {
        check: 'Replacement',
        weak: '"We will find someone else."',
        useful: 'States notice rules, fees, timing, handoff ownership, and what happens to open work.',
      },
    ],
    quoteScript: '"Before you send a proposal, please show us who employs and manages the worker, what you will test for this role, what support continues after the start date, and the full notice and replacement terms. We also need your process for separate accounts, multifactor authentication, permission reviews, and access removal. Please mark any service or fee that is optional."',
    faqs: [
      {
        question: 'Should I ask whether the worker is an employee or contractor?',
        answer: 'Yes. Ask who contracts with the worker and who controls the work. The label alone does not settle classification, so use a qualified adviser for legal or tax advice about your setup.',
      },
      {
        question: 'What provider fees should I check?',
        answer: 'Ask about setup, recruiting, equipment, software, overtime, currency, replacement, notice, and early-exit charges. Request one sample invoice based on the role you plan to hire.',
      },
      {
        question: 'How can I check quality before a long contract?',
        answer: 'Use a role-specific work sample, agree on a short first task list, and review real outputs during the first weeks. Put the review owner and the fix-or-escalate rule in the launch plan.',
      },
      {
        question: 'What security proof should a provider give me?',
        answer: 'Ask for the controls that apply to your work: separate accounts, MFA, permission limits, device rules, incident contacts, and access removal. Match the proof request to the data and systems the worker will use.',
      },
    ],
    sources: [
      {
        name: 'IRS: Independent Contractor Defined',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined',
        note: 'Explains how control and independence affect federal worker classification in the United States.',
      },
      {
        name: 'NIST Cybersecurity Framework 2.0',
        url: 'https://www.nist.gov/cyberframework',
        note: 'A general framework for discussing how an organization manages cybersecurity risk.',
      },
      {
        name: 'CISA: Use Strong Passwords',
        url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
        note: 'Practical guidance on strong passwords, password managers, and multifactor authentication.',
      },
    ],
  },
};

export type EvidenceArticle = {
  updated: string;
  takeaways: readonly string[];
  stats: readonly { value: string; label: string; note: string; source: number }[];
  chart: readonly { year: string; value: number }[];
  sections: readonly { id: string; title: string; paragraphs: readonly string[] }[];
  taskTable: readonly { work: string; assistant: string; manager: string }[];
  handoffSteps: readonly { step: string; title: string; text: string }[];
  expertQuote: { quote: string; person: string; role: string; date: string; source: number };
  scripts: readonly { title: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
  banners: readonly { eyebrow: string; title: string; body: string; href: string; label: string }[];
  sources: readonly { name: string; url: string; note: string }[];
};

export const evidenceArticles: Record<string, EvidenceArticle> = {
  'philippines-hr-records-assistant-access-guide': {
    updated: 'July 25, 2026',
    takeaways: [
      'Give the assistant a narrow records lane: collect, check, name, file, and flag. Keep employee decisions with the HR owner.',
      'Open access in small steps. A person who only prepares onboarding files should not have the same rights as the person who changes employment status.',
      'Use named accounts, multifactor authentication, and a written removal list. Shared logins make mistakes and exits harder to trace.',
      'Test the role with a sample packet before live records move. The test should show whether the person can spot missing fields without making a decision for the manager.',
    ],
    stats: [
      { value: '77.9%', label: 'people using the internet', note: 'Philippines, 2023 World Bank series', source: 1 },
      { value: '61.4%', label: 'labor participation', note: 'Philippines, 2024 World Bank series', source: 2 },
      { value: '59.3%', label: 'employment in services', note: 'Philippines, 2024 World Bank series', source: 3 },
    ],
    chart: [
      { year: '2020', value: 53.8 },
      { year: '2021', value: 66.9 },
      { year: '2022', value: 75.2 },
      { year: '2023', value: 77.9 },
    ],
    sections: [
      {
        id: 'role',
        title: 'Start with the records lane, not a vague HR title',
        paragraphs: [
          'A Philippines HR records assistant can keep routine files moving when the job has firm edges. The assistant may collect forms, check required fields, follow a naming rule, update a tracker, and tell the HR owner what is missing. The owner still decides what a document means and what action follows.',
          'Avoid handing over a loose request to "manage HR." That phrase can hide decisions about leave, discipline, status changes, benefits, or access. Write the first role around one record type, one queue, and one reviewer so both people know where the assistant must stop.',
        ],
      },
      {
        id: 'country-context',
        title: 'Use country data as context, not as proof of skill',
        paragraphs: [
          'The World Bank reports that 77.9% of people in the Philippines used the internet in 2023. Its 2024 series also shows 61.4% labor participation and 59.3% of employment in services. These are country measures, so they do not prove that a certain applicant can handle private employee files.',
          'The numbers do explain why a remote records role can draw from a large, service-based labor pool. Screening still has to happen one person at a time. Ask each candidate to organize a sample packet, find errors, write a short follow-up, and explain when the file should go back to the HR owner.',
        ],
      },
      {
        id: 'boundaries',
        title: 'Split file preparation from employee decisions',
        paragraphs: [
          'The safest split is simple: the assistant prepares and the manager approves. For a new-hire packet, the assistant can check whether required fields are present and place the files in the right folder. The manager confirms the employment terms, accepts an exception, and tells other teams when access should begin.',
          'The same line works for changes and exits. An assistant can gather an approved change form, update a record after approval, and save the audit note. The manager decides whether the change is valid, speaks with the employee, and owns any legal or policy question.',
        ],
      },
      {
        id: 'access',
        title: 'Give each task the smallest useful access',
        paragraphs: [
          'Make an access list beside the task list. Name the system, folder, record type, allowed action, and approver for each item. Start with view or upload rights when editing or deletion is not needed, then add rights only after the work sample and first live batch pass review.',
          'Every worker should use a named account. CISA recommends strong, unique passwords and multifactor authentication, while NIST CSF 2.0 gives any organization a common way to discuss how it governs and reduces cyber risk. These sources do not certify a staffing provider, but they give a manager clear controls to request.',
        ],
      },
      {
        id: 'sample',
        title: 'Run a sample packet before live records',
        paragraphs: [
          'Build a fake packet with six to ten documents and remove real names, addresses, account numbers, and medical details. Add a few clear problems, such as a missing signature, wrong file name, duplicate form, or date that does not match the tracker. Give the candidate the same written rules used for daily work.',
          'Score only what the task requires. Check file naming, field review, tracker accuracy, the follow-up message, and whether the candidate flags an exception instead of guessing. A polished interview means little if the sample packet comes back with silent errors.',
        ],
      },
      {
        id: 'first-week',
        title: 'Keep the first week small enough to check',
        paragraphs: [
          'On day one, explain the file map and complete one sample together. On days two and three, send a small live batch and review every item at a set time. By the end of the week, move to sample checks only if the assistant has followed the stop rules and the tracker matches the source files.',
          'Write corrections on the same example instead of sending scattered chat messages. The assistant needs one place to see the rule, the bad result, and the fixed result. If the rule changes, update the example before the next batch arrives.',
        ],
      },
      {
        id: 'exit',
        title: 'Plan access removal before the start date',
        paragraphs: [
          'The exit list should exist before the first login. It needs the named accounts, shared folders, devices, recovery contacts, open batches, and the person who confirms removal. Keep that list with the role brief so an unexpected absence does not turn into a search across several systems.',
          'When the role ends, pause new assignments and move open files to the named owner. Remove accounts, check forwarding rules and shared links, and record who completed each step. Then review whether the assistant had any rights that were never used, because the next person may need less access.',
        ],
      },
    ],
    taskTable: [
      { work: 'New-hire packet', assistant: 'Check fields, name files, update the tracker, flag gaps', manager: 'Approve terms, exceptions, and the start decision' },
      { work: 'Employee record change', assistant: 'Collect the approved form and update the record', manager: 'Confirm the change and handle employee questions' },
      { work: 'Leave document', assistant: 'Log the request and check required attachments', manager: 'Apply policy and approve or deny the request' },
      { work: 'Exit file', assistant: 'Gather records, close the checklist, route open items', manager: 'Confirm the exit, final actions, and access timing' },
    ],
    handoffSteps: [
      { step: '1', title: 'Request', text: 'A form or approved request enters one named queue.' },
      { step: '2', title: 'Check', text: 'The assistant checks fields, file names, and required proof.' },
      { step: '3', title: 'Review', text: 'The HR owner decides exceptions and confirms the action.' },
      { step: '4', title: 'Record', text: 'The assistant files the approved result and closes the tracker.' },
    ],
    expertQuote: {
      quote: 'The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats.',
      person: 'Laurie E. Locascio',
      role: 'NIST Director and Under Secretary of Commerce for Standards and Technology',
      date: 'February 26, 2024',
      source: 4,
    },
    scripts: [
      {
        title: 'Missing document message',
        text: 'Hi [name], I am checking the [packet or request] against the required file list. The following item is still missing: [item]. Please send it through [approved method] by [date], or tell me if the HR owner needs to review an exception.',
      },
      {
        title: 'Manager review note',
        text: 'The file check is complete. Items [A and B] match the checklist. Item [C] needs your decision because [short reason]. I have not changed the employee record or sent a final reply.',
      },
    ],
    faqs: [
      {
        question: 'Can a Philippines HR records assistant approve employee changes?',
        answer: 'The assistant can prepare an approved change and update a record after review. Keep approval, policy exceptions, status changes, and employee decisions with the HR owner.',
      },
      {
        question: 'What should the first work sample include?',
        answer: 'Use a fake packet with missing fields, a naming error, a duplicate file, and one item that needs manager review. Score accuracy, the written follow-up, and whether the candidate stops instead of guessing.',
      },
      {
        question: 'How much access should the assistant receive?',
        answer: 'Start with the least access needed for the first record type. Use a named account, turn on multifactor authentication, and add rights only when a real task requires them.',
      },
      {
        question: 'What should happen when the role ends?',
        answer: 'Move open work to the named owner, remove accounts and shared links, check forwarding rules, recover any device, and record who confirmed each step.',
      },
    ],
    banners: [
      { eyebrow: 'Role scope', title: 'Turn the file queue into a clear role brief.', body: 'List the record types, stop rules, systems, and reviewer before candidate matching begins.', href: '/services/employee-records-management', label: 'See records support' },
      { eyebrow: 'First-week plan', title: 'Open one small records lane first.', body: 'Pair limited access with a sample packet and a set review time for the first live batch.', href: '/services/new-hire-onboarding', label: 'Plan the handoff' },
      { eyebrow: 'Philippines staffing', title: 'Bring a defined HR support role to the intake.', body: 'Share the task list, schedule, tools, and manager limits for a Philippines-based hire.', href: '/contact', label: 'Send the role brief' },
    ],
    sources: [
      { name: 'World Bank: Individuals using the Internet, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=20', note: 'The series reports 77.86699677% for 2023. Chart values are rounded to one decimal place.' },
      { name: 'World Bank: Labor force participation data, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=20', note: 'The series reports 61.402% for 2024.' },
      { name: 'World Bank: Employment in services data, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=20', note: 'The series reports 59.3162032087416% for 2024.' },
      { name: 'NIST releases Cybersecurity Framework 2.0', url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework', note: 'Published February 26, 2024. The quoted sentence appears in the NIST release.' },
      { name: 'CISA: Use strong passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'CISA guidance covers strong unique passwords, password managers, and multifactor authentication.' },
    ],
  },
};

export const staffingOffer = {
  partner: 'a Philippines staffing team',
  promise: 'Get a Philippines staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable Filipino talent but do not want to screen alone',
    'teams that want Philippines-based support, backup coverage, and a clear manager path',
    'companies building a Philippines team for admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'Filipino candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'A Philippines staffing team can match Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every plan is for talent recruited and hired in the Philippines. Send the role scope, schedule, tools, and management needs so a Philippines staffing team can assess the fit.';


type ResearchPost = { slug: string; title: string; excerpt: string; body: string[]; publishedDate?: string };

const researchSources = [
  '1. World Bank, Individuals using the Internet, Philippines (2023 series): https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=20',
  '2. World Bank, Labor force participation rate, Philippines: https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=20',
  '3. World Bank, Employment in services, Philippines: https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=20',
  '4. ILO, Working conditions and labour standards: https://www.ilo.org/topics/working-conditions',
  '5. NIST, Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework',
  '6. CISA, Use strong passwords: https://www.cisa.gov/secure-our-world/use-strong-passwords',
  '7. FTC, Protecting personal information: https://www.ftc.gov/business-guidance/privacy-security',
  '8. U.S. Department of Labor, Wage and Hour Division: https://www.dol.gov/agencies/whd',
  '9. IRS, Independent contractor defined: https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined',
  '10. OECD, Measuring distance in the digital economy: https://www.oecd.org/digital/',
];

const researchBody = (topic: string, stat: string, tasks: string, boundary: string) => [
  `Headline figure: ${stat}. This country-level measure is context for planning a role, not proof of an individual applicant's skill or a substitute for local legal advice.`,
  `Research question: what should an owner define before assigning ${topic.toLowerCase()} to a Philippines-based support role?`,
  `Method: map the recurring queue, document the expected output, test the work with sanitized examples, and keep a named reviewer for exceptions. The useful unit is a finished task with an observable check, not a vague job title.`,
  `Recommended task lane: ${tasks}. Start with a small batch and record the input, action, output, reviewer, and escalation reason for each item.`,
  `Control boundary: ${boundary} The worker can prepare, check, route, and report; the owner keeps decisions that change policy, money movement, employment status, legal position, or access scope.`,
  'Access design: use a named account, multifactor authentication, least-privilege permissions, a separate test set, and a dated access-removal checklist. Review the permissions after the first live batch rather than granting every possible right on day one.',
  'Quality test: provide five to ten de-identified examples containing one missing field, one duplicate, one ambiguous request, and one clear escalation. Score accuracy, completeness, file or ticket hygiene, written handoff, and whether the worker stops instead of guessing.',
  'Operating rhythm: hold a short launch review daily for the first week, then move to a documented sample check once the error pattern is stable. Put corrections in the SOP and example set so the same rule is not re-explained in scattered messages.',
  'Evidence note: the sources below establish public context and control guidance. They do not certify a staffing provider, determine worker classification for a particular arrangement, or tell a manager how to comply with every jurisdiction involved.',
  'Key takeaway: a narrow queue, a visible definition of done, and a clear approval line make outsourced employment work easier to evaluate and safer to expand.',
  'Sources:',
  ...researchSources,
  'FAQ — What should happen when a request falls outside the brief? Pause the item, record the missing decision, and send it to the named owner. Do not infer approval from silence.',
  'FAQ — How should the role expand? Add one adjacent task only after the first lane has a stable checklist, reviewer, access map, and error record.',
  'Related Research: role briefs for Filipino support work; access controls for remote teams; first-week onboarding scorecards.',
];

const researchBodyV2 = (topic: string, stat: string, question: string, lane: string, checks: string, escalation: string) => [
  `Headline statistic: ${stat}. It is a country-level planning signal, not a hiring-quality claim and not legal advice.`,
  `Research question: ${question}`,
  'Methodology: compare the recurring work with the intended decision rights, define a measurable output, and test the lane on sanitized records before granting production access. This note uses public World Bank, ILO, NIST, CISA, FTC, IRS, OECD, and U.S. Department of Labor materials as context; those sources do not certify a provider or determine a specific employment arrangement.',
  `Recommended lane: ${lane}. Begin with a limited queue, a named owner, and a written definition of done. Record input, action, output, reviewer, and exception reason for each sample batch.`,
  `Quality checks: ${checks}. Score accuracy, completeness, timeliness, evidence hygiene, and whether the worker pauses when a rule is missing.`,
  `Escalation boundary: ${escalation} The support role may prepare, classify, reconcile, draft, and report, but the owner retains authority over money, policy, legal position, employment status, confidential disclosure, and access scope.`,
  'Suggested scorecard: 10-item work sample; zero unauthorized decisions; 100% of exceptions routed; complete source or record references; reviewer sign-off on the first three live batches.',
  '| Stage | Evidence | Owner decision |\n|---|---|---|\n| Intake | complete request and source record | accept or return |\n| Processing | dated work log and draft output | approve, correct, or escalate |\n| Review | sample score and exception list | expand, hold, or revise SOP |',
  'Access controls: use named accounts, multifactor authentication, least privilege, a separate test set, and a dated removal checklist. Do not share credentials or grant broad export rights merely to reduce setup time.',
  'Operating rhythm: daily review during week one; twice-weekly sampling while the error pattern is being learned; then a documented sample review with an immediate stop rule for repeated material errors.',
  'Key takeaway: a narrow, evidence-producing workflow is easier to delegate and safer to expand than a broad title with invisible judgment.',
  'Sources:',
  ...researchSources,
  'FAQ — What if the source record is incomplete? Mark the item incomplete, identify the missing field, and route it to the named owner rather than guessing.',
  'FAQ — When can the lane expand? Only after the scorecard is stable, exception categories are known, access is reviewed, and the owner approves the adjacent task in writing.',
  'Related Research: remote team access; operations QA sampling; website content operations.',
];

const researchPostsRaw: ResearchPost[] = [
  { slug: 'philippines-remote-admin-workflow-research', title: 'Philippines Remote Admin Workflow: What to Define Before Hiring', excerpt: 'A sourced planning guide for turning recurring administrative work into a reviewable Philippines-based role.', body: researchBody('remote administrative workflow', '77.9% of people in the Philippines used the internet in the World Bank 2023 series', 'inbox triage, spreadsheet updates, appointment preparation, and status reporting', 'the owner approves commitments, sensitive replies, exceptions, and changes to the operating process') },
  { slug: 'philippines-customer-support-coverage-research', title: 'Philippines Customer Support Coverage: A Research-Based Role Boundary', excerpt: 'How to separate ticket preparation and response workflows from refunds, policy calls, and escalations.', body: researchBody('customer-support coverage', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'ticket tagging, knowledge-base lookup, draft replies, callback lists, and unresolved-case reports', 'the manager owns refunds, legal threats, account closure, compensation, and any promise outside the approved policy') },
  { slug: 'philippines-bookkeeping-support-controls-research', title: 'Philippines Bookkeeping Support: Controls for a Narrower Work Lane', excerpt: 'A practical research note on preparing bookkeeping inputs while keeping approvals and funds under owner control.', body: researchBody('bookkeeping support', '61.4% was the World Bank 2024 labor-force participation series value for the Philippines', 'receipt collection, transaction coding proposals, reconciliation checklists, and missing-document follow-up', 'the owner or qualified finance professional approves payments, journal entries, tax positions, and unusual transactions') },
  { slug: 'philippines-hr-onboarding-coordination-research', title: 'Philippines HR Onboarding Coordination: A Safe First-Week Design', excerpt: 'Build an onboarding coordinator role around checklists, records, and escalation rather than employee decisions.', body: researchBody('HR onboarding coordination', '77.9% is the World Bank 2023 internet-use figure used here as remote-work context', 'checklist tracking, document requests, account-setup coordination, orientation scheduling, and missing-item reports', 'the HR owner approves terms, employment status, exceptions, access changes, and policy answers') },
  { slug: 'philippines-recruiting-coordinator-work-sample-research', title: 'Philippines Recruiting Coordinator Work Samples: What to Measure', excerpt: 'Use a realistic, de-identified work sample to test recruiting coordination without outsourcing hiring judgment.', body: researchBody('recruiting coordination', '59.3% is the World Bank 2024 services-employment figure used as broad labor-market context', 'candidate scheduling, application completeness checks, structured interview notes, and follow-up queues', 'the hiring owner makes selection, rejection, compensation, and qualification decisions') },
  { slug: 'philippines-sop-documentation-research', title: 'Philippines SOP Documentation: Research on Repeatable Handoffs', excerpt: 'A guide to assigning procedure capture and maintenance while preserving process ownership.', body: researchBody('SOP documentation', '61.4% is the World Bank 2024 labor-force participation series value used for context', 'interviewing process owners, drafting step lists, capturing screenshots in approved systems, and maintaining change logs', 'the process owner approves the procedure, security wording, policy interpretation, and any change that alters accountability') },
  { slug: 'philippines-ecommerce-operations-research', title: 'Philippines E-commerce Operations: Queue Design and Escalation', excerpt: 'Separate catalog, order, and customer follow-up work from pricing, fraud, and exception decisions.', body: researchBody('e-commerce operations', '77.9% is the World Bank 2023 internet-use figure used to frame digital-work access', 'catalog checks, order-status updates, return-document preparation, inventory flags, and customer follow-up drafts', 'the owner approves price changes, refunds, fraud actions, inventory write-offs, and policy exceptions') },
  { slug: 'philippines-sales-operations-research', title: 'Philippines Sales Operations: What a Coordinator Can Prepare', excerpt: 'A sourced role design for CRM hygiene, meeting preparation, and reporting with clear commercial boundaries.', body: researchBody('sales operations', '59.3% is the World Bank 2024 services-employment figure used as country context', 'CRM field checks, lead routing, meeting preparation, pipeline reports, and approved follow-up sequences', 'the seller or manager owns pricing, commitments, contract language, qualification exceptions, and customer promises') },
  { slug: 'philippines-marketing-production-research', title: 'Philippines Marketing Production: Reviewable Work Without Message Drift', excerpt: 'Define content production tasks, evidence checks, and approval gates for a Philippines-based marketing role.', body: researchBody('marketing production', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'brief formatting, source logging, asset resizing, calendar updates, and draft production against an approved brief', 'the brand owner approves claims, regulated language, public pricing, campaigns, and final publication') },
  { slug: 'philippines-data-entry-quality-research', title: 'Philippines Data Entry Quality: A Research-Based Sampling Plan', excerpt: 'Turn repetitive data work into a measurable lane with error taxonomy, sampling, and access controls.', body: researchBody('data-entry quality', '77.9% is the World Bank 2023 internet-use figure used only as broad context', 'field entry, duplicate checks, normalization against a written rule, exception tagging, and batch reports', 'the data owner decides source-of-truth conflicts, deletion, export permissions, and changes to the schema or retention rule') },
  { slug: 'philippines-executive-assistant-boundaries-research', title: 'Philippines Executive Assistant Boundaries: Designing Trust Gradually', excerpt: 'A research note on delegating calendar, travel, and preparation work without silently transferring authority.', body: researchBody('executive-assistant support', '59.3% is the World Bank 2024 services-employment figure used for broad context', 'calendar proposals, travel research, briefing-note formatting, inbox labels, and action-list maintenance', 'the executive approves commitments, confidential disclosures, spending, sensitive replies, and changes to access or delegation') },
  { slug: 'philippines-remote-team-access-research', title: 'Philippines Remote Team Access: A Practical Evidence-First Checklist', excerpt: 'Use public cybersecurity guidance to shape named accounts, least privilege, review cadence, and removal steps.', body: researchBody('remote-team access', '61.4% is the World Bank 2024 labor-force participation series value used as country context', 'access-request preparation, permission inventory, onboarding checklists, periodic review reminders, and offboarding evidence', 'the system owner grants or revokes access and approves exceptions; the coordinator records the decision but does not self-authorize') },
  { slug: 'philippines-appointment-setting-workflow-research', title: 'Philippines Appointment Setting: A Research-Based Workflow', excerpt: 'Design a measurable appointment-setting lane with approved scripts, clean records, and manager-owned commitments.', body: researchBody('appointment setting', '77.9% of people in the Philippines used the internet in the World Bank 2023 series', 'lead-list hygiene, availability checks, approved outreach, calendar proposals, and no-show follow-up', 'the owner approves targeting, claims, discounts, meeting promises, and any change to qualification rules') },
  { slug: 'philippines-invoice-follow-up-controls-research', title: 'Philippines Invoice Follow-Up: Controls for Receivables Support', excerpt: 'Separate reminder preparation and account notes from payment disputes, concessions, and ledger changes.', body: researchBody('invoice follow-up', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'aging-list preparation, approved reminder drafts, payment-status logging, and dispute routing', 'the finance owner approves credits, payment plans, write-offs, account holds, and any change to the ledger') },
  { slug: 'philippines-content-research-assistant-sources', title: 'Philippines Content Research Assistants: A Source-Checking Design', excerpt: 'Turn source discovery, notes, and citation checks into a reviewable research production lane.', body: researchBody('content research assistance', '61.4% was the World Bank 2024 labor-force participation series value for the Philippines', 'query logs, source discovery, claim tables, citation formatting, and brief updates against an approved angle', 'the editor approves claims, interpretation, publication, public pricing, and any source that cannot be independently checked') },
  { slug: 'philippines-inventory-coordination-research', title: 'Philippines Inventory Coordination: A Safe Exception Workflow', excerpt: 'Build a stock and replenishment support role around records, flags, and escalation instead of silent overrides.', body: researchBody('inventory coordination', '77.9% is the World Bank 2023 internet-use figure used here as remote-work context', 'stock-sheet updates, discrepancy checks, reorder reports, supplier follow-ups, and evidence collection', 'the operations owner approves purchases, write-offs, substitutions, stock adjustments, and supplier commitments') },
  { slug: 'philippines-customer-data-cleanup-research', title: 'Philippines Customer Data Cleanup: Sampling and Escalation', excerpt: 'Use a narrow data-quality lane to improve records while protecting source-of-truth and deletion decisions.', body: researchBody('customer data cleanup', '59.3% is the World Bank 2024 services-employment figure used as broad labor-market context', 'duplicate review, field normalization, missing-data queues, merge proposals, and batch-quality reports', 'the data owner approves merges, deletion, exports, retention changes, and conflicts between systems of record') },
  { slug: 'philippines-project-coordinator-handoff-research', title: 'Philippines Project Coordination: Handoffs That Stay Reviewable', excerpt: 'Define project tracking, meeting notes, and dependency follow-up without transferring delivery authority.', body: researchBody('project coordination', '61.4% is the World Bank 2024 labor-force participation series value used for context', 'task-board hygiene, agenda preparation, decision logs, dependency reminders, and weekly status drafts', 'the project owner approves scope, deadlines, commitments, budget changes, and resolution of material risks') },
  { slug: 'philippines-recruiting-sourcing-research', title: 'Philippines Recruiting Sourcing: A Controlled Candidate Queue', excerpt: 'Create a sourcing workflow with structured evidence while keeping selection and employment decisions with the hiring owner.', body: researchBody('recruiting sourcing', '77.9% is the World Bank 2023 internet-use figure used only as broad context', 'search strings, candidate-list preparation, profile completeness checks, outreach drafts, and response tracking', 'the hiring owner approves targeting, screening decisions, compensation, rejection reasons, and candidate promises') },
  { slug: 'philippines-helpdesk-triage-research', title: 'Philippines Helpdesk Triage: A Practical Evidence-First Role', excerpt: 'Separate ticket classification and known-answer handling from security, refund, and priority decisions.', body: researchBody('helpdesk triage', '59.3% is the World Bank 2024 services-employment figure used for broad context', 'ticket categorization, known-answer lookup, reproduction notes, status updates, and escalation packets', 'the service owner approves security responses, refunds, account changes, incident severity, and unsupported workarounds') },
  { slug: 'philippines-remote-meeting-coordination-research', title: 'Philippines Remote Meeting Coordination: A Clear Operating Lane', excerpt: 'Make scheduling, preparation, and follow-up measurable while preserving meeting and disclosure authority.', body: researchBody('remote meeting coordination', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'calendar proposals, agenda assembly, attendee checks, note formatting, and action-item tracking', 'the meeting owner approves attendees, confidential disclosures, commitments, recording, and changes to the decision record') },
  { slug: 'philippines-website-content-operations-research', title: 'Philippines Website Content Operations: Reviewable Publishing Controls', excerpt: 'Define content operations around briefs, metadata, QA, and approval gates for a Philippines-based support role.', body: researchBody('website content operations', '77.9% is the World Bank 2023 internet-use figure used to frame digital-work access', 'brief intake, metadata entry, link checks, image records, draft formatting, and pre-publication QA reports', 'the editor approves factual claims, legal language, public pricing, final publication, and changes to site-wide templates') },
  { slug: 'philippines-leave-tracking-support-research', title: 'Philippines Leave Tracking Support: A Reviewable Records Lane', excerpt: 'Design leave tracking around complete records, reminders, and escalation while keeping approvals with the HR owner.', body: researchBody('leave tracking support', '61.4% was the World Bank 2024 labor-force participation series value for the Philippines', 'request logging, balance-sheet updates, approval reminders, calendar coordination, and exception reports', 'the HR owner approves leave, disputes, policy interpretation, balances that conflict, and any employment-status decision') },
  { slug: 'philippines-benefits-administration-support-research', title: 'Philippines Benefits Administration Support: Evidence and Escalation', excerpt: 'Create a benefits support queue for document checks and follow-up without transferring plan or eligibility decisions.', body: researchBody('benefits administration support', '77.9% is the World Bank 2023 internet-use figure used as broad digital-work context', 'enrollment checklist tracking, document completeness checks, vendor follow-up, status reporting, and missing-item notices', 'the benefits owner approves eligibility, plan interpretation, enrollment exceptions, confidential advice, and employee commitments') },
  { slug: 'philippines-payroll-input-preparation-research', title: 'Philippines Payroll Input Preparation: A Controlled Handoff', excerpt: 'Separate timesheet and change-input preparation from payroll approval, payment authority, and sensitive employee decisions.', body: researchBody('payroll input preparation', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'timesheet checks, approved change-log entry, missing-input follow-up, variance reports, and payroll packet assembly', 'the payroll owner approves pay, deductions, tax treatment, corrections, payment release, and employee disputes') },
  { slug: 'philippines-performance-review-coordination-research', title: 'Philippines Performance Review Coordination: A Clear Support Scope', excerpt: 'Use a structured coordination lane for review calendars, evidence packets, and reminders while managers retain judgment.', body: researchBody('performance review coordination', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'calendar tracking, form completeness checks, evidence-packet assembly, reminder queues, and meeting-note formatting', 'the manager approves ratings, feedback, improvement plans, promotion decisions, and any employment action') },
  { slug: 'philippines-training-coordination-research', title: 'Philippines Training Coordination: Making Completion Reviewable', excerpt: 'Turn training administration into a measurable queue with enrollment, attendance, evidence, and escalation rules.', body: researchBody('training coordination', '77.9% is the World Bank 2023 internet-use figure used as remote-work context', 'session scheduling, roster maintenance, material distribution, completion tracking, and overdue reports', 'the training owner approves curriculum, required-status exceptions, competency decisions, policy content, and employee records changes') },
  { slug: 'philippines-offboarding-administration-research', title: 'Philippines Offboarding Administration: A Safe Checklist Design', excerpt: 'Coordinate records, handoff, and access-removal evidence without making termination or legal decisions.', body: researchBody('offboarding administration', '59.3% is the World Bank 2024 services-employment figure used as broad context', 'checklist tracking, file and task handoff, equipment-return reminders, account-removal evidence, and final status reporting', 'the HR or system owner approves termination, final-pay decisions, legal notices, access exceptions, and retention changes') },
  { slug: 'philippines-workforce-reporting-research', title: 'Philippines Workforce Reporting: A Source-of-Truth Workflow', excerpt: 'Build recurring workforce reports around defined fields, reconciliation notes, and owner-approved interpretation.', body: researchBody('workforce reporting', '61.4% was the World Bank 2024 labor-force participation series value for the Philippines', 'data pulls, field validation, headcount reconciliation, trend-table preparation, and missing-data follow-up', 'the owner approves definitions, source-of-truth conflicts, forecasts, employment actions, and any report sent outside the approved audience') },
  { slug: 'philippines-schedule-administration-research', title: 'Philippines Schedule Administration: A Measurable Coordination Lane', excerpt: 'Define schedule support around proposals, coverage flags, and records while managers retain staffing authority.', body: researchBody('schedule administration', '77.9% is the World Bank 2023 internet-use figure used to frame digital-work access', 'shift-plan updates, availability checks, coverage reports, change-request logging, and reminder messages', 'the manager approves schedules, overtime, exceptions, attendance disputes, staffing commitments, and policy changes') },
  { slug: 'philippines-employee-records-management-research', title: 'Philippines Employee Records Management: Quality Checks and Access Limits', excerpt: 'Use a narrow records workflow for completeness and retrieval while protecting confidential decisions and source ownership.', body: researchBody('employee records management', '59.3% is the World Bank 2024 services-employment figure used as country context', 'document indexing, naming checks, missing-file queues, retention reminders, and retrieval reports', 'the HR owner approves record changes, disclosure, retention exceptions, employment status, and access to confidential information') },
  { slug: 'philippines-candidate-sourcing-coordination-research', title: 'Philippines Candidate Sourcing Coordination: A Controlled Queue', excerpt: 'Organize sourcing research, candidate records, and follow-up without outsourcing selection or employment judgment.', body: researchBody('candidate sourcing coordination', '61.4% is the World Bank 2024 labor-force participation series value used for context', 'search-log maintenance, candidate-list preparation, profile checks, outreach drafts, and response tracking', 'the hiring owner approves targeting, screening, rejection, compensation, candidate promises, and use of sensitive information') },
  { slug: 'philippines-employee-communications-research', title: 'Philippines Employee Communications Support: Drafts with Approval Gates', excerpt: 'Create a draft-and-route communication lane for routine employee updates while keeping policy and sensitive replies with the owner.', body: researchBody('employee communications support', '77.9% is the World Bank 2023 internet-use figure used as broad digital-work context', 'approved-template drafting, distribution-list checks, FAQ routing, acknowledgment tracking, and unanswered-question reports', 'the HR owner approves policy interpretation, disciplinary or sensitive messages, legal wording, exceptions, and commitments to employees') },
  { slug: 'philippines-hr-document-administration-research', title: 'Philippines HR Document Administration: A Traceable Preparation Workflow', excerpt: 'Design document preparation around templates, completeness checks, and review trails rather than unsupervised HR decisions.', body: researchBody('HR document administration', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'template population, field checks, version tracking, signature-status follow-up, and exception packets', 'the HR owner approves terms, legal language, signatures, employment status, policy exceptions, and release of final documents') },
  { slug: 'philippines-employee-benefits-records-research', title: 'Philippines Employee Benefits Records: A Controlled Administration Lane', excerpt: 'Keep benefits records current with documented checks and routing while eligibility and plan decisions remain with the owner.', body: researchBody('employee benefits records', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'record completeness checks, enrollment-status tracking, vendor follow-up, document indexing, and unresolved-item reports', 'the benefits owner approves eligibility, plan interpretation, confidential advice, exceptions, and any employee commitment') },
  { slug: 'philippines-client-onboarding-coordination-research', title: 'Philippines Client Onboarding Coordination: A Traceable Handoff', excerpt: 'Design client onboarding support around intake, checklist evidence, and escalation while account owners retain commercial judgment.', body: researchBody('client onboarding coordination', '77.9% of people in the Philippines used the internet in the World Bank 2023 series', 'intake completeness checks, kickoff scheduling, workspace setup requests, milestone tracking, and open-question reports', 'the account owner approves scope, commitments, contract interpretation, access exceptions, and any promise to the client') },
  { slug: 'philippines-knowledge-base-maintenance-research', title: 'Philippines Knowledge Base Maintenance: Keeping Answers Reviewable', excerpt: 'Use a controlled maintenance lane for articles, feedback, and stale-answer flags without letting support guidance drift.', body: researchBody('knowledge-base maintenance', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'article inventories, link checks, feedback tagging, draft revisions, and stale-content reports', 'the service owner approves policy, product claims, security guidance, legal wording, and publication of new answers') },
  { slug: 'philippines-quality-assurance-sampling-research', title: 'Philippines Operations QA Sampling: A Practical Control Design', excerpt: 'Build a sampling program that measures recurring work consistently and routes defects to the process owner.', body: researchBody('operations quality assurance', '61.4% was the World Bank 2024 labor-force participation series value used as country context', 'sample selection, checklist scoring, defect classification, evidence capture, and weekly trend reports', 'the process owner sets acceptance rules, waives defects, changes policy, and decides whether a systemic issue needs remediation') },
  { slug: 'philippines-vendor-coordination-research', title: 'Philippines Vendor Coordination: Records Before Commitments', excerpt: 'Separate vendor research and follow-up from purchasing authority, contract changes, and exception approvals.', body: researchBody('vendor coordination', '77.9% is the World Bank 2023 internet-use figure used here as broad digital-work context', 'vendor-list hygiene, quote comparison against stated criteria, meeting notes, document collection, and renewal reminders', 'the owner approves vendor selection, spend, contract language, renewals, concessions, and supplier commitments') },
  { slug: 'philippines-procurement-administration-research', title: 'Philippines Procurement Administration: A Controlled Request Queue', excerpt: 'Create a request-preparation lane with visible evidence while purchase and budget decisions stay with the owner.', body: researchBody('procurement administration', '59.3% is the World Bank 2024 services-employment figure used as broad labor-market context', 'request intake, specification checks, approved-quote filing, order-status tracking, and missing-information follow-up', 'the budget owner approves purchases, suppliers, substitutions, payment release, exceptions, and changes to buying rules') },
  { slug: 'philippines-social-content-moderation-research', title: 'Philippines Social Content Moderation: Routing with Clear Rules', excerpt: 'Define a moderation support lane around documented rules, evidence, and escalation instead of unsupervised policy interpretation.', body: researchBody('social content moderation', '61.4% is the World Bank 2024 labor-force participation series value used for context', 'queue labeling, duplicate detection, rule-linked notes, approved response drafts, and urgent-case routing', 'the policy owner decides edge cases, account sanctions, legal threats, safety escalation, and changes to the moderation standard') },
  { slug: 'philippines-website-qa-research', title: 'Philippines Website QA: A Pre-Publication Evidence Checklist', excerpt: 'Make website review repeatable with page inventories, link checks, metadata checks, and owner-approved release gates.', body: researchBody('website quality assurance', '77.9% is the World Bank 2023 internet-use figure used to frame digital-work access', 'page inventories, broken-link checks, form-path checks, metadata review, screenshot evidence, and defect queues', 'the site owner approves factual claims, legal language, public pricing, design changes, releases, and handling of submitted personal data') },
  { slug: 'philippines-email-operations-research', title: 'Philippines Email Operations: Draft, Check, Escalate', excerpt: 'Design email production around approved templates, audience checks, and a clear owner review before sending.', body: researchBody('email operations', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'list hygiene, draft assembly, merge-field checks, send-calendar updates, and reply or bounce reporting', 'the sender approves claims, offers, sensitive replies, recipient changes, legal wording, and any message outside the approved template') },
  { slug: 'philippines-document-control-research', title: 'Philippines Document Control: Version Evidence and Retrieval', excerpt: 'Use a narrow document-control workflow to protect naming, version, and approval records without changing source content.', body: researchBody('document control', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'file indexing, naming checks, version comparison, approval-status tracking, and retrieval logs', 'the document owner approves edits, release status, retention exceptions, confidential disclosure, and changes to the source of truth') },
  { slug: 'philippines-customer-feedback-analysis-research', title: 'Philippines Customer Feedback Analysis: From Notes to Patterns', excerpt: 'Turn feedback collection into a coded, reviewable evidence stream while product and service owners retain interpretation.', body: researchBody('customer feedback analysis', '77.9% is the World Bank 2023 internet-use figure used as broad context', 'feedback normalization, theme coding against a written taxonomy, quote references, trend tables, and unresolved-question queues', 'the product or service owner approves interpretation, customer promises, public claims, prioritization, and any response involving sensitive information') },
  { slug: 'philippines-operations-dashboard-research', title: 'Philippines Operations Dashboards: Definitions Before Numbers', excerpt: 'Build dashboard support around source checks and metric definitions so reporting stays reproducible and reviewable.', body: researchBody('operations dashboard support', '59.3% is the World Bank 2024 services-employment figure used as broad context', 'source refreshes, field validation, date-range checks, discrepancy notes, and dashboard QA reports', 'the metric owner defines formulas, resolves source conflicts, approves forecasts, and decides which result is shared externally') },
  { slug: 'philippines-return-processing-research', title: 'Philippines Return Processing: A Safe Records Workflow', excerpt: 'Separate return-case preparation and status tracking from refund, fraud, and policy decisions.', body: researchBody('return processing', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'case intake, document checks, status updates, evidence matching, customer draft replies, and exception queues', 'the operations owner approves refunds, replacements, fraud actions, policy exceptions, write-offs, and customer commitments') },
  { slug: 'philippines-calendar-and-inbox-triage-research', title: 'Philippines Calendar and Inbox Triage: Delegating Preparation Safely', excerpt: 'Create a bounded executive support lane for sorting, proposing, and preparing while commitments remain owner-controlled.', body: researchBody('calendar and inbox triage', '77.9% of people in the Philippines used the internet in the World Bank 2023 series', 'labeling, draft replies, meeting proposals, briefing-note preparation, follow-up queues, and unanswered-item reports', 'the executive approves commitments, confidential disclosures, spending, sensitive replies, invitations, and changes to delegation or access') },
  { slug: 'philippines-lead-list-hygiene-research', title: 'Philippines Lead-List Hygiene: A Controlled Data Workflow', excerpt: 'Improve prospect records with documented normalization and escalation while keeping targeting and outreach decisions with the owner.', body: researchBody('lead-list hygiene', '59.3% is the World Bank 2024 services-employment figure used as broad context', 'field normalization, duplicate checks, source labeling, opt-out flagging, and exception reports', 'the sales owner approves targeting, claims, outreach, qualification rules, suppression decisions, and any commercial promise') },
  { slug: 'philippines-research-brief-production-controls', title: 'Philippines Research Brief Production: Controls for Evidence-First Drafting', excerpt: 'Design a research-assistant lane around query logs, claim tables, and editor-owned interpretation.', publishedDate: '2026-08-10', body: researchBodyV2('research brief production', '77.9% of people in the Philippines used the internet in the World Bank 2023 series', 'How can a support role improve research throughput without silently deciding what a source means?', 'query logging, source retrieval, claim-table population, citation formatting, and brief assembly against an approved angle', 'reproduce each headline number from its source, label dates and geography, and flag conflicting definitions', 'the editor approves angle, interpretation, claims, source quality, and publication') },
  { slug: 'philippines-remote-workforce-scheduling-research', title: 'Philippines Remote Workforce Scheduling: A Reviewable Coverage Workflow', excerpt: 'Use availability checks, coverage flags, and approval queues while managers retain schedule authority.', publishedDate: '2026-08-10', body: researchBodyV2('remote workforce scheduling', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'What evidence should a scheduling coordinator prepare before a manager changes coverage?', 'availability normalization, shift-plan updates, coverage-gap reports, change-request logging, and reminder messages', 'compare every change against the approved roster, timezone, break rule, and manager instruction', 'the manager approves schedules, overtime, exceptions, attendance disputes, and staffing commitments') },
  { slug: 'philippines-client-intake-quality-research', title: 'Philippines Client Intake Quality: A Source-Complete Handoff Design', excerpt: 'Make intake completeness measurable before an account owner commits scope or timing.', publishedDate: '2026-08-10', body: researchBodyV2('client intake quality', '61.4% was the World Bank 2024 labor-force participation series value for the Philippines', 'How should an intake coordinator surface missing facts without promising an outcome to the client?', 'form review, evidence indexing, duplicate detection, open-question tracking, kickoff preparation, and handoff packets', 'check required fields, source links, consent or permission notes, duplicate accounts, and owner assignments', 'the account owner approves scope, commitments, contract interpretation, access exceptions, and client promises') },
  { slug: 'philippines-remote-file-organization-research', title: 'Philippines Remote File Organization: Naming, Version, and Retrieval Evidence', excerpt: 'Build a document-organization lane that improves retrieval without changing the source of truth.', publishedDate: '2026-08-10', body: researchBodyV2('remote file organization', '77.9% is the World Bank 2023 internet-use figure used as digital-work context', 'Which file-management tasks can be delegated while retention, disclosure, and source ownership remain protected?', 'inventory creation, filename checks, folder mapping, version comparison, retrieval logs, and missing-file queues', 'test naming rules on mixed examples, preserve original timestamps where required, and record every move or proposed merge', 'the document owner approves edits, release status, retention exceptions, confidential disclosure, and source-of-truth changes') },
  { slug: 'philippines-market-research-coordination-research', title: 'Philippines Market Research Coordination: A Traceable Evidence Queue', excerpt: 'Separate search, extraction, and comparison work from strategic conclusions and public claims.', publishedDate: '2026-08-10', body: researchBodyV2('market research coordination', '59.3% is the World Bank 2024 services-employment figure used as broad labor-market context', 'How can a research coordinator create comparable evidence without turning a search result into an unsupported conclusion?', 'search-plan maintenance, source screening, data extraction, comparison-table preparation, and unanswered-question tracking', 'record publication date, geography, sample or definition, direct source URL, and confidence or limitation notes', 'the strategy owner approves interpretation, market claims, competitor characterization, and decisions based on the research') },
  { slug: 'philippines-remote-inbox-operations-research', title: 'Philippines Remote Inbox Operations: Triage Without Commitment Drift', excerpt: 'Define a draft-and-route inbox lane with clear categories, response templates, and stop conditions.', publishedDate: '2026-08-10', body: researchBodyV2('remote inbox operations', '61.4% is the World Bank 2024 labor-force participation series value used as broad context', 'What can inbox triage prepare before a person with authority decides what to send or promise?', 'labeling, duplicate detection, draft assembly, attachment checks, follow-up queues, and unanswered-item reports', 'verify recipient, thread, approved template, attachment, sensitivity label, and required reviewer before routing', 'the owner approves commitments, sensitive replies, legal wording, recipient changes, spending, and delegation changes') },
  { slug: 'philippines-operations-handbook-maintenance-research', title: 'Philippines Operations Handbook Maintenance: Change-Control Evidence', excerpt: 'Keep procedures current through owner-approved edits, examples, and a visible change log.', publishedDate: '2026-08-10', body: researchBodyV2('operations handbook maintenance', '77.9% is the World Bank 2023 internet-use figure used for remote-work context', 'How can a documentation coordinator keep instructions usable while preventing silent policy changes?', 'procedure inventory, stale-page flags, screenshot refreshes, example updates, link checks, and change-log preparation', 'compare each proposed edit with the owner change request, preserve version history, and flag contradictions', 'the process owner approves procedure meaning, policy interpretation, security wording, and accountability changes') },
  { slug: 'philippines-accounts-receivable-records-research', title: 'Philippines Accounts-Receivable Records: A Controlled Follow-Up Lane', excerpt: 'Prepare aging evidence and approved reminders while keeping concessions and ledger changes with finance.', publishedDate: '2026-08-10', body: researchBodyV2('accounts-receivable records', '59.3% of employment in the Philippines was in services in the World Bank 2024 series', 'Which receivables support tasks improve visibility without giving a coordinator payment or credit authority?', 'aging-list preparation, account-note checks, approved reminder drafts, status logging, and dispute routing', 'match account, invoice, due date, approved language, contact permission, and prior dispute status', 'the finance owner approves credits, payment plans, write-offs, account holds, ledger changes, and payment commitments') },
  { slug: 'philippines-remote-quality-review-research', title: 'Philippines Remote Quality Review: Sampling Rules for Recurring Work', excerpt: 'Create a repeatable QA sample with defect categories, evidence, and owner-controlled acceptance rules.', publishedDate: '2026-08-10', body: researchBodyV2('remote quality review', '61.4% was the World Bank 2024 labor-force participation series value used as country context', 'How can a QA coordinator measure recurring work without becoming the person who changes the acceptance standard?', 'sample selection, rubric scoring, defect classification, evidence capture, trend reporting, and recheck queues', 'sample across people, dates, task types, and exception classes; distinguish missing evidence from incorrect work', 'the process owner sets acceptance rules, waives defects, changes policy, and decides systemic remediation') },
  { slug: 'philippines-website-content-briefs-research', title: 'Philippines Website Content Briefs: Research and QA Before Publication', excerpt: 'Turn article preparation into a documented queue with source checks, metadata, and editor-owned release gates.', publishedDate: '2026-08-10', body: researchBodyV2('website content briefs', '77.9% is the World Bank 2023 internet-use figure used to frame digital-work access', 'What content-production evidence should be ready before an editor reviews a page for publication?', 'brief intake, search-intent notes, source log, outline formatting, metadata entry, internal-link checks, and pre-publication QA', 'verify every factual claim has a source, distinguish research from opinion, check canonical and slug uniqueness, and flag unsupported pricing or promises', 'the editor approves claims, legal language, public pricing, final publication, and site-wide template changes') },
  { slug: 'philippines-vendor-research-coordination-research', title: 'Philippines Vendor Research Coordination: Comparisons Before Commitments', excerpt: 'Prepare comparable vendor evidence without transferring purchasing, contract, or renewal authority.', publishedDate: '2026-08-10', body: researchBodyV2('vendor research coordination', '59.3% is the World Bank 2024 services-employment figure used as broad context', 'How should a coordinator structure vendor evidence so an owner can decide without relying on an opaque recommendation?', 'vendor-list hygiene, criteria-based comparison, source capture, meeting-note formatting, document collection, and renewal reminders', 'show criteria, date checked, source URL, assumptions, missing evidence, and conflicts rather than unsupported certainty', 'the owner approves vendor selection, spend, contract language, renewals, concessions, and supplier commitments') },
  { slug: 'philippines-employee-data-audit-research', title: 'Philippines Employee Data Audits: Completeness Without Unauthorized Disclosure', excerpt: 'Use a narrow audit lane for missing fields and access evidence while HR retains confidentiality decisions.', publishedDate: '2026-08-10', body: researchBodyV2('employee data audits', '61.4% is the World Bank 2024 labor-force participation series value used as context', 'What can an audit coordinator check without exporting sensitive records or deciding what HR should disclose?', 'field-completeness checks, duplicate flags, access-inventory preparation, retention reminders, and exception reporting', 'use masked samples, log record access, distinguish missing data from restricted data, and route disclosure questions', 'the HR owner approves record changes, disclosure, retention exceptions, employment status, and confidential access') },
];

const august10ResearchSlugs = new Set([
  'philippines-research-brief-production-controls',
  'philippines-remote-workforce-scheduling-research',
  'philippines-client-intake-quality-research',
  'philippines-remote-file-organization-research',
  'philippines-market-research-coordination-research',
  'philippines-remote-inbox-operations-research',
  'philippines-operations-handbook-maintenance-research',
  'philippines-accounts-receivable-records-research',
  'philippines-remote-quality-review-research',
  'philippines-website-content-briefs-research',
  'philippines-vendor-research-coordination-research',
  'philippines-employee-data-audit-research',
]);

export const researchPosts = researchPostsRaw.map(post => august10ResearchSlugs.has(post.slug) ? {...post, publishedDate: '2026-08-10'} : post);
