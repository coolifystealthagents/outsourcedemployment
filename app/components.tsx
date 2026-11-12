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



export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Philippines staffing intake</p><h2>Define the role before hiring begins.</h2><p>Share the tasks, tools, schedule, and approval limits for your Filipino team member. The intake turns those details into a practical staffing brief.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}

export {RefreshHeader as Header,RefreshFooter as Footer} from './refresh-experience';
