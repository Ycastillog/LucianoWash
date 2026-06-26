const CACHE_NAME = "luciano-wash-v78";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/brand-logo.png",
  "./assets/luciano-wash-logo-official-no-tagline.png",
  "./assets/luciano-wash-logo-transparent.png",
  "./assets/luciano-wash-logo-clean.png",
  "./assets/brand-complete.svg",
  "./assets/brand-complete-dark.svg",
  "./assets/brand-mark.svg",
  "./assets/brand-mobile.svg",
  "./assets/brand-mobile-dark.svg",
  "./assets/service-icons.svg",
  "./assets/hero-cleaning-solutions.png",
  "./assets/hero-real-results.webp",
  "./assets/before-after-car.webp",
  "./assets/before-after-upholstery.webp",
  "./assets/before-after-home-carpet.webp",
  "./assets/service-autos-camiones.png",
  "./assets/service-autos-camiones-clean.webp",
  "./assets/service-muebles-alfombras.webp",
  "./assets/service-hogares-negocios.png",
  "./assets/service-hogares-negocios-clean.webp",
  "./assets/service-piscinas-pressure.webp",
  "./assets/service-estimacion-rapida.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const shouldUseNetworkFirst =
    event.request.mode === "navigate" ||
    requestUrl.pathname.endsWith(".html") ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".css");

  if (shouldUseNetworkFirst) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
