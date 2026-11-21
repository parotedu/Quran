// Service Worker for منصة القرآن الكريم
// Enables instant offline loading, asset caching, and resilience on poor connections.

const CACHE_NAME = 'quran-platform-v3.4';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico?v=3.4',
  './assets/logo.svg?v=3.4',
  './css/tailwind.min.css?v=3.4',
  './css/style.css?v=3.4',
  './js/surahs.js?v=3.4',
  './js/v2-data.js?v=3.4',
  './js/theme.js?v=3.4',
  './js/player.js?v=3.4',
  './assets/favicon-32.png?v=3.4',
  './assets/favicon-16.png?v=3.4',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png?v=3.4'
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
          if (key !== CACHE_NAME && key !== 'quran-offline-audio') {
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

  // Same-origin code/styles/HTML/assets: Network-first with cache fallback
  // Prevents mixed stale CSS/JS from previous deployments while keeping offline support.
  event.respondWith(
    fetch(request).then((response) => {
      if (response && response.status === 200) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }).catch(() => {
      return caches.match(request).then((cached) => {
        if (cached) return cached;
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
