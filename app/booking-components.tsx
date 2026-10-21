'use client';

export const approvedTestimonials = [
  { name: 'Chad Sublet', role: 'Business Owner', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.' },
  { name: 'Erika Giron', role: 'CEO, Horizon Pacific Staffing', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.' },
  { name: 'Alex Behrens', role: 'Client since Oct 2024', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.' },
  { name: 'Aisha Wonderfull', role: 'CEO, Publishing Startup', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.' },
  { name: 'Owen Hone', role: 'Multiple Hire Client', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.' },
  { name: 'Sarah Jacoby', role: 'Client', quote: 'Great communication, efficient and proactive assistant, visible business growth.' },
  { name: 'Martine Cadet', role: 'Client', quote: 'The team learned my brand and goals and transformed my business. My dream team.' },
  { name: 'Rich Cochran', role: 'Client', quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.' },
  { name: 'George Assi', role: '2-Year Partner', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.' },
  { name: 'Kevin Carabajal', role: 'Client', quote: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.' },
] as const;

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const headingId = contact ? 'contact-client-reviews' : 'booking-client-reviews';
  return <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={headingId}>
    <div className="sa-testimonial-heading"><span aria-hidden="true">★★★★★</span><h2 id={headingId}>StealthAgents reviews</h2></div>
    <p className="sa-testimonial-disclosure">Published review excerpts from the official Stealth Agents website. Individual experiences are not performance guarantees.</p>
    <div className="sa-testimonial-viewport" role="region" aria-label="StealthAgents client review marquee" tabIndex={0}>
      <div className="sa-testimonial-track">
        {approvedTestimonials.map((review) => <article className="sa-testimonial-card" key={review.name}>
          <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
          <blockquote>&ldquo;{review.quote}&rdquo;</blockquote><p>{review.name}</p><small>{review.role}</small>
        </article>)}
      </div>
    </div>
    <p className="sa-testimonial-source">Source: <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Stealth Agents official homepage client reviews</a>.</p>
  </section>;
}
