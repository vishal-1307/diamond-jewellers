// Minimal service worker: precache the app shell, serve cached static assets
// fast (stale-while-revalidate), and fall back to network for navigations.
const CACHE = 'dj-v1';
const SHELL = ['/', '/collections', '/offline.html', '/favicon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  // Navigations: network-first, fall back to cached shell/offline page.
  if (request.mode === 'navigate') {
    e.respondWith(fetch(request).catch(() => caches.match(request).then((r) => r || caches.match('/offline.html'))));
    return;
  }

  // Static assets: stale-while-revalidate.
  if (/\.(webp|jpg|jpeg|png|svg|css|js|woff2?|json)$/.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const network = fetch(request).then((res) => {
            if (res.ok) cache.put(request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
  }
});
