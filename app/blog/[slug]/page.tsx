import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header,Footer,CTA,JsonLd,LogoMark} from '../../components';
import {allBlogPosts,evidenceArticles,site} from '../../data';

export function generateStaticParams(){return allBlogPosts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const post=allBlogPosts.find(item=>item.slug===slug);
  if(!post)return {};
  const canonical=`https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  return {
    title:post.title,
    description:post.excerpt,
    alternates:{canonical},
    openGraph:{title:post.title,description:post.excerpt,url:canonical,type:'article',images:post.image?[{url:post.image,alt:post.title}]:undefined},
  };
}

function ArticleHeader(){
  return <header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark/></a><nav className="links article-nav" aria-label="Article navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact">Contact Us</a></nav></div></header>;
}

function ArticleFooter(){
  return <footer className="legit-footer"><div className="footer-grid article-footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark/></a><p>Plain guides for scoping and managing Philippines-based support roles.</p></div><div><h3>Read next</h3><div className="footer-links"><a href="/services/employee-records-management">Employee records support</a><a href="/services/new-hire-onboarding">New-hire onboarding</a><a href="/blog">Staffing guides</a></div></div><div><h3>Plan a role</h3><div className="footer-links"><a href="/services">Services</a><a href="/contact">Contact Us</a><a href="/privacy">Privacy policy</a></div></div></div><div className="footer-bottom"><span>© 2026 {site.brand}. All rights reserved.</span><span>Philippines-only talent sourcing</span></div></footer>;
}

function SourceLink({number,href}:{number:number;href:string}){
  return <a className="source-ref" href={href} target="_blank" rel="noreferrer" aria-label={`Source ${number}`}>[{number}]</a>;
}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=allBlogPosts.find(item=>item.slug===slug);
  if(!post)notFound();
  const article=evidenceArticles[slug];
  const url=`https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  const publishedDate = 'publishedDate' in post && typeof post.publishedDate === 'string' ? post.publishedDate : '2026-08-07';

  if(!article){
    return <><Header/><main className="section"><JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:post.title,description:post.excerpt,url,image:post.image,datePublished:publishedDate,citation:['https://www.nist.gov/cyberframework','https://www.cisa.gov/secure-our-world/use-strong-passwords']}}/><article className="container guide-article"><p className="eyebrow">Philippines staffing blog · <time dateTime={publishedDate}>Published {publishedDate}</time></p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{post.image&&<img src={post.image} alt={`Illustration for ${post.title}`} width="1200" height="675" style={{width:'100%',height:'auto',borderRadius:'18px'}}/>}<div className="card"><h2>Define the work before the hire</h2><p>Write the recurring tasks, examples, tools, schedule, and approval boundaries before a Filipino specialist begins. A clear role lets you compare a staffing provider, an employer-of-record arrangement, and direct management on the work that actually needs doing.</p><h2>Build a controlled handoff</h2><p>Begin with low-risk samples and only the permissions required for the approved Philippines-based workload. Use named accounts and multifactor authentication. The <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST Cybersecurity Framework</a> and <a href="https://www.cisa.gov/secure-our-world/use-strong-passwords" target="_blank" rel="noreferrer">CISA password guidance</a> are useful control references; they do not replace advice for your specific situation.</p><h2>Review outputs and keep decisions visible</h2><p>Use a weekly check of completed work, open decisions, and changing priorities. The specialist can prepare records, drafts, and reports; your named manager should retain approvals, exceptions, spending, policy calls, and sensitive employee decisions.</p><h2>Next step</h2><p>Turn this article into a one-page role brief, then review the <a href="/services">employment support services</a> and <a href="/contact">send the task list to Outsourced Employment</a> for a scoped staffing conversation.</p></div><p className="article-date">Sources: <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST CSF 2.0</a> · <a href="https://www.cisa.gov/secure-our-world/use-strong-passwords" target="_blank" rel="noreferrer">CISA</a></p></article><CTA/></main><Footer/></>;
  }

  const articleSchema={
    '@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,url,
    datePublished:publishedDate ?? '2026-07-25',dateModified:publishedDate ?? '2026-07-25',
    author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand},
    citation:article.sources.map(source=>source.url),
  };
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:article.faqs.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))};
  const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:`https://${String(site.domain).toLowerCase()}`},
    {'@type':'ListItem',position:2,name:'Blog',item:`https://${String(site.domain).toLowerCase()}/blog`},
    {'@type':'ListItem',position:3,name:post.title,item:url},
  ]};

  return <>
    <ArticleHeader/>
    <main className="section rich-article-page">
      <JsonLd data={articleSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/>
      <article className="container article-wrap evidence-article" data-article-marker="philippines-hr-records-access-2026">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>HR records assistant</span></nav>
        <p className="eyebrow">Philippines staffing guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt} This guide gives you a task split, access map, work sample, and exit list you can use before a hire begins.</p>
        <p className="article-date"><time dateTime={publishedDate}>Published {publishedDate}</time> · Reviewed {article.updated} · Evidence checked against the numbered sources below.</p>

        <section className="evidence-card" aria-labelledby="takeaways-title"><h2 id="takeaways-title">What to keep from this guide</h2><ul>{article.takeaways.map(item=><li key={item}>{item}</li>)}</ul></section>

        <section className="stat-band" aria-label="Philippines workforce context">
          {article.stats.map(stat=><div className="stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note} <SourceLink number={stat.source} href={article.sources[stat.source-1].url}/></small></div>)}
        </section>

        {article.sections.slice(0,2).map(section=><section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}

        <figure className="chart-card" aria-labelledby="internet-chart-title internet-chart-note">
          <svg viewBox="0 0 720 310" role="img" aria-labelledby="internet-chart-title internet-chart-desc">
            <title id="internet-chart-title">Share of people using the internet in the Philippines, 2020 to 2023</title>
            <desc id="internet-chart-desc">Four labeled bars rise from 53.8 percent in 2020 to 77.9 percent in 2023.</desc>
            <line x1="72" y1="250" x2="690" y2="250" className="chart-axis"/>
            {article.chart.map((point,index)=>{const height=point.value*2.25;const x=100+index*150;const y=250-height;return <g key={point.year}><rect x={x} y={y} width="88" height={height} rx="8" className="chart-bar"/><text x={x+44} y={y-12} textAnchor="middle" className="chart-value">{point.value}%</text><text x={x+44} y="278" textAnchor="middle" className="chart-year">{point.year}</text></g>})}
          </svg>
          <figcaption id="internet-chart-note"><strong>What the chart shows:</strong> Internet use rose across these four published observations. <strong>Method:</strong> World Bank indicator IT.NET.USER.ZS for the Philippines, values rounded to one decimal place; accessed July 25, 2026. <SourceLink number={1} href={article.sources[0].url}/></figcaption>
        </figure>

        <aside className="article-banner" data-banner="1"><p>{article.banners[0].eyebrow}</p><h2>{article.banners[0].title}</h2><span>{article.banners[0].body}</span><a href={article.banners[0].href}>{article.banners[0].label}</a></aside>

        {article.sections.slice(2,3).map(section=><section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}

        <section className="table-section" aria-labelledby="task-split-title"><h2 id="task-split-title">Task and decision split</h2><p className="module-intro">Use this as a starting map, then match it to your own policy and systems. The manager column stays with the person who has authority to make the employee decision.</p><p className="scroll-cue">Swipe the table sideways to see every column.</p><div className="table-scroll" tabIndex={0}><table><thead><tr><th>Record lane</th><th>Assistant prepares</th><th>Manager keeps</th></tr></thead><tbody>{article.taskTable.map(row=><tr key={row.work}><th scope="row">{row.work}</th><td>{row.assistant}</td><td>{row.manager}</td></tr>)}</tbody></table></div></section>

        {article.sections.slice(3,4).map(section=><section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph,index)=><p key={paragraph}>{paragraph}{index===1&&<> <SourceLink number={5} href={article.sources[4].url}/></>}</p>)}</section>)}

        <blockquote className="expert-quote"><p>"{article.expertQuote.quote}"</p><footer>{article.expertQuote.person}, {article.expertQuote.role}, {article.expertQuote.date} <SourceLink number={article.expertQuote.source} href={article.sources[article.expertQuote.source-1].url}/></footer></blockquote>

        <aside className="article-banner" data-banner="2"><p>{article.banners[1].eyebrow}</p><h2>{article.banners[1].title}</h2><span>{article.banners[1].body}</span><a href={article.banners[1].href}>{article.banners[1].label}</a></aside>

        {article.sections.slice(4,5).map(section=><section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}

        <figure className="handoff-card" aria-labelledby="handoff-title"><h2 id="handoff-title">A four-stop record path</h2><div className="handoff-graphic" role="img" aria-label="A request moves to assistant check, manager review, and final record filing">{article.handoffSteps.map((item,index)=><div className="handoff-step" key={item.step}><strong>{item.step}</strong><h3>{item.title}</h3><p>{item.text}</p>{index<article.handoffSteps.length-1&&<span aria-hidden="true">→</span>}</div>)}</div><figcaption>This separate path graphic keeps preparation and approval visible. If a request skips the owner review stop, it should not reach the final record.</figcaption></figure>

        {article.sections.slice(5).map(section=><section className="article-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}

        <section className="script-grid" aria-labelledby="scripts-title"><h2 id="scripts-title">Two messages the assistant can copy</h2>{article.scripts.map(script=><div className="script-card" key={script.title}><h3>{script.title}</h3><blockquote>"{script.text}"</blockquote></div>)}</section>

        <section className="related-card"><h2>Keep planning the role</h2><p>Read the <a href="/services/employee-records-management">employee records support page</a> for the core service lane. Then use the <a href="/services/new-hire-onboarding">new-hire onboarding guide</a> and <a href="/services/candidate-sourcing-coordination">candidate sourcing page</a> to connect the work sample to the wider hiring plan.</p></section>

        <section className="faq-section" aria-labelledby="faq-title"><h2 id="faq-title">Questions managers ask</h2><div className="faq-list">{article.faqs.map(faq=><div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div></section>

        <aside className="article-banner" data-banner="3"><p>{article.banners[2].eyebrow}</p><h2>{article.banners[2].title}</h2><span>{article.banners[2].body}</span><a href={article.banners[2].href}>{article.banners[2].label}</a></aside>

        <section className="source-list" aria-labelledby="sources-title"><h2 id="sources-title">Numbered sources</h2><ol>{article.sources.map((source,index)=><li id={`source-${index+1}`} key={source.url}><a href={source.url} target="_blank" rel="noreferrer">[{index+1}] {source.name}</a><p>{source.note}</p></li>)}</ol></section>
      </article>
    </main>
    <ArticleFooter/>
  </>;
}
