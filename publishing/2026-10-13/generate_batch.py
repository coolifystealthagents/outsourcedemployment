from pathlib import Path
import json, textwrap, html

ROOT=Path(__file__).resolve().parents[2]
DATE='2026-10-13'
blogs=[
('Verify New Hire Tax Form Receipt','new-hire-tax-form-receipt-verification','tax form receipt verification','form identity, secure receipt, completeness flags, and authorized payroll review'),
('Route Employment Verification Requests','employment-verification-request-routing','employment verification routing','requester identity, worker consent, permitted fields, and response ownership'),
('Control Candidate Background Check Handoffs','candidate-background-check-handoff-control','background check handoffs','candidate notice, provider references, exception state, and authorized adjudication'),
('Reconcile Employee Name Change Records','employee-name-change-record-reconciliation','employee name change reconciliation','source documents, system destinations, effective dates, and confirmation evidence'),
('Document Remote Work Location Changes','remote-work-location-change-documentation','remote work location changes','employee notice, policy owner review, location effective date, and downstream routing'),
('Close Dormant Contractor Access','dormant-contractor-access-closure','contractor access closure','engagement status, system inventory, removal receipts, and residual exceptions'),
('Prepare Benefits Enrollment Correction Packets','benefits-enrollment-correction-packet','benefits enrollment corrections','employee request, plan channel, correction evidence, and privacy boundaries'),
('Track Mandatory Training Renewal Notices','mandatory-training-renewal-notice-tracking','training renewal notices','controlling requirement, recipient list, delivery evidence, and overdue escalation'),
('Verify Overtime Approval Evidence','overtime-approval-evidence-verification','overtime approval evidence','request chronology, authorized approver, time records, and unresolved conflicts'),
('Handoff Parental Leave Schedule Updates','parental-leave-schedule-update-handoff','parental leave schedule handoffs','approved schedule, minimum disclosure, coverage owner, and receipt confirmation'),
('Control Employee File Export Requests','employee-file-export-request-control','employee file export requests','request authority, field scope, secure delivery, and disposal evidence'),
('Reconcile Offboarding Asset Exceptions','offboarding-asset-exception-reconciliation','offboarding asset exceptions','asset identifiers, custody status, return evidence, and loss escalation'),
]
research=[
('Measure Employment Verification Turnaround Denominators','employment-verification-turnaround-denominator-study','employment verification turnaround','eligible requests, valid starts, paused time, and verified completion'),
('Study Record Correction Rework Rates','employee-record-correction-rework-study','employee record correction rework','correction episodes, reopened destinations, root causes, and verified closure'),
('Analyze Manager Approval Queue Aging','manager-approval-queue-aging-analysis','manager approval queue aging','entry events, responsibility time, pause codes, and censored cases'),
('Measure Onboarding Access Reviewer Agreement','onboarding-access-reviewer-agreement-study','onboarding access reviewer agreement','independent classifications, disagreement types, and adjudication evidence'),
('Review Employee Data Minimization Exceptions','employee-data-minimization-exception-review','employee data minimization exceptions','purpose statements, field necessity, access scope, and retention decisions'),
]

blog_sources=[
{'name':'Philippine Supreme Court E-Library — Data Privacy Act of 2012','url':'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html'},
{'name':'National Privacy Commission — Data Privacy Act','url':'https://privacy.gov.ph/data-privacy-act/'},
{'name':'Department of Labor and Employment — Labor Advisories','url':'https://www.dole.gov.ph/labor-advisories/'},
{'name':'NIST — Privacy Framework','url':'https://www.nist.gov/privacy-framework'},
]
research_sources=blog_sources+[
{'name':'Philippine Supreme Court E-Library — Labor Code','url':'https://lawphil.net/statutes/presdecs/pd1974/pd_442_1974.html'},
{'name':'NIST — Cybersecurity Framework 2.0','url':'https://www.nist.gov/cyberframework'},
{'name':'CISA — Identity and Access Management','url':'https://www.cisa.gov/topics/cybersecurity-best-practices/identity-and-access-management'},
{'name':'International Labour Organization — Philippines','url':'https://www.ilo.org/regions-and-countries/asia-and-pacific/philippines'},
{'name':'OECD — Privacy Guidelines','url':'https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0188'},
{'name':'World Bank — Philippines Data','url':'https://data.worldbank.org/country/philippines'},
]

