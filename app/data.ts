export const site = {
  "domain": "OutsourcedEmployment.com",
  "slug": "outsourcedemployment",
  "brand": "Outsourced Employment",
  "primary": "outsourced employment",
  "audience": "leaders comparing outsourced employment, staffing, and remote team models",
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
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations support for teams that need recurring back-office work handled with clear SOPs, weekly review, and measured handoffs.",
    "bestTasks": [
      "Update task boards, CRM fields, reports, and handoff notes",
      "Prepare recurring spreadsheets, vendor follow-ups, and meeting notes",
      "Track open items so owners can make decisions faster"
    ],
    "guardrails": [
      "Owner keeps approval over spend, vendor changes, and policy calls",
      "Assistant starts with sample work before touching live customer or finance records",
      "Weekly scorecard checks accuracy, speed, follow-up, and missed items"
    ],
    "firstWeek": [
      "Day 1: give SOPs, sample files, and limited tool access",
      "Day 2-3: assign two repeat tasks with owner review",
      "Day 4-5: add reporting rhythm and escalation rules"
    ],
    "faqs": [
      {
        "question": "What operations work is safest to outsource first?",
        "answer": "Start with repeat admin work that already has examples, due dates, and a person who can review the first few outputs."
      },
      {
        "question": "Should an outsourced operations assistant make decisions alone?",
        "answer": "No. Keep spend, policy, vendor, and customer-impact decisions with the owner or manager until the role has earned more trust."
      }
    ]
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer support staffing for teams that need inbox, chat, ticket, and follow-up help without giving away sensitive decisions too soon.",
    "bestTasks": [
      "Answer common tickets with approved macros and examples",
      "Tag issues, update CRM notes, and route edge cases to the owner",
      "Follow up on open requests, refunds, replacements, and status checks"
    ],
    "guardrails": [
      "Manager owns refunds, credits, cancellations, and angry escalations",
      "Start with read-only access where possible, then add permissions slowly",
      "Review a sample of tickets daily during the first two weeks"
    ],
    "firstWeek": [
      "Day 1: share brand tone, support rules, and do-not-say examples",
      "Day 2-3: let the assistant draft replies for approval",
      "Day 4-5: approve low-risk replies and track escalations"
    ],
    "faqs": [
      {
        "question": "Can outsourced support handle live customers?",
        "answer": "Yes, but start with approved scripts, clear escalation rules, and daily QA before the assistant owns a queue alone."
      },
      {
        "question": "What should stay with the in-house team?",
        "answer": "Keep refunds, legal complaints, high-value accounts, and policy exceptions with the manager until the support plan is mature."
      }
    ]
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin support for founders and teams that want email, calendar, document, and follow-up work handled without losing control.",
    "bestTasks": [
      "Clean inboxes, draft replies, and sort messages by urgency",
      "Book meetings, update calendars, and prepare agendas",
      "Organize files, forms, CRM notes, and recurring reminders"
    ],
    "guardrails": [
      "Use shared inbox rules before giving full email control",
      "Keep payment, HR, legal, and personal decisions out of the assistant's scope",
      "Create a short approval list for replies the assistant can send alone"
    ],
    "firstWeek": [
      "Day 1: list recurring admin tasks and access limits",
      "Day 2-3: review drafts, calendar updates, and file naming",
      "Day 4-5: move approved repeat tasks to a daily checklist"
    ],
    "faqs": [
      {
        "question": "What is the easiest admin task to delegate first?",
        "answer": "Start with repeatable calendar, inbox, or file work where the assistant can use examples and you can review quickly."
      },
      {
        "question": "How do you avoid giving too much access?",
        "answer": "Use shared folders, limited permissions, password managers, and approval rules before the assistant works inside sensitive systems."
      }
    ]
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA support for teams that need cleaner scorecards, issue tracking, and review notes from outsourced employment roles.",
    "bestTasks": [
      "Prepare weekly scorecards, defect logs, and status reports",
      "Check samples against SOPs and flag missing fields or late work",
      "Turn manager feedback into repeat checklists"
    ],
    "guardrails": [
      "QA assistant flags issues but the manager decides coaching or replacement",
      "Scorecards use visible examples, not vague ratings",
      "Sensitive employee notes stay with the manager"
    ],
    "firstWeek": [
      "Day 1: agree on scorecard fields and pass/fail examples",
      "Day 2-3: review a small batch of past work together",
      "Day 4-5: publish the first weekly report and fix the checklist"
    ],
    "faqs": [
      {
        "question": "What should a staffing QA scorecard include?",
        "answer": "Track accuracy, timeliness, follow-up, missed fields, customer risk, and the next coaching step. Keep the form short enough to use every week."
      },
      {
        "question": "Can QA be outsourced too?",
        "answer": "Yes, if the QA role checks clear examples and the manager still owns coaching, discipline, and final staffing decisions."
      }
    ]
  }
] as const;

export const blogPosts = [
  {
    "slug": "outsourced-employment-planning",
    "title": "Outsourced Employment: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
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
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;

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
          'Remote staff may need email, files, customer records, or business software. Ask the provider how it supports separate user accounts, multifactor authentication, and access removal. CISA recommends strong passwords and multifactor authentication. NIST\'s Cybersecurity Framework gives businesses a way to discuss risk, protection, detection, response, and recovery. These sources do not approve a provider. They give you a better set of controls to ask about.',
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

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' }
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
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
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
