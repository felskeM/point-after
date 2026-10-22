import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const files = readdirSync('dist', { recursive: true }).filter((file) => file.endsWith('.html'));
assert(files.length >= 7, 'Build all pages before verification');
for (const file of files) {
  const html = readFileSync(join('dist', file), 'utf8');
  assert(!/<(?:script|iframe|form|style)\b/i.test(html), `${file}: unexpected script, embed, form or inline style`);
  assert(!/\sstyle=/i.test(html), `${file}: inline styles violate CSP`);
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${file}: expected one main landmark`);
  assert(html.includes('id="main-content"'), `${file}: missing skip target`);
  for (const [, attr, url] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (attr === 'src') assert(url.startsWith('/'), `${file}: external asset ${url}`);
    if (url.startsWith('#')) {
      assert(html.includes(`id="${url.slice(1)}"`), `${file}: missing anchor ${url}`);
    } else if (url.startsWith('/') && !url.startsWith('//')) {
      const [pathname, fragment] = url.split('#');
      const target = join('dist', pathname.replace(/^\//, ''));
      const actual = pathname.endsWith('/') ? join(target, 'index.html') : target;
      assert(existsSync(actual), `${file}: missing local resource ${url}`);
      if (fragment) assert(readFileSync(actual, 'utf8').includes(`id="${fragment}"`), `${file}: missing linked anchor ${url}`);
    }
  }
}
for (const file of ['_headers', '_redirects', 'robots.txt', 'sitemap.xml', '404.html']) {
  assert(existsSync(join('dist', file)), `Missing deployment artifact ${file}`);
}
assert(readFileSync('dist/_headers', 'utf8').includes("script-src 'none'"));
const gallery = readFileSync('dist/gallery/index.html', 'utf8');
const photos = readdirSync('public/images').filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name));
for (const photo of photos) {
  assert(gallery.includes(`/gallery-images/thumb/${photo}.webp`), `Gallery missing ${photo}`);
  assert(gallery.includes(`/gallery-images/full/${photo}.webp`), `Gallery missing larger view for ${photo}`);
}
const home = readFileSync('dist/index.html', 'utf8');
const header = home.match(/<header\b[\s\S]*?<\/header>/)?.[0] || '';
assert(header.includes('href="/gallery/"') && header.includes('href="/touchback-program/"'), 'New pages must be in header');
assert(!header.includes('href="/luxury-box/"'), 'Luxury Box must not be in header');
assert(home.match(/<section id="events-new"[\s\S]*?<\/section>/)?.[0].includes('href="/luxury-box/"'), 'Events must link to Luxury Box');
console.log(`Verified ${files.length} pages: local links, anchors, privacy constraints, and deployment artifacts.`);
