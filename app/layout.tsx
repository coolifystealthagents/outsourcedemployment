import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedemployment.com'), title: { default: 'Outsourced Employment | Offshore outsourcing guides', template: '%s | Outsourced Employment' }, description: 'Stealth Agents-style guides for outsourced employment: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsourced Employment', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedemployment.com', siteName: 'Outsourced Employment', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
