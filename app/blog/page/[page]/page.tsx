import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Footer, Header } from '../../../components';
import { allBlogPosts } from '../../../data';
import { EditorialIndex } from '../../../editorial/EditorialIndex';
import styles from '../../../editorial/editorial.module.css';
import { FeaturedComparison } from '../../FeaturedComparison';

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  return Array.from({ length: pages }, (_, index) => ({ page: String(index + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Staffing guides, page ${page}`,
    description: 'Practical Philippines staffing guides with publication details, reading time, and topic-specific visuals.',
    alternates: { canonical: `https://outsourcedemployment.com/blog/page/${page}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const current = Number(page);
  const total = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  if (page === '1') redirect('/blog');
  if (!Number.isInteger(current) || current < 1 || current > total) notFound();
  const posts = allBlogPosts.slice((current - 1) * 20, current * 20).map((post: any) => ({ ...post }));
  return <>
    <Header />
    <EditorialIndex kind="blog" items={posts} title={`Staffing guides, page ${current}`} intro="Continue through practical Philippines staffing guides with publication details, reading time, and a topic-relevant visual for every article." />
    {current === 2 && <FeaturedComparison />}
    <div className={styles.paginationWrap}><nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, index) => <a aria-current={index + 1 === current ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>)}</nav></div>
    <Footer />
  </>;
}
