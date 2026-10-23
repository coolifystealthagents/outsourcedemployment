'use client';

import { useEffect, useState } from 'react';
import styles from './editorial.module.css';

export type TocEntry = { id: string; label: string; level: 2 | 3 };

function TocLinks({ entries, activeId }: { entries: TocEntry[]; activeId: string }) {
  return <ol className={styles.tocList}>
    {entries.map((entry) => <li className={entry.level === 3 ? styles.tocNested : undefined} key={entry.id}>
      <a href={`#${entry.id}`} onClick={(event) => { const d = event.currentTarget.closest('details'); if (d) d.removeAttribute('open'); }} aria-current={activeId === entry.id ? 'location' : undefined}>{entry.label}</a>
    </li>)}
  </ol>;
}

export function EditorialToc({ entries, mobile = false }: { entries: TocEntry[]; mobile?: boolean }) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? '');

  useEffect(() => {
    const headings = entries.map(({ id }) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;
    const observer = new IntersectionObserver((records) => {
      const visible = records.filter((record) => record.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActiveId(visible[0].target.id);
    }, { rootMargin: '-112px 0px -62% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    const updateBeforeFirstIntersection = () => {
      const passed = headings.filter((heading) => heading.getBoundingClientRect().top <= 140);
      if (passed.length) setActiveId(passed[passed.length - 1].id);
    };
    window.addEventListener('scroll', updateBeforeFirstIntersection, { passive: true });
    updateBeforeFirstIntersection();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateBeforeFirstIntersection);
    };
  }, [entries]);

  if (mobile) return <details className={styles.mobileToc}>
    <summary>Table of contents</summary>
    <nav aria-label="Article table of contents"><TocLinks entries={entries} activeId={activeId} /></nav>
  </details>;

  return <nav className={styles.desktopToc} aria-label="Article table of contents">
    <h2>Table of contents</h2>
    <TocLinks entries={entries} activeId={activeId} />
  </nav>;
}
