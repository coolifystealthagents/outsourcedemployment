# Website refresh

Distinct brand layouts for Home, Services, dedicated service pages, Contact Us, Blog, and Research. The shared sticky navigation contains Home, Services, and Contact Us; the footer separates the site introduction and StealthAgents parent company.

Original article routes and content are retained. Article directories show existing thumbnail assets with searchable topics and pagination. Main page heroes use different licensed photographs. Photo sources are listed in refresh-photo-provenance.json.

The contact form validates server-side, opts out of automatic native ACR form tracking, emits one complete manual ACR lead after acceptance, and redirects to the existing booking page. No direct Mattermost calls remain in active lead handlers. In-flight and completed submissions are locked; failed validation, unavailable tracking, and honeypots emit no lead.

Validation: production build, generated-page/image checks, desktop/mobile card geometry and contrast checks, article filtering, and mocked accepted/rejected/unavailable-tracker/double-submit/honeypot cases. No test leads were sent to production.
