import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const page = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(page, /const organization=\{'@type':'Organization',name:site\.brand,url:`https:\/\/\$\{String\(site\.domain\)\.toLowerCase\(\)\}`\}/, 'research Article must derive one Organization identity from the on-site brand and canonical domain');
assert.match(page, /author:organization,publisher:organization/, 'research Article must use the same Organization for author and publisher');
assert.match(page, /articleUrl=`https:\/\/\$\{String\(site\.domain\)\.toLowerCase\(\)\}\/research\/\$\{p\.slug\}`/, 'research Article URL must use the canonical domain');

console.log('research schema identity contract passed');
