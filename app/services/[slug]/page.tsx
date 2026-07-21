import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://outsourcedemployment.com';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return {
    title: s?.title || 'Service',
    description: s?.desc,
    alternates: s ? { canonical: `/services/${s.slug}` } : undefined,
    openGraph: s
      ? {
          title: `${s.title} | ${site.brand}`,
          description: s.desc,
          url: `${baseUrl}/services/${s.slug}`,
          type: 'website',
        }
      : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const pageUrl = `${baseUrl}/services/${s.slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: `${s.title} for outsourced employment`,
      description: s.desc,
      isPartOf: { '@type': 'WebSite', name: site.brand, url: baseUrl },
      mainEntity: { '@id': `${pageUrl}#service` },
      hasPart: [
        { '@type': 'ItemList', '@id': `${pageUrl}#best-tasks`, name: `${s.title} best tasks` },
        { '@type': 'ItemList', '@id': `${pageUrl}#first-week`, name: `${s.title} first week launch plan` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `${s.title} outsourced employment support`,
      serviceType: s.title,
      provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
      areaServed: 'Philippines',
      description: s.desc,
      url: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: s.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
        { '@type': 'ListItem', position: 3, name: s.title, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {schema.map((item, index) => (
          <JsonLd data={item} key={index} />
        ))}
        <section className='service-hero'>
          <div className='container two'>
            <div>
              <p className='eyebrow'>{site.brand} service</p>
              <h1>{s.title} with Filipino talent</h1>
              <p className='lead'>{s.desc}</p>
              <a className='btn' href='/contact'>Plan this role</a>
            </div>
            <div className='hero-card'>
              <img src={site.serviceImage} alt={`${s.title} planning for a Philippines staffing role`} />
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container cards'>
            <div className='card' id='best-tasks'>
              <h2>Best tasks</h2>
              <ul>{s.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className='card'>
              <h2>Control points</h2>
              <ul>{s.guardrails.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className='card' id='first-week'>
              <h2>First week launch</h2>
              <ul>{s.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className='section band'>
          <div className='container two'>
            <div>
              <p className='eyebrow'>Provider call script</p>
              <h2>Use this before you hire.</h2>
              <p className='quote'>"For {s.title.toLowerCase()}, what will the assistant do in week one, what stays with our manager, and how will you show missed work?"</p>
            </div>
            <div className='card'>
              <h3>What a useful answer includes</h3>
              <ul>
                <li>A narrow first-week task list</li>
                <li>Tool access limits and approval rules</li>
                <li>A named person who checks quality</li>
                <li>A replacement or coaching path if fit is poor</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='section' id='faq'>
          <div className='container'>
            <p className='eyebrow'>Buyer questions</p>
            <h2>Common questions about {s.title.toLowerCase()}</h2>
            <div className='cards'>
              {s.faqs.map((faq) => (
                <div className='card' key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
