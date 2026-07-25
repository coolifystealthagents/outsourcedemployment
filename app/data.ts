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
    "minutes": 11
  },
  {
    "slug": "outsourced-employment-planning",
    "title": "Outsourced Employment: Plan a Filipino role",
    "excerpt": "Define the work, decisions, access, and review plan before you compare staffing providers.",
    "minutes": 6
  },
  {
    "slug": "outsourced-employment-tasks-to-outsource",
    "title": "Outsourced Employment: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-employment-provider-questions",
    "title": "Outsourced Employment: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-employment-onboarding-checklist",
    "title": "Outsourced Employment: First week onboarding checklist",
    "excerpt": "Set up the tools, examples, review times, and escalation rules for a Filipino staff member's first week.",
    "minutes": 9
  }
] as const;

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


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
