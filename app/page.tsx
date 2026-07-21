import * as data from './data';
import { Header, Footer, JsonLd } from './components';

const services = data.services.slice(0, 4);
const posts = data.blogPosts.slice(0, 3);

const models = [
  {
    number: '01',
    title: 'Employer of record',
    fit: 'Employing Filipino talent through a Philippine entity you do not own.',
    watch: 'Ask who owns the Philippine entity, handles local payroll, and responds when employment rules change.',
  },
  {
    number: '02',
    title: 'Philippines staffing',
    fit: 'Building a dedicated role with Filipino talent, recruiting help, and ongoing provider support.',
    watch: 'Check who manages attendance, coaching, equipment, replacement, and day-to-day quality.',
  },
  {
    number: '03',
    title: 'Contractor support',
    fit: 'Bringing in independent help for work with a clear scope and limited direction.',
    watch: 'A contract label does not settle worker classification. Get advice for your location and setup.',
  },
];

const serviceText = (service: (typeof services)[number]) => service.desc.replace(/\.$/, '');

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.site.brand,
    url: `https://${data.site.domain}`,
    description: 'Independent guides to hiring Filipino talent, planning the role, comparing providers, and onboarding.',
  };

  return (
    <>
      <Header />
      <main className="field-guide" data-design="employment-field-guide-2026-07">
        <JsonLd data={schema} />

        <section className="oe-hero">
          <div className="oe-shell oe-hero-grid">
            <div className="oe-hero-copy">
              <p className="oe-kicker"><span /> Independent employment guide</p>
              <h1>Build the role before you hire Filipino talent.</h1>
              <p className="oe-intro">
                Employer of record, Philippines staffing, contractor support: the names blur together fast. Start with the work and the level of control you need. Then compare providers that recruit and hire only in the Philippines.
              </p>
              <div className="oe-actions">
                <a className="oe-button oe-button-primary" href="/contact">Request a staffing plan</a>
                <a className="oe-text-link" href="#models">Compare the models <span aria-hidden="true">↘</span></a>
              </div>
              <p className="oe-disclosure">This is an independent information site. We may route your request to a Philippines staffing partner, and talent sourcing stays in the Philippines.</p>
            </div>

            <div className="oe-hero-visual">
              <div className="oe-photo-frame">
                <img src="/remote-team-planning.jpg" alt="Colleagues working together around a shared table" />
              </div>
              <aside className="oe-brief-card" aria-label="Example role brief">
                <p>Role brief / 001</p>
                <h2>Customer operations</h2>
                <dl>
                  <div><dt>Owns</dt><dd>Inbox triage and CRM notes</dd></div>
                  <div><dt>Escalates</dt><dd>Refunds and policy exceptions</dd></div>
                  <div><dt>Review</dt><dd>Daily samples for week one</dd></div>
                </dl>
                <span className="oe-brief-status">Ready to compare</span>
              </aside>
              <div className="oe-stamp" aria-hidden="true">Scope first<br />hire second</div>
            </div>
          </div>
        </section>

        <section className="oe-models" id="models">
          <div className="oe-shell">
            <div className="oe-section-head">
              <p className="oe-kicker"><span /> Pick the arrangement</p>
              <div>
                <h2>Similar sales pitch. Different relationship.</h2>
                <p>Before asking a Philippines provider for Filipino candidates, find out who employs the worker, who directs the work, and who handles the messy parts when something changes.</p>
              </div>
            </div>
            <div className="oe-model-grid">
              {models.map((model) => (
                <article className="oe-model-card" key={model.number}>
                  <span className="oe-model-number">{model.number}</span>
                  <h3>{model.title}</h3>
                  <p className="oe-fit-label">A sensible fit when</p>
                  <p>{model.fit}</p>
                  <div className="oe-watch"><strong>What to pin down</strong><p>{model.watch}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="oe-work" id="work">
          <div className="oe-shell oe-work-grid">
            <div className="oe-work-intro">
              <p className="oe-kicker oe-kicker-light"><span /> Define the work</p>
              <h2>A useful brief sounds like a Tuesday, not a job ad.</h2>
              <p>List the recurring work, the decisions that stay with your team, and how someone will check the first outputs. That gives a provider something real to screen for.</p>
              <a className="oe-button oe-button-light" href="/contact">Request a staffing plan</a>
            </div>
            <div className="oe-service-list">
              {services.map((service, index) => (
                <a href={`/services/${service.slug}`} className="oe-service-row" key={service.slug}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{service.title}</h3><p>{serviceText(service)}.</p></div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="oe-process">
          <div className="oe-shell">
            <div className="oe-section-head oe-process-head">
              <p className="oe-kicker"><span /> A cleaner start</p>
              <div><h2>Three conversations worth having before a Philippines staffing contract.</h2></div>
            </div>
            <ol className="oe-process-list">
              <li><span>01</span><div><h3>Draw the relationship</h3><p>Put your company, the provider, and the worker on one page. Label who signs the agreement, runs payroll, sets priorities, and handles problems.</p></div></li>
              <li><span>02</span><div><h3>Test the actual work</h3><p>Use a small sample from the role. Agree on what good looks like and who will review it. A generic skills test will not tell you enough.</p></div></li>
              <li><span>03</span><div><h3>Plan the first week</h3><p>Start with narrow access, named review times, and an escalation list. Add responsibility after the work holds up, not before.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="oe-guides">
          <div className="oe-shell">
            <div className="oe-guides-title"><p className="oe-kicker"><span /> Buyer notes</p><h2>Read before a Philippines staffing call.</h2><a href="/blog">All guides</a></div>
            <div className="oe-guide-grid">
              {posts.map((post, index) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>Note {String(index + 1).padStart(2, '0')} · {post.minutes} min</span>
                  <h3>{post.title.replace('Outsourced Employment: ', '')}</h3>
                  <p>{post.excerpt}</p>
                  <b>Read note</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="oe-final">
          <div className="oe-shell oe-final-card">
            <p>Have a task list, even if it is messy?</p>
            <h2>Turn it into a role a Philippines provider can answer properly.</h2>
            <a className="oe-button oe-button-primary" href="/contact">Request a staffing plan</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
