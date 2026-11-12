import {notFound} from 'next/navigation';
import {ServiceDetail} from '../../inner-pages';
import d from '../../refresh-data.json';
import {Header,Footer} from '../../components';
export function generateStaticParams(){return d.services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=d.services.find(x=>x.slug===slug);return s?{title:s.title,description:s.description,alternates:{canonical:'/services/'+slug},openGraph:{images:[{url:s.image,alt:s.alt}]}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=d.services.find(x=>x.slug===slug);if(!s)notFound();const schema={'@context':'https://schema.org','@graph':[{'@type':'Service',name:s.title,description:s.description,url:'https://outsourcedemployment.com/services/'+slug,provider:{'@type':'Organization',name:d.brand}},{'@type':'FAQPage',mainEntity:s.faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))}]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><main id="main-content"><ServiceDetail content={s}/></main><Footer/></>}
