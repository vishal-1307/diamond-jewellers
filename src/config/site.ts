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
  phone2Display: '+91 85443 28394',
  phone2Tel: '+918544328394',
  email: 'diamondjewellers1995@gmail.com',

  // — Address —
  address: {
    line1: 'In front of Hospital Road, Vidyapati Chowk',
    line2: 'Benipatti, Madhubani, Bihar 847452',
    locality: 'Benipatti',
    region: 'Bihar',
    postalCode: '847452',
    country: 'IN',
    // Google Maps embed (place: Diamond Jewellers, Benipatti)
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3983131422942!2d85.89947041143203!3d26.442886776834193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4a3acf870553%3A0xba897b89941f241b!2sDiamond%20Jewellers!5e0!3m2!1sen!2sin!4v1762705287231!5m2!1sen!2sin',
    // Geo for LocalBusiness schema
    lat: 26.442886776834193,
    lng: 85.89947041143203,
  },

  // — Hours — open every day 8 AM – 8 PM
  hours: {
    display: 'Every day: 8:00 AM – 8:00 PM',
    sunday: 'Open on Sundays too',
    // Schema.org openingHours format
    schema: 'Mo-Su 08:00-20:00',
  },

  // — Social links —
  // Set a value to '' to hide that icon.
  social: {
    instagram: 'https://www.instagram.com/diamondjewellers__',
    facebook: 'https://www.facebook.com/', // PLACEHOLDER — awaiting real URL
  },
} as const;

export type Site = typeof site;
