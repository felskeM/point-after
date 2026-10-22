import { mkdir, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const source = 'public/images';
const output = 'public/gallery-images';
await Promise.all(['thumb', 'full'].map((size) => mkdir(join(output, size), { recursive: true })));
const files = (await readdir(source)).filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name));
// Limit memory use when processing the original high-resolution photographs.
for (const name of files) {
  const input = join(source, name);
  const modified = (await stat(input)).mtimeMs;
  for (const [size, width, quality] of [['thumb', 720, 76], ['full', 1800, 85]]) {
    const target = join(output, size, `${name}.webp`);
    const cached = await stat(target).catch(() => null);
    if (cached && cached.mtimeMs >= modified) continue;
    await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(target);
  }
}
console.log(`Prepared previews and larger views for ${files.length} gallery photos.`);
