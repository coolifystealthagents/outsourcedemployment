import { Footer, Header } from '../components';
import { researchPosts, site } from '../data';
import { EditorialIndex } from '../editorial/EditorialIndex';

export const metadata = { title: `Research | ${site.brand}`, description: 'Research notes for Philippines-based staffing decisions.', alternates: { canonical: 'https://outsourcedemployment.com/research' } };

export default function Research() {
  const posts = [...researchPosts]
    .sort((a, b) => (b.publishedDate || '0000-00-00').localeCompare(a.publishedDate || '0000-00-00') || a.slug.localeCompare(b.slug))
    .map((post: any) => ({ ...post }));
  return <>
    <Header />
    <EditorialIndex kind="research" items={posts} title="Research for better role decisions" intro="Review source-aware research about Philippines-based staffing and operations. Each note identifies its publication date, reading time, and evidence context before you apply it." />
    <Footer />
  </>;
}
