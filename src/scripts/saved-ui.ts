// DOM wiring for "Saved Designs". Imported ONCE from BaseLayout. Handles the
// save-heart toggles, header badge, and initial heart paint. Pure data helpers
// live in src/lib/saved.ts (safe to import elsewhere).

import { getSaved, toggleSaved, isSaved } from '../lib/saved';

function updateBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const n = getSaved().length;
  if (n > 0) {
    badge.textContent = String(n);
    badge.classList.remove('hidden');
  } else {
    badge.textContent = '';
    badge.classList.add('hidden');
  }
}

function paintHearts() {
  document.querySelectorAll<HTMLElement>('[data-save]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(isSaved(btn.dataset.id!)));
  });
}

document.body.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-save]');
  if (!btn) return;
  e.preventDefault();
  toggleSaved({ id: btn.dataset.id!, name: btn.dataset.name!, image: btn.dataset.image! });
  btn.setAttribute('aria-pressed', String(isSaved(btn.dataset.id!)));
});

window.addEventListener('cart-changed', updateBadge);
updateBadge();
paintHearts();
