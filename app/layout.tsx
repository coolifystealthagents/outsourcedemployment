import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedemployment.com'), title: { default: 'Outsourced Employment | Employment model and staffing guides', template: '%s | Outsourced Employment' }, description: 'Independent guides to outsourced employment models, role planning, provider questions, and remote team onboarding.', openGraph: { title: 'Outsourced Employment', description: 'Plain-language guides for choosing an employment model and planning a remote role.', url: 'https://outsourcedemployment.com', siteName: 'Outsourced Employment', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