blog_steps=[
('purpose and boundary','Begin with one narrow administrative outcome and state what the coordinator cannot decide. Separate evidence collection, preparation, authorized review, execution, communication, and verification so a completed preparation step is never mistaken for an employment decision or destination-system result.'),
('intake identity','Open a stable case only after the requester, affected worker, organization, effective period, and approved channel are identified. Preserve the original instruction and mark missing values as unknown. An urgent message should not replace identity checks or the normal authorization path.'),
('source hierarchy','Name the controlling system or responsible office for each field. Record a retrieval time and retain a link or reference rather than copying sensitive content into a general queue. When two sources conflict, preserve both and route the exact discrepancy to the authorized owner.'),
('minimum access','Give each participant only the fields and actions required for their role. Named accounts, multifactor authentication, controlled exports, and reviewable access changes make the handoff observable. A coordinator who checks evidence does not need authority to impersonate a worker or approve an exception.'),
('workflow states','Use bounded states for received, source checked, awaiting owner, approved, executed, independently verified, conditionally closed, and closed. Attach timestamps and owners to transitions. A single done flag hides whether the destination changed or whether someone merely sent a message.'),
('exception handling','Create reason codes for missing evidence, identity mismatch, conflicting source, unavailable owner, system outage, privacy review, and out-of-scope work. Every exception needs an owner, next-check time, and safe stopping rule. Never manufacture a value to make a deadline.'),
('review and release','Before release, compare the prepared record with the source, approved audience, and destination. A second reviewer should reconstruct why the action is permitted and what remains uncertain. Return unclear records rather than allowing persuasive prose to substitute for evidence.'),
('delivery evidence','Record the destination, delivery time, version, and receipt or system state that demonstrates the intended handoff. Email sent status alone may not prove receipt or execution. If verification is unavailable, disclose the limitation and keep ownership explicit.'),
('privacy and retention','Keep public or operational metadata separate from protected employee records. Limit downloads, avoid credentials and signatures in trackers, and assign disposal dates to temporary working copies. The coordination board should not become an unapproved duplicate personnel file.'),
('quality measurement','Report counts with denominators and separate coordinator time, owner waiting time, system delay, rework, and incorrect closure. Sample ordinary and exceptional cases. A fast average can conceal a serious overdue item, while high throughput can conceal repeated corrections.'),
('escalation','Route questions affecting legal interpretation, employment status, pay, benefits eligibility, health, safety, accessibility, security, or binding commitments to qualified owners. The administrative record should frame a precise question and preserve attempts to resolve it, not make the judgment itself.'),
('completion standard','Close only when current evidence, required approval, destination state, communication, and next ownership can be reconstructed. Reopen after a material policy, system, schedule, identity, or scope change. Activity without verifiable outcome is not sufficient completion evidence.'),
]

