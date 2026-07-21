import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedemployment.com'), title: { default: 'Outsourced Employment | Philippines staffing guides', template: '%s | Outsourced Employment' }, description: 'Independent guides to hiring Filipino talent, planning roles, comparing providers, and onboarding.', openGraph: { title: 'Outsourced Employment', description: 'Plain-language guides for planning roles and hiring Filipino talent through Philippines staffing providers.', url: 'https://outsourcedemployment.com', siteName: 'Outsourced Employment', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
