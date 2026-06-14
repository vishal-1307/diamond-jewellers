import { useEffect, useState } from 'react';
import { getSaved, removeSaved, type SavedItem } from '../../lib/saved';
import { imgThumb } from '../../lib/img';
import { waLink } from '../../lib/waLink';

export default function SavedDesigns() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => setItems(getSaved());
    refresh();
    setReady(true);
    window.addEventListener('cart-changed', refresh);
    return () => window.removeEventListener('cart-changed', refresh);
  }, []);

  if (!ready) return null;

  if (items.length === 0) {
    return (
      <div class="rounded-xl bg-[var(--color-sand)] p-12 text-center">
        <h2 class="font-[var(--font-heading)] text-xl">Your saved list is empty</h2>
        <p class="mt-2 text-[var(--color-muted)]">Tap the heart on any design to save it here, then send us your shortlist.</p>
        <a href="/collections" class="btn btn-primary mt-5">Browse Designs</a>
      </div>
    );
  }

  const enquiry = () => {
    const lines = ['💎 *Design Enquiry — Diamond Jewellers*', '', 'Hi, I am interested in these designs:', ''];
    items.forEach((it, i) => lines.push(`${i + 1}. ${it.name}`));
    lines.push('', 'Please share details and availability. Thank you!');
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <div class="grid gap-8 md:grid-cols-[2fr_1fr]">
      <div class="space-y-4">
        {items.map((it) => (
          <div key={it.id} class="flex items-center gap-4 rounded-xl border border-[var(--color-line)] bg-white p-3">
            <img src={imgThumb(it.image)} alt={it.name} width={80} height={80} class="h-20 w-20 rounded-lg object-cover" loading="lazy" />
            <a href={`/product/${it.id}`} class="flex-1 font-[var(--font-heading)] text-lg">{it.name}</a>
            <button onClick={() => removeSaved(it.id)} class="text-sm text-red-500 hover:underline" aria-label={`Remove ${it.name}`}>Remove</button>
          </div>
        ))}
      </div>

      <aside class="h-fit rounded-xl border border-[var(--color-line)] bg-[var(--color-sand)] p-6 md:sticky md:top-24">
        <h2 class="font-[var(--font-heading)] text-xl">Enquire About These</h2>
        <p class="mt-2 text-sm text-[var(--color-muted)]">Send your shortlist on WhatsApp and we'll share details and availability.</p>
        <button onClick={enquiry} class="btn btn-whatsapp mt-4 w-full">Enquire via WhatsApp ({items.length})</button>
        <a href="/collections" class="btn btn-secondary mt-3 w-full">Browse More</a>
      </aside>
    </div>
  );
}
