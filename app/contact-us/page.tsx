import type { Metadata } from 'next';
import { TestimonialsRail } from '../booking-components';
import { Footer, Header, JsonLd } from '../components';
import StandardContactForm from './StandardContactForm';
import './contact.css';

const canonical = 'https://outsourcedemployment.com/contact-us';

export const metadata: Metadata = {
  title: 'Contact Outsourced Employment | Staffing Consultation',
  description: 'Tell us which employment administration workflows need reliable support, clear ownership, and accountable review.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title: 'Contact Outsourced Employment', description: 'Scope a practical employment support role with clear controls.', url: canonical, type: 'website' },
};

const faqs = [
  ['What employment work can be delegated?', 'Administrative preparation and coordination can include sourcing support, document tracking, onboarding, records maintenance, schedules, leave tracking, payroll inputs, training coordination, reporting, and offboarding checklists.'],
  ['Who remains the employer and decision-maker?', 'Your organization and its authorized leaders retain hiring, classification, compensation, discipline, termination, policy, legal, compliance, and employee-relations decisions.'],
  ['Can support staff access employee records?', 'Only when the role requires it and your authorized team approves. Use named accounts, least-privilege access, secure systems, documented retention, and prompt access removal.'],
  ['How does the launch start?', 'Begin with a limited workflow and representative examples. A named manager reviews outputs and exceptions before volume, scope, or access expands.'],
];

export default function ContactUsPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'ContactPage', name: 'Contact Outsourced Employment', url: canonical, description: metadata.description }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedemployment.com' }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] }, { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }] };

  return <><Header /><main id="main-content" className="contact-page"><JsonLd data={schema} />
    <section className="contact-first-fold">
      <div className="contact-shell contact-first-grid">
        <div className="contact-intro">
          <p className="contact-kicker">Build the right support role</p>
          <h1>Put recurring employment work in capable hands.</h1>
          <p className="contact-lead">Share the workflows, systems, deadlines, and review boundaries your team needs. We will help shape a clear staffing brief.</p>
          <ul className="contact-reassurance" aria-label="Consultation scope"><li>Philippines-based talent</li><li>Role-specific matching</li><li>Clear access boundaries</li></ul>
          <TestimonialsRail contact />
        </div>
        <StandardContactForm endpoint="/api/contact" encoding="form" />
      </div>
    </section>

    <section className="team-proof" aria-labelledby="team-proof-title">
      <div className="contact-shell team-proof-grid">
        <figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1600" height="900" alt="Stealth Agents operations team in Bacolod" /><figcaption>People behind the recruiting and managed support operation.</figcaption></figure>
        <div className="team-proof-copy"><p className="contact-kicker">Powered by StealthAgents</p><h2 id="team-proof-title">A specialist site backed by an established support team.</h2><p>Stealth Agents supports recruiting, matching, onboarding coordination, and ongoing managed operations. Outsourced Employment keeps its focused employment-administration identity while drawing on that operating team.</p><div className="official-team-plate"><img src="/brand/stealth-agents-logo.png" width="320" height="96" alt="StealthAgents official logo" /><strong>Official team, Bacolod</strong></div></div>
      </div>
    </section>

    <section className="contact-detail"><div className="contact-shell contact-detail-grid"><div><p className="contact-kicker">A useful first conversation</p><h2>Bring the work as it actually happens.</h2><p>Describe recurring tasks, current owners, source systems, deadlines, common exceptions, and the person who approves final actions. Those details create a more useful role than a generic job title.</p></div><div className="contact-ledger"><h3>We will map</h3><dl><div><dt>Inputs</dt><dd>Requests, records, calendars, templates, and approved source data</dd></div><div><dt>Handoff</dt><dd>Who prepares, checks, approves, and resolves exceptions</dd></div><div><dt>Outputs</dt><dd>Trackers, prepared packets, status updates, and decision queues</dd></div><div><dt>Controls</dt><dd>Named accounts, least privilege, review points, and escalation timing</dd></div></dl></div></div></section>

    <section className="contact-boundaries"><div className="contact-shell"><h2>Delegate coordination, not employer authority.</h2><p>Support staff can prepare records, maintain trackers, coordinate approved steps, and surface exceptions. Your authorized or qualified team retains hiring, classification, compensation, discipline, termination, payroll approval, legal judgment, and sensitive employee-relations decisions.</p></div></section>

    <section className="contact-faq"><div className="contact-shell"><p className="contact-kicker">Before you get in touch</p><h2>Common questions about the engagement.</h2><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><a className="contact-return" href="#contactPageForm">Tell us what support you need</a></div></section>
  </main><Footer /></>;
}
