import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import d from '../refresh-data.json';

export const metadata: Metadata = {
  title: 'About',
  description: d.footer,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <><Header /><main id="main-content" className={'fr-page fr-' + d.theme}>
    <section className="fr-services-hero fr-wrap">
      <div>
        <p className="fr-label">About Outsourced Employment</p>
        <h1>{d.storyTitle}</h1>
        <p className="fr-lead">{d.intro}</p>
        <div className="fr-actions"><a className="fr-button" href="/contact-us">{d.cta} <span aria-hidden="true">↗</span></a><a className="fr-button fr-secondary" href="/services">Explore services <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure><img src={d.servicesImage} alt={d.servicesImageAlt} width="2200" height="1467" /></figure>
    </section>
    <section className="fr-process"><div className="fr-wrap fr-process-grid">
      <div><p className="fr-label">How we work</p><h2>Thoughtful support. Clear responsibilities.</h2><p>{d.story}</p></div>
      <div className="fr-process-items">{d.pillars.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>
    <section className="fr-wrap fr-fit">
      <div><p className="fr-label">Our parent company</p><h2>Powered by StealthAgents.</h2></div>
      <div>
        <p>Outsourced Employment is a StealthAgents subsidiary. StealthAgents recruits, employs, and supports the remote professionals who deliver this work.</p>
        <p>{d.footer}</p>
        <h3>Your team owns the decisions.</h3>
        <p>Your authorized team keeps business approvals, sensitive decisions, and professional judgment. The support role prepares, organizes, coordinates, and follows up within the scope you approve.</p>
        <a className="fr-link" href="https://stealthagents.com/">Explore StealthAgents <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main><Footer /></>;
}
