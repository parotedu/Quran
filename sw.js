// Service Worker for منصة القرآن الكريم
// Enables instant offline loading, asset caching, and resilience on poor connections.

const CACHE_NAME = 'quran-platform-v3.2';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './css/tailwind.min.css',
  './css/style.css',
  './js/surahs.js',
  './js/v2-data.js',
  './js/theme.js',
  './js/player.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

const MEDIA_HOST_MARKERS = [
  'archive.org',
  'mp3quran.net',
  'quranicaudio.com',
  'islamic.network',
  'everyayah.com',
  'qurango.net',
  'way2quran.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('Some core assets failed to pre-cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // NEVER intercept audio/video/streaming or Range requests:
  // Safari/WebKit/Android WebView break or stall Range streams and live Shoutcast radio when proxied through SW.
  const isMediaExt = /\.(mp3|m4a|aac|ogg|wav|mp4|webm)(\?.*)?$/i.test(url.pathname);
  const isMediaDest = request.destination === 'audio' || request.destination === 'video';
  const isRangeReq = request.headers.has('range');
  const isMediaHost = MEDIA_HOST_MARKERS.some((h) => url.hostname.includes(h));
  const isRadioPath = url.pathname.includes('/radio/');

  if (isMediaDest || isRangeReq || isMediaExt || isMediaHost || isRadioPath) {
    return;
  }

  // For Quranic text API (api.alquran.cloud): Cache-first (Quran text never changes)
  if (url.origin.includes('api.alquran.cloud')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // For external CDN font/icon assets: Stale-While-Revalidate
  if (url.origin.includes('cdnjs') || url.origin.includes('fonts.googleapis') || url.origin.includes('fonts.gstatic')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cachedResponse);
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // Only cache same-origin app shell resources
  if (url.origin !== self.location.origin) {
    return;
  }

  // HTML navigations: Network-first with cache fallback so updates arrive immediately
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match(request).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  // Same-origin JS/CSS/images: Stale-While-Revalidate (instant paint + background update)
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((cached) => {
        const networkPromise = fetch(request).then((response) => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        }).catch(() => cached);
        return cached || networkPromise;
      });
    })
  );
});
