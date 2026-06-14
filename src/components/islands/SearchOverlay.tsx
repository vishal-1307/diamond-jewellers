import { useEffect, useRef, useState } from 'react';
import { imgThumb } from '../../lib/img';

interface P {
  id: string;
  name: string;
  category: string;
  type: string;
  image: string;
  description: string;
}

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [all, setAll] = useState<P[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lazy-load the catalogue the first time search opens.
  useEffect(() => {
    if (open && !all) {
      fetch('/products.json')
        .then((r) => r.json())
        .then(setAll)
        .catch(() => setAll([]));
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open, all]);

  // Allow other UI (bottom nav) to open search via a global event.
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener('open-search', openIt);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('open-search', openIt);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const query = q.trim().toLowerCase();
  const results =
    query.length < 2 || !all
      ? []
      : all
          .filter(
            (p) =>
              p.name.toLowerCase().includes(query) ||
              p.category.toLowerCase().includes(query) ||
              p.type.toLowerCase().includes(query) ||
              p.description.toLowerCase().includes(query)
          )
          .slice(0, 8);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="grid h-11 w-11 place-items-center text-[var(--color-muted)] hover:text-[var(--color-ink)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="mx-auto mt-0 w-full bg-white p-4 shadow-lg md:mt-20 md:max-w-2xl md:rounded-xl">
            <div className="flex items-center gap-2 border-b border-[var(--color-line)] pb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-[var(--color-muted)]">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search rings, necklaces, bridal sets…"
                className="w-full bg-transparent text-base outline-none"
              />
              <button onClick={() => setOpen(false)} aria-label="Close search" className="text-2xl leading-none text-[var(--color-muted)]">×</button>
            </div>

            <div className="mt-3 max-h-[60vh] overflow-y-auto">
              {query.length < 2 && <p className="py-6 text-center text-sm text-[var(--color-muted)]">Type at least 2 characters.</p>}
              {query.length >= 2 && results.length === 0 && all && (
                <p className="py-6 text-center text-sm text-[var(--color-muted)]">No designs found. Try another term.</p>
              )}
              {results.map((p) => (
                <a key={p.id} href={`/product/${p.id}`} className="flex items-center gap-3 rounded-lg p-2 hover:bg-[var(--color-sand)]">
                  <img src={imgThumb(p.image)} alt={p.name} width={48} height={48} className="h-12 w-12 rounded object-cover" loading="lazy" />
                  <span>
                    <strong className="block text-sm">{p.name}</strong>
                    <span className="text-xs text-[var(--color-muted)]">{p.category} · {p.type}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
