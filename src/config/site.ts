// ============================================================
// Central site configuration — single source of truth.
// Edit contact details, social links, and SEO defaults here.
// ============================================================

export const site = {
  name: 'Diamond Jewellers',
  tagline: 'Elegance Redefined',
  // Used for canonical URLs / OG absolute paths. Keep in sync with astro.config `site`.
  url: 'https://diamond-jewellers.vercel.app',

  // — Contact —
  whatsappNumber: '919931454704', // intl format, no +, no spaces (for wa.me)
  phoneDisplay: '+91 99314 54704',
  phoneTel: '+919931454704',
  email: 'diamondjewellersbenipatti@gmail.com',

  // — Address —
  address: {
    line1: 'In front of Hospital Road, Benipatti',
    line2: 'Madhubani, Bihar 847223',
    locality: 'Benipatti',
    region: 'Bihar',
    postalCode: '847223',
    country: 'IN',
    // Google Maps embed (place: Diamond Jewellers, Benipatti)
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3983131422942!2d85.89947041143203!3d26.442886776834193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4a3acf870553%3A0xba897b89941f241b!2sDiamond%20Jewellers!5e0!3m2!1sen!2sin!4v1762705287231!5m2!1sen!2sin',
    // Geo for LocalBusiness schema
    lat: 26.442886776834193,
    lng: 85.89947041143203,
  },

  // — Hours —
  hours: {
    display: 'Mon – Sat: 10:00 AM – 8:00 PM',
    sunday: 'Sunday: Closed',
    // Schema.org openingHours format
    schema: 'Mo-Sa 10:00-20:00',
  },

  // — Social links —
  // TODO(owner): replace placeholder URLs with the shop's real profiles.
  // Set a value to null/'' to hide that icon.
  social: {
    instagram: 'https://www.instagram.com/diamondjewellers__',
    facebook: 'https://www.facebook.com/', // PLACEHOLDER — awaiting real URL
  },
} as const;

export type Site = typeof site;
