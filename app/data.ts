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

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' }
] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
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
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