research_steps=[
('Research question','Define one bounded process question and distinguish operational evidence from employee or business outcomes. The protocol cannot determine legal entitlement, policy correctness, provider quality, or the merits of an individual employment decision.'),
('Population and window','Freeze the eligible population, observation dates, time zone, systems, and inclusion and exclusion rules before examining results. Reconcile opening cases, additions, removals, withdrawals, completions, and unresolved ending cases so the denominator cannot be selected after outcomes are known.'),
('Unit of analysis','Choose whether one unit is a worker, request, approval, field, destination, or correction episode. Linked events must not be counted as independent successes. State how cross-period cases and multiple destinations are handled before calculating any rate.'),
('Data dictionary','Record a pseudonymous case key, source class, observation timestamp, eligibility, state, owner, pause reason, destination evidence, reviewer, and adjudication result. A blank, an unavailable source, and a confirmed negative state need distinct codes.'),
('Collection protocol','Use a dated source inventory and preserve the version available when an action occurred. Collect on a fixed cadence, distinguish scheduled observations from incident-triggered checks, and document deviations. Do not evade access controls or import private records merely because they are convenient.'),
('Reviewer training','Train reviewers on cases outside the analytic sample and capture their first independent classifications before discussion. Compare factual disagreement separately from authority or severity disagreement. Adjudication should add evidence rather than erase the initial result.'),
('Primary measures','Lock numerator, denominator, elapsed-time start and stop rules, pause treatment, and unresolved-case treatment. Report counts beside rates, medians beside ranges, and age bands beside averages. Show censored observations instead of silently converting them to failures or successes.'),
('Quality controls','Check source completeness, timestamp meaning, impossible sequences, duplicated identifiers, missing destinations, and post-observation edits. Investigate anomalies manually. Automated validation can expose inconsistencies but cannot decide whether differently worded employment facts are substantively equivalent.'),
('Sensitivity analysis','Repeat calculations under reasonable alternate cutoffs, pause rules, and missing-evidence treatments. Separate incident-triggered observations and test whether a few extreme cases drive the conclusion. If findings change materially, disclose that fragility.'),
('Privacy and security','Use purpose limitation, least privilege, controlled exports, logged access, and predetermined retention. Keep the identity crosswalk separately where authorized. The analytic file should contain only fields needed for the frozen protocol and should never expose employee narratives in public results.'),
('Limitations','Administrative systems may lag and unrecorded work may exist. Policy, workload, system design, manager availability, and case difficulty can change together. The sample may not represent later periods or other populations, and association cannot establish intent or causation.'),
('Governance and stopping rules','Name a protocol owner, data custodian, operational owner, privacy or security reviewer, and remediation decision maker. Pause for unauthorized disclosure, unsafe access, action without approval, source corruption, or loss of promised confidentiality, and resume only under a documented decision.'),
('Operational interpretation','Convert findings into recheck intervals, clearer evidence fields, ownership maps, and exception routes rather than rankings. Corrective actions need an accountable owner, due date, implementation record, verification method, and residual limitation, followed by a fresh resample.'),
('Reporting','Publish the case flow, counts, denominators, exclusions, unresolved cases, observation coverage, deviations, sensitivity results, and limitations together. Aggregate results sufficiently to avoid identifying workers and keep claims within the tested population, systems, period, and definitions.'),
]

def blog_item(title,slug,topic,focus,i):
    body=[]
    for n,(label,text) in enumerate(blog_steps,1):
        body.append(f'For {title}, control {i+1}.{n} addresses {label}. {text} In this {topic} lane, the reviewer specifically tests {focus}, records the current jurisdiction and policy owner, and leaves a traceable reason whenever the record cannot advance.')
    body += [f'{title} should be tested with one normal case, one incomplete case, and one deliberately conflicting case using fictional or masked data. A second reviewer should recover the source, authority, action, stop reason, and destination evidence without relying on memory. Any disagreement becomes a workflow defect to correct before expansion.',f'The practical result for {title} is a reproducible handoff rather than an administrative guess. This guide provides general operational information, not legal, tax, payroll, benefits, security, or employment advice. Organizations should adapt the control with qualified owners for applicable contracts, policies, systems, and jurisdictions.']
    return {'slug':slug,'title':title,'excerpt':f'A controlled employment-support workflow for {topic}, covering {focus}.','minutes':11,'image':f'/oct13-heroes/{slug}.svg','cta':'/services/employee-records-management','sources':blog_sources,'body':body,'publishedDate':DATE}

