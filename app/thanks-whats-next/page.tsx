import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Your Consultation Is Booked',
  description: 'Your Outsourced Employment consultation has been booked.',
  alternates: { canonical: 'https://outsourcedemployment.com/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header /><main id="main-content" className="confirmation-page"><section className="confirmation-card" aria-labelledby="confirmation-title"><img src="/logo.svg" width="82" height="82" alt="Outsourced Employment logo" /><p className="eyebrow">Booking confirmed</p><h1 id="confirmation-title">Your consultation is on the calendar.</h1><p>Thank you for scheduling time with the team. Please bring the recurring workflows, systems, deadlines, and review boundaries you want to discuss.</p><div className="confirmation-actions"><a className="btn primary" href="/services">Explore services</a><a href="/">Return home</a></div></section></main><Footer /></>;
}
