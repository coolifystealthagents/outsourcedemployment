export type EditorialKind = 'blog' | 'research';

export type EditorialSection = {
  id: string;
  title: string;
  subheading?: { id: string; title: string; at: number };
  paragraphs: string[];
};

const editorialFallbacks: Record<EditorialKind, readonly string[]> = {
  blog: [
    '/blog-thumbnails/handoff-documentation.svg',
    '/blog-thumbnails/employee-records.svg',
    '/blog-thumbnails/quality-scorecard.svg',
    '/blog-thumbnails/onboarding-status-board.svg',
    '/blog-thumbnails/reporting-calendar.svg',
  ],
  research: [
    '/aug19-heroes/employment-operations-source-quality-evidence-research.webp',
    '/aug19-heroes/employment-operations-review-consistency-research.webp',
    '/aug19-heroes/employment-operations-handoff-reliability-research.webp',
    '/aug19-heroes/employment-operations-exception-aging-patterns-research.webp',
    '/aug19-heroes/employment-operations-access-governance-research.webp',
  ],
};

export function editorialHeroFallback(kind: EditorialKind, slug: string): string {
  const pool = editorialFallbacks[kind];
  const hash = Array.from(slug).reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 0);
  return pool[hash % pool.length];
}

const sectionTitles: Record<EditorialKind, string[]> = {
  blog: [
    'Scope and operating boundary',
    'Workflow and evidence controls',
    'Quality review and exceptions',
    'Implementation and next steps',
  ],
  research: [
    'Research question and evidence frame',
    'Method and measurement',
    'Controls, limitations, and governance',
    'Findings and practical interpretation',
  ],
};

const subheadingTitles: Record<EditorialKind, string[]> = {
  blog: ['What to define', 'How to run the work', 'What to review', 'How to put it into practice'],
  research: ['Scope of the inquiry', 'Review protocol', 'Validity checks', 'Applying the evidence'],
};

export function sanitizeVisibleProse(value: string): string {
  if (/https?:\/\/|\B--[a-z0-9]/i.test(value)) return value;
  return value
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s+--\s+/g, ' - ')
    .replace(/,\s*,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
}

function stripSourceParagraphs(body: readonly string[]): string[] {
  return body.filter((paragraph) => {
    const text = paragraph.trim();
    return text && text !== 'Sources:' && !/^For .+, source \d+ is .+https?:\/\//i.test(text);
  });
}

export function buildEditorialSections(body: readonly string[] | undefined, kind: EditorialKind): EditorialSection[] {
  const clean = stripSourceParagraphs(Array.isArray(body) ? body : []).map(sanitizeVisibleProse);
  const fallback = kind === 'research'
    ? [
        'This research note defines a bounded question, the evidence needed to examine it, and the limits on any conclusion.',
        'Review the method, source quality, and decision rights before applying the findings to a specific team.',
        'Record exceptions and unresolved cases so a complete-looking result does not conceal uncertainty.',
        'Use the findings as an input to owner review, not as legal, employment, privacy, or security advice.',
      ]
    : [
        'Define the recurring work, approved source, expected output, and manager who retains the final decision.',
        'Start with a narrow handoff, named accounts, and examples that show when the specialist must stop and ask.',
        'Review completed work and exceptions on a regular schedule, then record corrections where they can be reused.',
        'Expand the role only after the first lane is accurate, traceable, and supported by a clear owner.',
      ];
  const paragraphs = clean.length ? clean : fallback;
  const count = Math.min(4, Math.max(3, Math.ceil(paragraphs.length / 6)));
  const size = Math.ceil(paragraphs.length / count);
  return Array.from({ length: count }, (_, index) => {
    const part = paragraphs.slice(index * size, (index + 1) * size);
    const title = sectionTitles[kind][index];
    return {
      id: slugifyHeading(title),
      title,
      paragraphs: part,
      ...(part.length >= 4 ? {
        subheading: {
          id: `${slugifyHeading(title)}-${slugifyHeading(subheadingTitles[kind][index])}`,
          title: subheadingTitles[kind][index],
          at: Math.ceil(part.length / 2),
        },
      } : {}),
    };
  }).filter((section) => section.paragraphs.length > 0);
}

export function estimateReadMinutes(body: readonly string[] | undefined, supplied?: number): number {
  if (typeof supplied === 'number' && supplied > 0) return supplied;
  const words = (body ?? []).join(' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 220));
}
