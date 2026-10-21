import * as data from './data';

const d = data as any;
const site = d.site || {};
const services = d.services || [];
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Outsourced Employment logo" /><span className="logo-name">{site.brand}</span></span>;
}

function ParentAttribution({ footer = false }: { footer?: boolean }) {
  return <a className={`parent-attribution${footer ? ' parent-attribution-footer' : ''}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, visit the official website"><img src="/brand/stealth-agents-logo.png" alt="StealthAgents" /><span>Powered by StealthAgents</span></a>;
}

export function Header() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><ParentAttribution /><nav className="links fleet-links" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav></div></header></>;
}

export function Footer() {
  return <footer className="legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><p>Explore Philippines-based staffing support with role scope, access, and review steps written clearly.</p><ParentAttribution footer /><p className="footer-note">This site helps teams define support roles. Staffing requests are supported by StealthAgents and its Philippines-based recruiting and managed operations team.</p></div><div><h3>Services</h3><div className="footer-links">{services.slice(0, 6).map((s: any) => <a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div></div><div><h3>Explore</h3><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/privacy">Privacy policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>Philippines-only talent sourcing</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Philippines staffing intake</p><h2>Define the role before hiring begins.</h2><p>Share the tasks, tools, schedule, and approval limits for your Filipino team member. The intake turns those details into a practical staffing brief.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
