// Resolve a clean image slug to optimized WebP assets produced by
// scripts/build-images.mjs. Two widths are emitted: 400 (thumb) and 800 (full).

const BASE = '/assets/opt';

export const imgThumb = (slug: string) => `${BASE}/${slug}-400.webp`;
export const imgFull = (slug: string) => `${BASE}/${slug}-800.webp`;
export const imgSrcset = (slug: string) =>
  `${imgThumb(slug)} 400w, ${imgFull(slug)} 800w`;

// Default `sizes` for a 2-col mobile / 3-4-col desktop grid.
export const cardSizes = '(min-width: 1024px) 280px, (min-width: 768px) 33vw, 50vw';

// Hero images get an extra 1600px tier for full-bleed desktop.
export const imgHero = (slug: string) => `${BASE}/${slug}-1600.webp`;
export const heroSrcset = (slug: string) =>
  `${imgFull(slug)} 800w, ${imgHero(slug)} 1600w`;
