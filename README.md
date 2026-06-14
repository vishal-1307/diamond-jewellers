# Diamond Jewellers

Mobile-first jewellery **showcase / enquiry catalogue** (not e-commerce — there are
intentionally **no prices**). Every product CTA routes to WhatsApp. Built with Astro
+ React islands + Tailwind, deployed as a static site on Vercel.

## Stack

- **Astro 5** — static site generation (near-zero JS by default; best mobile perf + SEO)
- **React 19 islands** — only the interactive bits hydrate (hero, search, filters,
  chat, rate widget, forms, gallery, saved designs)
- **Tailwind v4** (`@tailwindcss/vite`) — design tokens in `src/styles/global.css`
- **sharp** — build-time image pipeline (PNG → WebP, responsive sizes, OG + PWA icons)

## Commands

```bash
npm install
npm run dev        # local dev
npm run images     # regenerate optimized images only
npm run build      # images + astro build  -> dist/
npm run preview    # serve the production build
```

## Project structure

```
public/
  products.json        # canonical product data (NO price) — edit here to add products
  rates.json           # gold/silver rates shown by the rate widget
  assets/              # source PNGs (pipeline inputs); opt/ + og/ + icons/ are generated
src/
  config/site.ts       # contact, address, hours, social links  ← edit shop details here
  config/nav.ts        # header + bottom-nav links
  config/banners.ts    # festival/offer banners (date-range aware)
  lib/                 # products loader, image helpers, waLink, saved (wishlist), chat client
  components/          # Astro UI + islands/ (React)
  pages/               # routes (product/[id].astro generates 93 static product pages)
scripts/               # build-images, update-rates, image-map
```

## Adding / editing products

Edit `public/products.json`. Fields: `id, name, category, type, rating, image (slug),
weight, purity, isNew, isBestSeller, description`. The `image` slug must match an
optimized image — add the source PNG to `public/assets/` and a slug mapping in
`scripts/image-map.mjs`, then `npm run images`.

## Activating the future features

| Feature | How to switch on |
|---|---|
| **RAG chatbot** | Set `PUBLIC_CHAT_API_URL` in `.env` to your FastAPI `/chat` backend. Until then the widget runs in mock "coming soon" mode. |
| **Live rates** | Add a `GOLD_API_URL` (and optional `GOLD_API_KEY`) repo secret and map fields in `scripts/update-rates.mjs`. The daily GitHub Action (`.github/workflows/update-rates.yml`) commits `rates.json`. |
| **Festival banner** | Add an entry with a date window in `src/config/banners.ts`. |
| **Social links** | Replace the placeholder Instagram/Facebook URLs in `src/config/site.ts`. |

## Deployment

Vercel auto-detects Astro and runs `npm run build` → serves `dist/`. Update
`site` in `astro.config.mjs` and `src/config/site.ts` to the final domain (drives
canonical URLs, sitemap, and absolute OG image paths).

## Notes

- `npm audit` reports issues in dev-only tooling (esbuild dev-server, vite, rollup)
  bundled inside the current Astro release. These do not affect the deployed static
  output; `audit fix --force` would downgrade and break Astro.
- The previous vanilla site is preserved on the `legacy-vanilla` branch.
