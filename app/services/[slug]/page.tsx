import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { services, site } from '../../data';
import { serviceContent } from '../../service-content';
import styles from '../service-pages.module.css';

const base = `https://${String(site.domain).toLowerCase()}`;

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) return { title: 'Service not found' };
  return {
    title: content.title,
    description: content.summary,
    alternates: { canonical: `/services/${content.slug}` },
    openGraph: {
      title: content.title,
      description: content.summary,
      url: `${base}/services/${content.slug}`,
      type: 'website',
      images: [{ url: content.heroImage, alt: content.heroAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) notFound();

  const url = `${base}/services/${content.slug}`;
  const related = content.relatedServices.map(relatedSlug => {
    const service = services.find(item => item.slug === relatedSlug);
    if (!service) throw new Error(`Missing related service: ${relatedSlug}`);
    return service;
  });
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: content.title,
        description: content.summary,
        url,
        areaServed: 'Philippines',
        provider: { '@type': 'Organization', name: site.brand, url: base },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: content.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
          { '@type': 'ListItem', position: 3, name: content.title, item: url },
        ],
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
            <p className={styles.kicker}>Philippines employment operations support</p>
            <h1>{content.title}</h1>
            <p className={styles.lead}>{content.summary}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/contact-us">Discuss this service</a>
              <a className={styles.secondaryButton} href="#service-scope">Review the scope</a>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <img src={content.heroImage} alt={content.heroAlt} width="900" height="675" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.shell} ${styles.twoColumn}`}>
          <article className={styles.proseBlock}>
            <h2>Who this is for</h2>
            {content.audience.map(item => <p key={item}>{item}</p>)}
          </article>
          <article className={styles.proseBlock}>
            <h2>The problem to solve</h2>
            {content.problem.map(item => <p key={item}>{item}</p>)}
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="service-scope">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Scope of work</h2>
            <p>The starting lane is deliberately explicit. Work expands only after the operating owner confirms that the instructions, access, review rhythm, and exception path are working.</p>
          </div>
          <div className={styles.twoColumn}>
            <article className={styles.proseBlock}>
              <h3>Included work</h3>
              <ul className={styles.cleanList}>{content.scope.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className={styles.proseBlock}>
              <h3>What we need from you</h3>
              <ul className={styles.cleanList}>{content.inputs.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Workflow</h2>
            <p>The exact systems and cadence adapt to your operation, but every handoff keeps an owner, completion signal, and route for exceptions.</p>
          </div>
          <ol className={styles.workflow}>
            {content.workflow.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Deliverables and operating evidence</h2>
            <p>Outputs are designed for review, not hidden activity. Your owner can see what moved, what is waiting, and what needs a decision.</p>
          </div>
          <ul className={styles.cleanList}>{content.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Boundaries and accountability</h2>
            <p>Administration can support a decision, but it should not quietly become the decision-maker. These controls keep authority with the right people.</p>
          </div>
          <div className={styles.boundaryGrid}>
            <article className={styles.boundaryPanel}>
              <h3>Boundaries</h3>
              <ul>{content.boundaries.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className={styles.boundaryPanel}>
              <h3>Quality controls</h3>
              <ul>{content.qualityControls.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <article className={styles.decisionBand}>
            <h3>Human decisions</h3>
            <ul>{content.humanDecisions.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Common starting scenarios</h2>
            <p>A useful first scope starts with a real operational constraint. These situations are signals that a documented coordination lane may help.</p>
          </div>
          <div className={styles.scenarioGrid}>
            {content.startingScenarios.map(item => <article className={styles.scenario} key={item}>{item}</article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Frequently asked questions</h2>
            <p>Use these answers to test whether the service boundary matches the responsibility your team is ready to delegate.</p>
          </div>
          <div className={styles.faqList}>
            {content.faqs.map(faq => <article className={styles.faqItem} key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <h2>Related services</h2>
            <p>Related lanes can connect to the same evidence and handoff system. They should still have separate scope, permissions, owners, and review rules.</p>
          </div>
          <nav className={styles.relatedLinks} aria-label="Related services">
            {related.map(service => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}
          </nav>
        </div>
      </section>

      <aside className={styles.finalCta} aria-labelledby="service-final-cta">
        <h2 id="service-final-cta">Turn this workflow into a clear operating brief.</h2>
        <p>Bring the recurring work, current tools, approval owners, and one or two real examples. We will use them to discuss a practical starting scope and the decisions your team should retain.</p>
        <a className={styles.primaryButton} href="/contact-us">Start a service conversation</a>
      </aside>
    </main>
    <Footer />
  </>;
}
