// CLEANUP: Delete all caches, then unregister
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => {
      // After clearing, unregister this service worker
      self.registration.unregister().then(() =>
        self.clients.matchAll().then((clients) =>
          clients.forEach((client) => client.navigate(client.url))
        )
      );
    })
  );
});

// Don't cache anything
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
