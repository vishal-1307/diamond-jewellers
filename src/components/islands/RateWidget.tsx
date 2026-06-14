import { useEffect, useState } from 'react';

interface Rates {
  updated: string;
  currency: string;
  unit: string;
  note?: string;
  rates: { gold_24k: number; gold_22k: number; silver: number };
}

const SRC = (import.meta.env.PUBLIC_RATES_URL as string) || '/rates.json';

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN');
}

export default function RateWidget({ variant = 'card' }: { variant?: 'card' | 'strip' }) {
  const [data, setData] = useState<Rates | null>(null);

  useEffect(() => {
    fetch(SRC).then((r) => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (!data) return null;
  const { rates, unit, updated, note } = data;

  if (variant === 'strip') {
    return (
      <div class="border-y border-[var(--color-line)] bg-[var(--color-sand)]">
        <div class="container-dj flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center text-sm">
          <span class="font-semibold text-[var(--color-gold)]">Today's Rates ({unit})</span>
          <span>Gold 24K <strong>{fmt(rates.gold_24k)}</strong></span>
          <span>Gold 22K <strong>{fmt(rates.gold_22k)}</strong></span>
          <span>Silver <strong>{fmt(rates.silver)}</strong></span>
          <span class="text-xs text-[var(--color-muted)]">Updated {updated}</span>
        </div>
      </div>
    );
  }

  return (
    <div class="rounded-xl border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)]">
      <h3 class="font-[var(--font-heading)] text-lg">Today's Rates <span class="text-sm font-normal text-[var(--color-muted)]">({unit})</span></h3>
      <dl class="mt-3 space-y-2 text-sm">
        <div class="flex justify-between border-b border-[var(--color-line)] pb-2"><dt>Gold 24K</dt><dd class="font-semibold">{fmt(rates.gold_24k)}</dd></div>
        <div class="flex justify-between border-b border-[var(--color-line)] pb-2"><dt>Gold 22K</dt><dd class="font-semibold">{fmt(rates.gold_22k)}</dd></div>
        <div class="flex justify-between"><dt>Silver</dt><dd class="font-semibold">{fmt(rates.silver)}</dd></div>
      </dl>
      {note && <p class="mt-3 text-xs text-[var(--color-muted)]">{note}</p>}
      <p class="mt-1 text-xs text-[var(--color-muted)]">Updated {updated}</p>
    </div>
  );
}
