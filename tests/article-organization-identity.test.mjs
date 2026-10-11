import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const blogRenderer = read('app/blog/[slug]/page.tsx');
assert.match(blogRenderer, /const organization=\{'@type':'Organization',name:site\.brand,url:`https:\/\/\$\{String\(site\.domain\)\.toLowerCase\(\)\}`\};/);
assert.match(blogRenderer, /datePublished:publishedDate,author:organization,publisher:organization/);
assert.match(blogRenderer, /author:organization,publisher:organization,/);

const aug19Renderer = read('app/aug19-content.tsx');
assert.match(aug19Renderer, /const organization=\{'@type':'Organization',name:'Outsourced Employment',url:SITE\};/);
assert.match(aug19Renderer, /author:organization,publisher:organization/);

const comparisonPage = read('app/blog/top-30-staffing-employment-outsourcing-companies/page.tsx');
assert.match(comparisonPage, /author: \{ '@type': 'Organization', name: "Outsourced Employment", url: 'https:\/\/outsourcedemployment\.com' \}, publisher: \{ '@type': 'Organization', name: "Outsourced Employment", url: 'https:\/\/outsourcedemployment\.com' \}/);

console.log('article Organization identity contract passed');
