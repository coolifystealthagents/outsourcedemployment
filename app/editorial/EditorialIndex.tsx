import { editorialHeroFallback, sanitizeVisibleProse, type EditorialKind } from './editorial-utils';
import styles from './editorial.module.css';

export type EditorialIndexItem = {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  publishedDate?: string;
  minutes?: number;
  body?: readonly string[];
};

function formatDate(date?: string) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Editorial library';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

export function EditorialIndex({ kind, items, title, intro }: { kind: EditorialKind; items: readonly EditorialIndexItem[]; title: string; intro: string }) {
  return <main className={styles.indexPage} id="main-content">
    <header className={styles.indexHeader}>
      <p className={styles.kicker}>{kind === 'blog' ? 'Philippines staffing blog' : 'Philippines staffing research'}</p>
      <h1>{sanitizeVisibleProse(title)}</h1>
      <p>{sanitizeVisibleProse(intro)}</p>
    </header>
    <div className={styles.indexGrid}>
      {items.map((item) => {
        const readTime = item.minutes || Math.max(3, Math.ceil((item.body?.join(' ').split(/\s+/).length || 660) / 220));
        return <a className={styles.indexCard} href={`/${kind}/${item.slug}`} key={item.slug}>
          <div className={styles.indexImage}><img src={item.image || editorialHeroFallback(kind, item.slug)} alt={`Thumbnail for ${sanitizeVisibleProse(item.title)}`} width="720" height="405" loading="lazy" /></div>
          <div className={styles.indexBody}>
            <div className={styles.indexMeta}><time dateTime={item.publishedDate}>{formatDate(item.publishedDate)}</time><span>{readTime} min read</span></div>
            <h2>{sanitizeVisibleProse(item.title)}</h2>
            <p>{sanitizeVisibleProse(item.excerpt)}</p>
            <span className={styles.indexRead}>Read {kind === 'blog' ? 'guide' : 'research'}</span>
          </div>
        </a>;
      })}
    </div>
  </main>;
}
