import { useEffect, useRef, useState } from 'react';
import { imgFull, imgHero } from '../../lib/img';

export interface Slide {
  slug: string;
  title: string;
  lead: string;
  cta: string;
  href: string;
}

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const paused = useRef(false);
  const n = slides.length;

  const go = (next: number) => setI(((next % n) + n) % n);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => {
      if (!paused.current) setI((c) => (c + 1) % n);
    }, 5000);
    return () => clearInterval(t);
  }, [n]);

  const onDown = (x: number) => {
    startX.current = x;
    paused.current = true;
  };
  const onUp = (x: number) => {
    if (startX.current !== null) {
      const dx = x - startX.current;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
    }
    startX.current = null;
    setTimeout(() => (paused.current = false), 4000);
  };

  return (
    <section
      class="relative h-[55vh] min-h-[340px] overflow-hidden md:h-[70vh]"
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)}
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseUp={(e) => onUp(e.clientX)}
      aria-roledescription="carousel"
    >
      {slides.map((s, idx) => (
        <div
          key={s.slug}
          class={'absolute inset-0 transition-opacity duration-700 ' + (idx === i ? 'opacity-100' : 'pointer-events-none opacity-0')}
          aria-hidden={idx !== i}
        >
          <img
            src={imgFull(s.slug)}
            srcset={`${imgFull(s.slug)} 800w, ${imgHero(s.slug)} 1600w`}
            sizes="100vw"
            alt=""
            width={1600}
            height={900}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchpriority={idx === 0 ? 'high' : 'auto'}
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-black/45" />
          <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 class="max-w-3xl font-[var(--font-heading)] text-3xl font-bold leading-tight drop-shadow md:text-5xl">{s.title}</h1>
            <p class="mt-3 max-w-xl text-sm drop-shadow md:text-lg">{s.lead}</p>
            <a href={s.href} class="btn btn-primary mt-6">{s.cta}</a>
          </div>
        </div>
      ))}

      {n > 1 && (
        <>
          <button onClick={() => go(i - 1)} aria-label="Previous slide"
            class="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur">‹</button>
          <button onClick={() => go(i + 1)} aria-label="Next slide"
            class="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur">›</button>
          <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, d) => (
              <button key={d} onClick={() => go(d)} aria-label={`Go to slide ${d + 1}`}
                class={'h-2.5 w-2.5 rounded-full border border-white transition ' + (d === i ? 'bg-white' : 'bg-transparent')} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
