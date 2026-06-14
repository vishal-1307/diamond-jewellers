// Pure "Saved Designs" (wishlist) helpers — safe to import from islands and
// scripts alike (no DOM side effects beyond reading/writing localStorage and
// dispatching a 'cart-changed' event).

export interface SavedItem {
  id: string;
  name: string;
  image: string; // slug
}

const KEY = 'cart';

export function getSaved(): SavedItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function setSaved(items: SavedItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart-changed'));
}

export function isSaved(id: string) {
  return getSaved().some((i) => i.id === id);
}

export function toggleSaved(item: SavedItem) {
  const items = getSaved();
  const idx = items.findIndex((i) => i.id === item.id);
  if (idx >= 0) items.splice(idx, 1);
  else items.push(item);
  setSaved(items);
}

export function removeSaved(id: string) {
  setSaved(getSaved().filter((i) => i.id !== id));
}
