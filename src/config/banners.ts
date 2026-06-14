// Festival / offer banners. Add an entry with a date window and it shows
// automatically while active. Leave the array empty (or all dates in the
// past/future) to hide the bar entirely.

export interface Banner {
  id: string;
  message: string;
  cta?: string;
  href?: string;
  start: string; // ISO date (inclusive)
  end: string; // ISO date (inclusive)
}

export const banners: Banner[] = [
  // Example (inactive by default — adjust dates to switch on):
  // { id: 'dhanteras-2026', message: '✨ Dhanteras Special — book your bridal consultation now',
  //   cta: 'Enquire', href: '/custom', start: '2026-11-05', end: '2026-11-10' },
];

export function activeBanner(now = new Date()): Banner | null {
  const today = now.toISOString().slice(0, 10);
  return banners.find((b) => b.start <= today && today <= b.end) ?? null;
}
