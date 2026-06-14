import { useEffect, useState } from 'react';
import { imgThumb, imgFull, imgSrcset } from '../../lib/img';

export interface GItem { slug: string; alt: string }

export default function GalleryLightbox({ items }: { items: GItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, items.length]);

  return (
    <>
      <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((g, i) => (
          <button key={g.slug + i} onClick={() => setOpen(i)} class="overflow-hidden rounded-xl" aria-label={`View ${g.alt}`}>
            <img src={imgThumb(g.slug)} srcset={imgSrcset(g.slug)} sizes="(min-width:768px) 33vw, 50vw" alt={g.alt}
              width={400} height={400} loading="lazy" class="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div class="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" class="absolute right-4 top-4 text-3xl text-white">×</button>
          <button onClick={() => setOpen((open - 1 + items.length) % items.length)} aria-label="Previous" class="absolute left-3 text-4xl text-white/80 hover:text-white">‹</button>
          <figure class="max-h-[85vh] max-w-3xl">
            <img src={imgFull(items[open].slug)} alt={items[open].alt} class="max-h-[80vh] w-auto rounded-lg object-contain" />
            <figcaption class="mt-2 text-center text-sm text-white/80">{items[open].alt}</figcaption>
          </figure>
          <button onClick={() => setOpen((open + 1) % items.length)} aria-label="Next" class="absolute right-3 text-4xl text-white/80 hover:text-white">›</button>
        </div>
      )}
    </>
  );
}
