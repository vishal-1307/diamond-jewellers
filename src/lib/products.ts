// Product data layer. Canonical source is public/products.json (also served
// statically at /products.json for runtime consumers like the chatbot/search).
// NOTE: this catalogue is an enquiry showcase — there is intentionally NO price.

import data from '../../public/products.json';

export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  rating: number;
  image: string; // clean slug -> resolve with src/lib/img.ts
  weight: string | null;
  purity: string | null;
  isNew: boolean;
  isBestSeller: boolean;
  description: string;
}

export const products: Product[] = data as Product[];

// — Occasion derivation (powers the Occasion filter; kept in one place) —
const RE = {
  wedding: /\b(bridal|wedding|kundan|polki|jadau|mangalsutra|maang tikka|matha patti|haath phool|nath)\b/i,
  party: /\b(cocktail|statement|chandelier|tennis|hoop|drop|cluster)\b/i,
  spiritual: /\b(ganesh|\bom\b|cross|navratna|lakshmi|temple|coral|moonga)\b/i,
  daily: /\b(daily|everyday|minimal|lightweight|petite|stud|toe ring|nose pin)\b/i,
};

export function occasionsFor(p: Product): string[] {
  const hay = `${p.name} ${p.type} ${p.category} ${p.description}`;
  const occ = new Set<string>();
  if (p.category === 'Bridal' || p.type === 'Bridal Set' || RE.wedding.test(hay)) occ.add('Wedding');
  if (p.type === 'Coin') occ.add('Investment');
  if (RE.party.test(hay)) occ.add('Party');
  if (RE.spiritual.test(hay)) occ.add('Spiritual');
  if (RE.daily.test(hay)) occ.add('Daily');
  if (occ.size === 0) occ.add('Festive');
  return [...occ];
}

export const OCCASIONS = ['Daily', 'Festive', 'Wedding', 'Party', 'Spiritual', 'Investment'] as const;

export const CATEGORIES = ['Gold', 'Diamond', 'Silver', 'Platinum', 'Gemstone', 'Bridal'] as const;

export const TYPES = [...new Set(products.map((p) => p.type))].sort();

export const getById = (id: string) => products.find((p) => p.id === id);
export const bestSellers = (n = 8) => products.filter((p) => p.isBestSeller).slice(0, n);
export const newArrivals = (n = 8) => products.filter((p) => p.isNew).slice(0, n);

export function similarTo(p: Product, n = 4): Product[] {
  return products
    .filter((x) => x.id !== p.id && (x.category === p.category || x.type === p.type))
    .slice(0, n);
}

// Pre-computed list with occasions attached — handy for the client filter island.
export const productsWithMeta = products.map((p) => ({ ...p, occasions: occasionsFor(p) }));
