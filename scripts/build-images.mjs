// Image pipeline: PNG -> WebP at two widths + 1200x630 OG JPGs.
// Run via `npm run images` (also runs automatically before `npm run build`).

import sharp from 'sharp';
import { mkdir, readdir, access } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageMap, ogMap } from './image-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const SRC = path.join(root, 'public', 'assets');
const OPT = path.join(root, 'public', 'assets', 'opt');
const OG = path.join(root, 'public', 'og');
const ICONS = path.join(root, 'public', 'icons');

const WIDTHS = [400, 800];
const HERO_WIDTHS = [800, 1600];
const HERO_SLUGS = new Set(['hero-elegance', 'hero-bridal', 'hero-custom']);
const WEBP_Q = 78;
const OG_Q = 82;

async function buildIcons() {
  const logo = path.join(SRC, 'logo.png');
  if (!existsSync(logo)) {
    console.warn('  ! logo.png missing — skipping PWA icons');
    return 0;
  }
  await mkdir(ICONS, { recursive: true });
  const bg = { r: 253, g: 252, b: 249, alpha: 1 }; // cream
  // Standard icons (logo contained on cream)
  for (const size of [192, 512]) {
    await sharp(logo)
      .resize(size, size, { fit: 'contain', background: bg })
      .png()
      .toFile(path.join(ICONS, `icon-${size}.png`));
  }
  // Maskable: extra safe-zone padding so launchers don't clip it
  await sharp(logo)
    .resize(360, 360, { fit: 'contain', background: bg })
    .extend({ top: 76, bottom: 76, left: 76, right: 76, background: bg })
    .resize(512, 512)
    .png()
    .toFile(path.join(ICONS, 'icon-maskable-512.png'));
  return 3;
}

async function main() {
  await mkdir(OPT, { recursive: true });
  await mkdir(OG, { recursive: true });

  let made = 0;
  let missing = 0;

  for (const [srcName, slug] of Object.entries(imageMap)) {
    const srcPath = path.join(SRC, srcName);
    if (!existsSync(srcPath)) {
      console.warn(`  ! missing source: ${srcName}`);
      missing++;
      continue;
    }
    const widths = HERO_SLUGS.has(slug) ? HERO_WIDTHS : WIDTHS;
    for (const w of widths) {
      const out = path.join(OPT, `${slug}-${w}.webp`);
      await sharp(srcPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: WEBP_Q })
        .toFile(out);
      made++;
    }
  }

  for (const { src, out } of ogMap) {
    const srcPath = path.join(SRC, src);
    if (!existsSync(srcPath)) {
      console.warn(`  ! missing OG source: ${src}`);
      missing++;
      continue;
    }
    await sharp(srcPath)
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
      .jpeg({ quality: OG_Q, mozjpeg: true })
      .toFile(path.join(OG, `${out}.jpg`));
    made++;
  }

  made += await buildIcons();

  console.log(`\n  Image pipeline done: ${made} files written` + (missing ? `, ${missing} missing` : '') + '.');
}

main().catch((err) => {
  console.error('Image pipeline failed:', err);
  process.exit(1);
});