def research_item(title,slug,topic,measure,i):
    body=[]
    for n,(label,text) in enumerate(research_steps,1):
        body.append(f'In {title}, protocol stage {i+1}.{n} defines {label.lower()}. {text} This stage specifically measures {measure} for the {topic} question and retains the reviewer, observation window, exception state, and source reference needed for independent reconstruction.')
    body += [f'The protocol for {title} concludes only after the data, codebook, exclusions, denominator, unresolved cases, alternate calculations, and limitations can be reviewed together. Its purpose is disciplined uncertainty: improving employment-support controls without converting administrative observations into claims about a worker, employer, provider, or legal outcome.']
    for n,s in enumerate(research_sources,1): body.append(f'For {title}, source {n} is {s["name"]} | {s["url"]}')
    return {'slug':slug,'title':title,'excerpt':f'A source-linked protocol for {topic}, measuring {measure} with explicit limitations and governance.','publishedDate':DATE,'image':f'/oct13-heroes/{slug}.svg','sources':research_sources,'body':body,'handoff':{'href':'/services/workforce-reporting','label':'Review the related employment-support service','body':'Use this protocol to define evidence, administrative work, stop rules, owner decisions, and verification before releasing the support lane.'}}

blog=[blog_item(*x,i) for i,x in enumerate(blogs)]
res=[research_item(*x,i) for i,x in enumerate(research)]
(ROOT/'app/blog/oct13-batch.ts').write_text('export const october13BlogBatch='+json.dumps(blog,indent=2,ensure_ascii=False)+' as const;\n')
(ROOT/'app/research/oct13-research-batch.ts').write_text('export const october13ResearchBatch='+json.dumps(res,indent=2,ensure_ascii=False)+' as const;\n')

out=ROOT/'public/oct13-heroes'; out.mkdir(parents=True,exist_ok=True)
for idx,item in enumerate(blog+res):
    family='RESEARCH' if idx>=12 else 'BLOG'
    lines=textwrap.wrap(item['title'],24)
    ys=[245+(j-(len(lines)-1)/2)*62 for j in range(len(lines))]
    tspans=''.join(f'<tspan x="82" y="{int(y)}">{html.escape(line)}</tspan>' for line,y in zip(lines,ys))
    hue=['#0f3d5e','#173f35','#4a234f','#3b3420','#18385a'][idx%5]
    accent=['#38bdf8','#34d399','#f472b6','#fbbf24','#a78bfa'][idx%5]
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">{html.escape(item['title'])}</title><desc id="desc">Outsourced Employment {family.lower()} article thumbnail</desc><rect width="1200" height="630" rx="28" fill="{hue}"/><circle cx="1060" cy="85" r="250" fill="{accent}" opacity=".42"/><circle cx="1100" cy="600" r="270" fill="#9333ea" opacity=".32"/><rect x="62" y="54" width="1076" height="522" rx="30" fill="#110827" opacity=".86"/><rect x="82" y="88" width="230" height="50" rx="25" fill="{accent}"/><text x="197" y="121" text-anchor="middle" fill="#07111f" font-family="Arial,sans-serif" font-size="22" font-weight="700">{family}</text><text fill="white" font-family="Arial,sans-serif" font-size="46" font-weight="700">{tspans}</text><text x="84" y="530" fill="#e9d5ff" font-family="Arial,sans-serif" font-size="28">OutsourcedEmployment.com</text></svg>'''
    (out/f'{item["slug"]}.svg').write_text(svg)

manifest={'domain':'OutsourcedEmployment.com','canonicalDomain':'https://outsourcedemployment.com','repository':'coolifystealthagents/outsourcedemployment','branch':'main','baseSha':'9d4f16537fb15961e28f4b0dac59d69c4f05ccd8','publicationDate':DATE,'blog':[{'title':x['title'],'slug':x['slug'],'sourcePath':'app/blog/oct13-batch.ts','thumbnailPath':f'public/oct13-heroes/{x["slug"]}.svg','route':f'/blog/{x["slug"]}'} for x in blog],'research':[{'title':x['title'],'slug':x['slug'],'sourcePath':'app/research/oct13-research-batch.ts','thumbnailPath':f'public/oct13-heroes/{x["slug"]}.svg','route':f'/research/{x["slug"]}'} for x in res],'registryPaths':['app/data.ts'],'routePaths':['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx'],'indexPaths':['app/blog/page.tsx','app/research/page.tsx'],'sitemapPath':'app/sitemap.xml/route.ts'}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('generated',len(blog),len(res))
