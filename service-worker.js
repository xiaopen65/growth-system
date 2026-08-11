const CACHE_NAME = 'growth-system-v4';

const STATIC_ASSETS = [
  './',
  './manifest.json',
  './icons/icon-144x144.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isHtml = url.pathname.endsWith('/') || url.pathname.endsWith('index.html');

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cached) => {
        // Try network in background
        const networkFetch = fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
            // If it's index.html and we had a cached version, tell the page there's an update
            if (isHtml && cached) {
              self.clients.matchAll().then((clients) => {
                clients.forEach((client) => client.postMessage({ type: 'update-ready' }));
              });
            }
          }
          return response;
        }).catch(() => {});

        // Return cached version immediately, or wait for network
        return cached || networkFetch;
      })
    )
  );
});

// Notify page when new version is available
self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') {
    self.skipWaiting();
  }
});
