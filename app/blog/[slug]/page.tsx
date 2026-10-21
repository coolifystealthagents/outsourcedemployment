import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogPosts, evidenceArticles, services, site } from '../../data';
import { EditorialArticle } from '../../editorial/EditorialArticle';
import { sanitizeVisibleProse } from '../../editorial/editorial-utils';

export function generateStaticParams() { return allBlogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post: any = allBlogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const image = typeof post.image === 'string' ? post.image : '/blog-thumbnails/handoff-documentation.svg';
  const canonical = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  return {
    title: sanitizeVisibleProse(post.title),
    description: sanitizeVisibleProse(post.excerpt),
    alternates: { canonical },
    openGraph: { title: sanitizeVisibleProse(post.title), description: sanitizeVisibleProse(post.excerpt), url: canonical, type: 'article', images: [{ url: image, alt: sanitizeVisibleProse(post.title) }] },
  };
}

function serviceLinks(post: any) {
  const links: { href: string; label: string }[] = [];
  const aliases: Record<string, string> = {
    '/services/inbox-management': '/services/employment-document-administration',
    '/services/offboarding-coordination': '/services/offboarding-administration',
  };
  const servicePaths = new Set(services.map((service) => `/services/${service.slug}`));
  if (typeof post.cta === 'string' && post.cta.startsWith('/services/')) {
    const href = aliases[post.cta] || post.cta;
    if (servicePaths.has(href)) links.push({ href, label: 'Service related to this workflow' });
  }
  const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
  if (/onboard|new hire/.test(haystack)) links.push({ href: '/services/new-hire-onboarding', label: 'New hire onboarding' });
  if (/payroll/.test(haystack)) links.push({ href: '/services/payroll-input-preparation', label: 'Payroll input preparation' });
  if (/record|document|data/.test(haystack)) links.push({ href: '/services/employee-records-management', label: 'Employee records management' });
  if (/schedule|calendar|leave/.test(haystack)) links.push({ href: '/services/schedule-administration', label: 'Schedule administration' });
  if (!links.length) links.push({ href: '/services/employment-document-administration', label: 'Employment document administration' });
  return links.filter((link, index) => links.findIndex((item) => item.href === link.href) === index).slice(0, 3);
}

function evidenceBody(article: (typeof evidenceArticles)[string] | undefined): string[] {
  if (!article) return [];
  return [
    ...article.takeaways,
    ...article.sections.flatMap((section) => section.paragraphs),
    ...article.taskTable.map((row) => `${row.work}: the assistant prepares ${row.assistant.toLowerCase()}. The manager retains ${row.manager.toLowerCase()}.`),
    ...article.faqs.flatMap((faq) => [`${faq.question} ${faq.answer}`]),
  ];
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: any = allBlogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const evidence = evidenceArticles[slug];
  const body = Array.isArray(post.body) && post.body.length ? post.body : evidenceBody(evidence);
  const sources = Array.isArray(post.sources) ? post.sources : evidence?.sources ?? [];
  const publishedDate = typeof post.publishedDate === 'string' ? post.publishedDate : '2026-08-07';
  const organization={'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`};
  const articleIdentity={datePublished:publishedDate,author:organization,publisher:organization,};
  const related = allBlogPosts.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt }));
  const canonical = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;

  return <EditorialArticle
    kind="blog"
    slug={post.slug}
    title={post.title}
    excerpt={post.excerpt}
    body={body}
    image={typeof post.image === 'string' ? post.image : undefined}
    publishedDate={publishedDate}
    modifiedDate={publishedDate}
    minutes={typeof post.minutes === 'number' ? post.minutes : undefined}
    sources={sources}
    related={related}
    services={serviceLinks(post)}
    canonical={canonical}
    siteName={site.brand}
    siteUrl={organization.url}
  />;
}
