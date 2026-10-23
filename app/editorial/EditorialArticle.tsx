import type { ReactNode } from 'react';
import { Footer, Header, JsonLd } from '../components';
import { EditorialToc, type TocEntry } from './EditorialToc';
import { buildEditorialSections, editorialHeroFallback, estimateReadMinutes, sanitizeVisibleProse, type EditorialKind } from './editorial-utils';
import styles from './editorial.module.css';

export type EditorialSource = { name: string; url: string; note?: string };
export type EditorialRelated = { slug: string; title: string; excerpt?: string };
export type EditorialService = { href: string; label: string };

export type EditorialArticleProps = {
  kind: EditorialKind;
  slug: string;
  title: string;
  excerpt: string;
  body?: readonly string[];
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  minutes?: number;
  sources?: readonly EditorialSource[];
  related: readonly EditorialRelated[];
  services: readonly EditorialService[];
  canonical: string;
  siteName: string;
  siteUrl: string;
  handoff?: ReactNode;
};

function dateLabel(value?: string) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

function sourcePublisher(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return 'Source publisher'; }
}

export function EditorialArticle(props: EditorialArticleProps) {
  const {
    kind, slug, title, excerpt, body, image, publishedDate, modifiedDate, minutes,
    sources = [], related, services, canonical, siteName, siteUrl, handoff,
  } = props;
  const sections = buildEditorialSections(body, kind);
  const readingMinutes = estimateReadMinutes(body, minutes);
  const titleText = sanitizeVisibleProse(title);
  const excerptText = sanitizeVisibleProse(excerpt);
  const toc: TocEntry[] = sections.flatMap((section) => [
    { id: section.id, label: section.title, level: 2 as const },
    ...(section.subheading ? [{ id: section.subheading.id, label: section.subheading.title, level: 3 as const }] : []),
  ]);
  if (sources.length) toc.push({ id: 'article-sources', label: 'Sources', level: 2 });
  const takeaways = sections.slice(0, 3).map((section) => {
    const sentence = section.paragraphs[0]?.match(/^.*?[.!?](?:\s|$)/)?.[0] ?? section.paragraphs[0] ?? section.title;
    return sentence.length > 190 ? `${sentence.slice(0, 187).trim()}...` : sentence;
  });
  const hero = image || editorialHeroFallback(kind, slug);
  const typeLabel = kind === 'blog' ? 'Practical guide' : 'Research note';
  const schema = {
    '@context': 'https://schema.org',
    '@type': kind === 'blog' ? 'BlogPosting' : 'ScholarlyArticle',
    headline: titleText,
    description: excerptText,
    url: canonical,
    image: hero,
    ...(publishedDate ? { datePublished: publishedDate } : {}),
    ...(modifiedDate || publishedDate ? { dateModified: modifiedDate || publishedDate } : {}),
    author: { '@type': 'Organization', name: siteName, url: siteUrl },
    publisher: { '@type': 'Organization', name: siteName, url: siteUrl },
    citation: sources.map((source) => source.url),
  };

  return <>
    <Header />
    <main className={styles.page} id="main-content">
      <JsonLd data={schema} />
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href={`/${kind}`}>{kind === 'blog' ? 'Blog' : 'Research'}</a>
            </nav>
            <p className={styles.kicker}>{typeLabel}</p>
            <h1>{titleText}</h1>
            <p className={styles.dek}>{excerptText}</p>
            {publishedDate && <p className={styles.publishLine}>Published <time dateTime={publishedDate}>{dateLabel(publishedDate)}</time></p>}
            <dl className={styles.byline} aria-label="Article details">
              <div><dt>Publisher</dt><dd>{siteName}</dd></div>
              {publishedDate && <div><dt>Published</dt><dd><time dateTime={publishedDate}>{dateLabel(publishedDate)}</time></dd></div>}
              {modifiedDate && modifiedDate !== publishedDate && <div><dt>Updated</dt><dd><time dateTime={modifiedDate}>{dateLabel(modifiedDate)}</time></dd></div>}
              <div><dt>Reading time</dt><dd>{readingMinutes} min read</dd></div>
            </dl>
          </div>
          <figure className={styles.heroMedia}>
            <img src={hero} alt={`${typeLabel} illustration for ${titleText}`} width="1200" height="630" />
          </figure>
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
            <EditorialToc entries={toc} mobile />
            <aside className={styles.takeaways} aria-labelledby="key-points-title">
              <h2 id="key-points-title">Key points</h2>
              <ul>{takeaways.map((item, index) => <li key={`${index}-${item.slice(0, 20)}`}>{sanitizeVisibleProse(item)}</li>)}</ul>
            </aside>

            {sections.map((section) => <section className={styles.articleSection} key={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => <div key={`${section.id}-${index}`}>
                {section.subheading?.at === index && <h3 id={section.subheading.id}>{section.subheading.title}</h3>}
                <p>{sanitizeVisibleProse(paragraph)}</p>
              </div>)}
            </section>)}

            {sources.length > 0 && <section id="article-sources" className={styles.sources} aria-labelledby="sources-heading">
              <h2 id="sources-heading">Sources</h2>
              <p>References supplied with this {kind === 'blog' ? 'guide' : 'research note'}.</p>
              <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Source table, scroll horizontally on small screens">
                <table>
                  <caption>Article source directory</caption>
                  <thead><tr><th scope="col">Source</th><th scope="col">Publisher</th><th scope="col">Context</th></tr></thead>
                  <tbody>{sources.map((source) => <tr key={source.url}>
                    <th scope="row"><a href={source.url} target="_blank" rel="noreferrer">{sanitizeVisibleProse(source.name)}</a></th>
                    <td>{sourcePublisher(source.url)}</td>
                    <td>{sanitizeVisibleProse(source.note || 'Primary reference supplied with this article.')}</td>
                  </tr>)}</tbody>
                </table>
              </div>
            </section>}

            <aside className={styles.disclaimer}>This article provides general operational information. Qualified owners should review legal, employment, payroll, privacy, and security decisions for the specific situation.</aside>
            {handoff && <aside className={styles.handoff}><h2>Continue with a practical service plan</h2>{handoff}</aside>}
          </div>

          <aside className={styles.sidebar} aria-label="Article resources">
            <div className={styles.sidebarInner}>
              <EditorialToc entries={toc} />
              <section className={styles.sideModule}>
                <h2>Article details</h2>
                <dl><div><dt>Format</dt><dd>{typeLabel}</dd></div><div><dt>Reading time</dt><dd>{readingMinutes} minutes</dd></div><div><dt>Library</dt><dd><a href={`/${kind}`}>{kind === 'blog' ? 'Blog guides' : 'Research notes'}</a></dd></div></dl>
              </section>
              <section className={styles.sideModule}>
                <h2>Related services</h2>
                <ul>{services.map((service) => <li key={service.href}><a href={service.href}>{sanitizeVisibleProse(service.label)}</a></li>)}</ul>
              </section>
              <section className={styles.sideModule}>
                <h2>Related reading</h2>
                <ul>{related.map((item) => <li key={item.slug}><a href={`/${kind}/${item.slug}`}>{sanitizeVisibleProse(item.title)}</a></li>)}</ul>
              </section>
              {sources.length > 0 && <section className={styles.sideModule}><h2>Source coverage</h2><p>{sources.length} linked {sources.length === 1 ? 'source' : 'sources'} accompany this article.</p><a href="#article-sources">Review the source table</a></section>}
              <section className={styles.sideCta}><h2>Plan a supported role</h2><p>Bring the workflow, tools, schedule, and approval boundaries to a staffing conversation.</p><a href="/contact-us">Contact Us</a></section>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>;
}
