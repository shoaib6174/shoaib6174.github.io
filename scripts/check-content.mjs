// Post-build check: every internal href in dist/ must resolve to a built file.
// External hrefs are listed, not fetched (the inventory's link check covers them).
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const pages = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
})(dist);

const broken = [];
const external = new Set();
for (const f of pages) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let h = m[1];
    if (/^(https?:|mailto:|tel:|data:|#)/.test(h)) {
      if (/^https?:/.test(h)) external.add(h);
      continue;
    }
    h = h.split('#')[0].split('?')[0];
    if (!h) continue;
    const candidates = h.endsWith('/')
      ? [join(dist, h, 'index.html')]
      : [join(dist, h), join(dist, h, 'index.html'), join(dist, h + '.html')];
    if (!candidates.some((c) => existsSync(c))) broken.push(`${f} -> ${m[1]}`);
  }
}

if (broken.length) {
  console.error('Broken internal links:\n  ' + broken.join('\n  '));
  process.exit(1);
}
console.log(`checked ${pages.length} pages, ${external.size} distinct external links, no broken internal links`);
