import { Footer, Header } from './components';

export default function NotFound() {
  return <><Header /><main id="main-content" className="not-found-page"><section><img src="/logo.svg" width="88" height="88" alt="Outsourced Employment logo" /><p className="eyebrow">Page not found</p><h1>This page is no longer on the hiring map.</h1><p>The address may have changed. Use one of these routes to continue planning your support role.</p><div><a className="btn primary" href="/">Go home</a><a className="btn" href="/services">View services</a><a href="/contact-us">Contact Us</a></div></section></main><Footer /></>;
}
