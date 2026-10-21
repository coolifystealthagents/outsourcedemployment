import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from '../components';
import { services, site } from '../data';
import { serviceContent } from '../service-content';
import styles from './service-pages.module.css';

const base = `https://${String(site.domain).toLowerCase()}`;
const title = 'Philippines employment support services';
const description = 'Compare employment operations support by workflow, required inputs, approval boundaries, quality controls, and the decisions your team retains.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title,
    description,
    url: `${base}/services`,
    type: 'website',
    images: [{
      url: '/illustrations/getillustrations/goodle-business-illustrations-svg/employment-partnership.svg',
      alt: 'Illustration of a structured employment operations partnership',
    }],
  },
};

const faqs = [
  {
    question: 'Which service should we start with?',
    answer: 'Choose the workflow with a recurring queue, stable source information, and a manager who can review exceptions. A narrow first lane is easier to document and improve than a mixed list of unrelated tasks.',
  },
  {
    question: 'Can several services share one specialist?',
    answer: 'Related workflows may fit one role when the schedule, permissions, volume, and review owner are compatible. The intake should still define each lane separately so urgent work and sensitive access do not become unclear.',
  },
  {
    question: 'What must stay with our internal team?',
    answer: 'Your authorized leaders retain employment decisions, policy interpretation, legal and tax judgment, payment release, sensitive access approval, and exceptions outside written rules.',
  },
  {
    question: 'What should we prepare before a discussion?',
    answer: 'Bring a recent example, the systems involved, expected volume, current owner, deadline, known exceptions, and the person who can approve the finished work.',
  },
] as const;

export default function ServicesPage() {
  const serviceItems = services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    url: `${base}/services/${service.slug}`,
  }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${base}/services#page`,
        url: `${base}/services`,
        name: title,
        description,
        mainEntity: { '@id': `${base}/services#service-list` },
      },
      {
        '@type': 'ItemList',
        '@id': `${base}/services#service-list`,
        numberOfItems: serviceItems.length,
        itemListElement: serviceItems,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return <>
    <Header />
    <main className={styles.page}>
      <JsonLd data={schema} />
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <p className={styles.kicker}>Employment operations service directory</p>
            <h1>Choose a workflow, not a vague pair of hands.</h1>
            <p className={styles.lead}>These Philippines-based support lanes organize recurring employment administration around defined inputs, visible outputs, quality checks, and human approval. Compare the work before deciding how a role should begin.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#service-directory">Explore every service</a>
              <a className={styles.secondaryButton} href="/contact-us">Discuss your workload</a>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <img src="/illustrations/getillustrations/goodle-business-illustrations-svg/employment-partnership.svg" alt="Illustration of a structured employment operations partnership" width="900" height="675" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>A connected service system</h2>
            <p>Employment operations cross several systems, but accountability should not blur. Each service has its own intake, permission set, completion evidence, exception path, and accountable reviewer. Related services can connect through controlled handoffs without becoming one undefined role.</p>
          </div>
          <div className={styles.guidanceGrid}>
            <article className={styles.guidancePanel}>
              <h3>Good work to delegate</h3>
              <ul>
                <li>Recurring administration with an observable completion standard.</li>
                <li>Coordination that depends on known owners, dates, and approved templates.</li>
                <li>Reconciliation where mismatches can be isolated for review.</li>
              </ul>
            </article>
            <article className={styles.guidancePanel}>
              <h3>Keep the decision owner visible</h3>
              <ul>
                <li>Name who approves exceptions and sensitive changes.</li>
                <li>Limit system access to the actual starting scope.</li>
                <li>Require evidence before an item is marked complete.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="service-directory">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Explore all services</h2>
            <p>Open a service to review its audience, operating problem, required inputs, workflow, deliverables, controls, retained decisions, common starting points, and related lanes.</p>
          </div>
          <div className={styles.directory}>
            {services.map(service => {
              const content = serviceContent[service.slug];
              return <a className={styles.directoryItem} href={`/services/${service.slug}`} key={service.slug}>
                <h2>{service.title}</h2>
                <p>{content.summary}</p>
                <span>Review the service</span>
              </a>;
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Engagement guidance</h2>
            <p>Start with a workflow that already exists. The first goal is not to transfer every task. It is to create a dependable operating lane that can be reviewed, corrected, and expanded deliberately.</p>
          </div>
          <ol className={styles.workflow}>
            <li><h3>Bring real work</h3><p>Use recent requests, source files, finished examples, volume, timing, and the actual systems involved. A real sample exposes hidden decisions better than a general job description.</p></li>
            <li><h3>Separate routine from judgment</h3><p>Mark what can follow a written rule, what needs approval, and what should always stop for an internal specialist. Name a backup decision owner before the work begins.</p></li>
            <li><h3>Agree on evidence</h3><p>Define what proves completion, where that evidence lives, which sample gets reviewed, and how corrections become reusable instructions.</p></li>
            <li><h3>Expand after review</h3><p>Add adjacent work only after quality, access, workload, and exception handling are stable. A new lane should receive its own controls rather than being added informally.</p></li>
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Boundaries that protect the handoff</h2>
            <p>Employment administration often sits close to sensitive data and consequential decisions. Clear boundaries make useful delegation possible without misrepresenting where authority belongs.</p>
          </div>
          <div className={styles.boundaryGrid}>
            <article className={styles.boundaryPanel}>
              <h3>The support lane can</h3>
              <ul>
                <li>Prepare, organize, check, reconcile, track, and route work under approved instructions.</li>
                <li>Maintain status, evidence, change history, and an exception queue.</li>
                <li>Ask for missing information and surface conflicts to named owners.</li>
              </ul>
            </article>
            <article className={styles.boundaryPanel}>
              <h3>Your authorized team retains</h3>
              <ul>
                <li>Hiring, termination, performance, compensation, leave, and policy decisions.</li>
                <li>Legal, tax, employment, security, and benefits interpretation.</li>
                <li>Payment release, sensitive access approval, and exceptions to written controls.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Frequently asked questions</h2>
            <p>Use these decision points to narrow the first scope before you compare staffing arrangements or system access.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map(faq => <article className={styles.faqItem} key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}
          </div>
        </div>
      </section>

      <aside className={styles.finalCta} aria-labelledby="services-final-cta">
        <h2 id="services-final-cta">Bring one recurring workflow. Leave with a clearer scope.</h2>
        <p>Share the current inputs, systems, volume, review owner, and difficult exceptions. We can discuss which service lane fits and what should remain a human decision.</p>
        <a className={styles.primaryButton} href="/contact-us">Talk through your starting workflow</a>
      </aside>
    </main>
    <Footer />
  </>;
}
