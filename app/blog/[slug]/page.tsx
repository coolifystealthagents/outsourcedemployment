import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const baseUrl = 'https://outsourcedemployment.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: 'Guide' };
  }

  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | ${site.brand}`,
      description: post.excerpt,
      url,
      siteName: site.brand,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const details = blogDetails[post.slug];
  const pageUrl = `${baseUrl}/blog/${post.slug}`;

  const schema = details
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id': `${pageUrl}#article`,
            headline: post.title,
            description: post.excerpt,
            url: pageUrl,
            dateModified: '2026-07-21',
            author: { '@type': 'Organization', name: site.brand, url: baseUrl },
            publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
            citation: details.sources.map((source) => source.url),
            hasPart: details.sections.map((section) => ({
              '@type': 'WebPageElement',
              '@id': `${pageUrl}#${section.id}`,
              name: section.title,
            })),
          },
          {
            '@type': 'WebPage',
            '@id': `${pageUrl}#webpage`,
            url: pageUrl,
            name: post.title,
            description: post.excerpt,
            mainEntity: { '@id': `${pageUrl}#article` },
            isPartOf: { '@type': 'WebSite', name: site.brand, url: baseUrl },
          },
          {
            '@type': 'FAQPage',
            '@id': `${pageUrl}#faq`,
            mainEntity: details.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
            ],
          },
        ],
      }
    : null;

  return (
    <>
      <Header />
      <main className='section'>
        {schema && <JsonLd data={schema} />}
        <article className='container article-wrap'>
          <p className='eyebrow'>{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className='lead'>{post.excerpt}</p>

          {details ? (
            <>
              <section className='evidence-card' aria-labelledby='takeaways-title'>
                <p className='eyebrow'>Quick read</p>
                <h2 id='takeaways-title'>What to pin down before a provider call ends</h2>
                <ul>
                  {details.takeaways.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              {details.sections.map((section) => (
                <section className='article-section' id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <div className='question-card'>
                    <h3>Questions to use</h3>
                    <ul>{section.questions.map((question) => <li key={question}>{question}</li>)}</ul>
                  </div>
                </section>
              ))}

              <section className='article-section' aria-labelledby='answer-check-title'>
                <p className='eyebrow'>Provider answer check</p>
                <h2 id='answer-check-title'>Weak answers versus useful answers</h2>
                <p>A good answer names people, steps, limits, records, or contract terms. Use this table to spot where a sales promise needs one more question.</p>
                <div className='comparison-table' role='table' aria-label='Provider answer comparison'>
                  <div className='comparison-row comparison-head' role='row'>
                    <span role='columnheader'>Check</span>
                    <span role='columnheader'>Weak answer</span>
                    <span role='columnheader'>Useful answer</span>
                  </div>
                  {details.comparison.map((row) => (
                    <div className='comparison-row' role='row' key={row.check}>
                      <strong role='cell'>{row.check}</strong>
                      <span role='cell'>{row.weak}</span>
                      <span role='cell'>{row.useful}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className='script-card' aria-labelledby='script-title'>
                <p className='eyebrow'>Copy-ready request</p>
                <h2 id='script-title'>Send this before the proposal</h2>
                <blockquote>{details.quoteScript}</blockquote>
              </section>

              <section className='article-section' id='faq'>
                <p className='eyebrow'>Buyer questions</p>
                <h2>Questions about outsourced employment providers</h2>
                <div className='faq-list'>
                  {details.faqs.map((faq) => (
                    <div className='faq-item' key={faq.question}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='source-list' aria-labelledby='sources-title'>
                <h2 id='sources-title'>Sources used in this guide</h2>
                <p>These sources support the classification and access-control questions above. They do not rate or endorse staffing providers.</p>
                <ul>
                  {details.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} rel='noreferrer' target='_blank'>{source.name}</a>
                      <span>{source.note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <div className='card'>
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
