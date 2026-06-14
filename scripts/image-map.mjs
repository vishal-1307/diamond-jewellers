// Maps source PNG filenames (in public/assets/) to clean output slugs.
// Used by both the image pipeline and as the canonical list of images.
// Typo'd source names are corrected here once, so the rest of the app
// only ever references clean slugs.

export const imageMap = {
  // — Hero / lifestyle —
  'Hero129.png': 'hero-elegance',
  'hero_bridal_set.png': 'hero-bridal',
  'hero_custom_design.png': 'hero-custom',
  'crafting a piece.png': 'crafting',
  'jewellery store.png': 'store-interior',
  'custom diamond filigree design,.png': 'custom-filigree',
  'logo.png': 'logo',
  'model wearing necklace ring bangle.png': 'model-jewellery',
  'pendant necklace.png': 'pendant-necklace',
  'portrait of a woman wearing a diamond necklace.png': 'portrait-necklace',

  // — Product images —
  'gold_necklace.png': 'gold-necklace',
  'gold pendant.png': 'gold-pendant',
  'gold bangles.png': 'gold-bangles',
  'et of polished gold bangles stacked.png': 'gold-bangles-stacked',
  'emerald_earrings.png': 'emerald-earrings',
  'diamond_studs.png': 'diamond-studs',
  'gold_ring.png': 'gold-ring',
  'set (necklace, earrings, maang tikka).png': 'bridal-set-tikka',
  'set (necklace + earrings + ring).png': 'bridal-set-ring',
  'solatire diamond ring.png': 'solitaire-diamond-ring',
  'diamond rings.png': 'diamond-rings',
  'diamond stdd earing.png': 'diamond-stud-earrings',
  'emrald stud earings.png': 'emerald-stud-earrings',
  'solatire pendant.png': 'solitaire-pendant',
  'silver_bangles.png': 'silver-bangles',
  'pearl_necklace.png': 'pearl-necklace',
  'ingle-strand pearl necklace.png': 'pearl-necklace-strand',
  'platinum_ring.png': 'platinum-ring',
};

// 1200x630 social-share images (JPG for max platform compatibility).
export const ogMap = [
  { src: 'Hero129.png', out: 'default' },
  { src: 'set (necklace, earrings, maang tikka).png', out: 'collections' },
  { src: 'custom diamond filigree design,.png', out: 'custom' },
];

// Source files intentionally NOT carried over (unused / dead weight).
export const dropped = ['diamori.png', 'hero.png'];
