// Shared navigation definitions used by Header, Footer, and BottomNav.

export const mainNav = [
  { label: 'Collections', href: '/collections' },
  { label: 'Custom Orders', href: '/custom' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Mobile bottom-navigation bar (thumb zone). Icons are inline SVG ids.
export const bottomNav = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Shop', href: '/collections', icon: 'grid' },
  { label: 'Search', href: '#search', icon: 'search', action: 'search' },
  { label: 'Saved', href: '/cart', icon: 'heart' },
  { label: 'Contact', href: '/contact', icon: 'phone' },
];

export function isActive(current: string, href: string): boolean {
  if (href === '/') return current === '/' || current === '';
  return current.startsWith(href);
}
