import { Footer, Header } from '../components';
import { allBlogPosts, site } from '../data';
import { EditorialIndex } from '../editorial/EditorialIndex';
import styles from '../editorial/editorial.module.css';

export const metadata = { title: `Blog | ${site.brand}`, description: 'Practical Philippines staffing guides.', alternates: { canonical: 'https://outsourcedemployment.com/blog' } };

export default function Blog() {
  const posts = allBlogPosts.slice(0, 20).map((post: any) => ({ ...post }));
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  return <>
    <Header />
    <EditorialIndex kind="blog" items={posts} title="Practical role and handoff guides" intro="Read substantial guidance for scoping, handing off, and managing Philippines-based support roles. Each article includes its reading time, publication information, and topic-specific visual." />
    <div className={styles.paginationWrap}><nav className="pagination" aria-label="Blog pages">{Array.from({ length: pages }, (_, index) => <a aria-current={index === 0 ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>)}</nav></div>
    <Footer />
  </>;
}
