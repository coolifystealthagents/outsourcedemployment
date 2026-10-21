import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { researchPosts, site } from '../../data';
import { EditorialArticle } from '../../editorial/EditorialArticle';
import { sanitizeVisibleProse } from '../../editorial/editorial-utils';

export function generateStaticParams() { return researchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post: any = researchPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const p=post;
  const openGraphModifiedDate=(p as {openGraphModifiedDate?:string}).openGraphModifiedDate;
  const canonical = `https://${String(site.domain).toLowerCase()}/research/${post.slug}`;
  const image = typeof post.image === 'string' ? post.image : '/aug19-heroes/employment-operations-source-quality-evidence-research.webp';
  return {
    title: sanitizeVisibleProse(post.title),
    description: sanitizeVisibleProse(post.excerpt),
    alternates: { canonical },
    openGraph: {
      type:'article' as const,
      title: sanitizeVisibleProse(post.title),
      description: sanitizeVisibleProse(post.excerpt),
      url: canonical,
      images: [{ url: image, alt: sanitizeVisibleProse(post.title) }],
      ...(openGraphModifiedDate ? { modifiedTime:openGraphModifiedDate } : {}),
    },
  };
}

function serviceLinks(post: any) {
  const links: { href: string; label: string }[] = [];
  if (post.handoff?.href?.startsWith('/services/')) links.push({ href: post.handoff.href, label: post.handoff.label || 'Related employment support service' });
  const text = `${post.title} ${post.excerpt}`.toLowerCase();
  if (/payroll/.test(text)) links.push({ href: '/services/payroll-input-preparation', label: 'Payroll input preparation' });
  if (/record|evidence|document|data/.test(text)) links.push({ href: '/services/employee-records-management', label: 'Employee records management' });
  if (/schedule|leave|attendance/.test(text)) links.push({ href: '/services/schedule-administration', label: 'Schedule administration' });
  if (!links.length) links.push({ href: '/services/workforce-reporting', label: 'Workforce reporting' });
  return links.filter((link, index) => links.findIndex((item) => item.href === link.href) === index).slice(0, 3);
}

export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: any = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const publishedDate = typeof post.publishedDate === 'string' ? post.publishedDate : undefined;
  const modifiedDate = typeof post.modifiedDate === 'string' ? post.modifiedDate : publishedDate;
  const organization={'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`};
  const articleIdentity={author:organization,publisher:organization};
  const p=post;
  const handoff=(p as {handoff?:{href:string;label:string;body:string}}).handoff;
  const articleUrl=`https://${String(site.domain).toLowerCase()}/research/${p.slug}`;
  const related = researchPosts.filter((item) => item.slug !== slug).slice(0, 3).map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt }));
  const canonical = `https://${String(site.domain).toLowerCase()}/research/${post.slug}`;

  return <EditorialArticle
    kind="research"
    slug={post.slug}
    title={post.title}
    excerpt={post.excerpt}
    body={Array.isArray(post.body) ? post.body : []}
    image={typeof post.image === 'string' ? post.image : undefined}
    publishedDate={publishedDate}
    modifiedDate={modifiedDate}
    sources={Array.isArray(post.sources) ? post.sources : []}
    related={related}
    services={serviceLinks(post)}
    canonical={canonical}
    siteName={site.brand}
    siteUrl={organization.url}
    handoff={handoff ? <a href={handoff.href}>{sanitizeVisibleProse(handoff.label)}</a> : undefined}
  />;
}
