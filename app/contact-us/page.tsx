import type { Metadata } from "next";
import { Footer, Header } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Outsourced Employment | Build Your Workforce Support Plan",
  description: "Book a focused consultation about outsourced employment support, role design, onboarding coordination, workforce administration, and controlled handoffs.",
  alternates: { canonical: "https://outsourcedemployment.com/contact-us" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Outsourced Employment",
    description: "Plan a well-scoped outsourced employment support role with clear ownership, access, and review steps.",
    url: "https://outsourcedemployment.com/contact-us",
    type: "website",
  },
};

const supportAreas = [
  ["Role scoping", "Turn recurring employment operations into a clear task list, schedule, and owner map."],
  ["Onboarding coordination", "Prepare checklists, account requests, document trackers, and first-week milestones."],
  ["Workforce administration", "Organize repeatable records, scheduling, reporting, and follow-up workflows."],
  ["Controlled handoffs", "Define approvals, escalation paths, access limits, and quality review before work begins."],
];

export default function ContactUsPage() {
  return (
    <><Header/><main className="contact-page">
      <section className="contact-hero">
        <div className="contact-shell contact-hero-grid">
          <div className="contact-copy">
            <p className="contact-kicker">Outsourced employment planning</p>
            <h1>Build a support role your team can trust.</h1>
            <p className="contact-lead">Tell us what needs to be handled, which systems are involved, and where your managers retain authority. We’ll use those details to shape a focused workforce-support conversation.</p>
            <div className="contact-proof" aria-label="Consultation highlights">
              <span><b>Clear</b> role scope</span><span><b>Practical</b> onboarding plan</span><span><b>Named</b> approvals</span><span><b>Measured</b> review cadence</span>
            </div>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>

      <section className="contact-band"><div className="contact-shell band-grid">
        <div><strong>01</strong><span>Share the workload</span></div><div><strong>02</strong><span>Define boundaries</span></div><div><strong>03</strong><span>Review the plan</span></div><div><strong>04</strong><span>Choose next steps</span></div>
      </div></section>

      <section className="contact-section"><div className="contact-shell">
        <p className="section-label">What to bring to your consultation</p>
        <div className="section-heading"><h2>A useful call starts with the work—not a generic job title.</h2><p>Bring examples of recurring tasks, the systems involved, the hours that matter, and the decisions that must stay with your team.</p></div>
        <div className="support-grid">{supportAreas.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="contact-section contact-muted"><div className="contact-shell evidence-grid">
        <div><p className="section-label">A plan you can inspect</p><h2>What the conversation should clarify</h2><p className="contact-body">The aim is a practical brief your team can evaluate. No inquiry creates an employment or service relationship, and sensitive employment decisions remain with your authorized leaders and qualified advisers.</p></div>
        <div className="check-card">
          <h3>Your planning checklist</h3>
          <ul><li>Recurring tasks and expected outputs</li><li>Systems, permissions, and data sensitivity</li><li>Coverage hours and response expectations</li><li>Approval limits and escalation owners</li><li>Quality checks and weekly review rhythm</li><li>Onboarding, documentation, and access removal</li></ul>
        </div>
      </div></section>

      <section className="contact-section"><div className="contact-shell image-grid">
        <div className="contact-image"><img src="/remote-team-planning.jpg" alt="Remote workforce team planning roles and onboarding together" width="1200" height="800" /></div>
        <div><p className="section-label">Why the details matter</p><h2>Make ownership visible before the handoff.</h2><p className="contact-body">Strong outsourced employment support begins with explicit responsibilities. A specialist can prepare records, coordinate workflows, and surface exceptions while your designated manager keeps approvals, policy decisions, compensation authority, and sensitive employee matters.</p><div className="mini-note"><b>Good first step</b><span>Choose one repeatable workflow and bring two real examples to the call.</span></div></div>
      </div></section>

      <section className="about-stealth"><div className="contact-shell about-grid">
        <div><p className="powered">Powered by <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Stealth Agents</a></p><h2>About Stealth Agents</h2></div>
        <p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p>
      </div></section>

      <section className="contact-final"><div className="contact-shell"><p className="section-label">Ready to move forward?</p><h2>Bring the workload. Leave with clearer next steps.</h2><p>Use the form above to book a free consultation and start building a controlled workforce-support plan.</p><a href="#contactPageForm">Book a Free Consultation</a></div></section>
    </main><Footer/></>
  );
}
