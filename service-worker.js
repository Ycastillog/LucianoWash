const CACHE_NAME = "luciano-wash-v26";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/brand-logo.png",
  "./assets/brand-complete.svg",
  "./assets/brand-mark.svg",
  "./assets/brand-mobile.svg",
  "./assets/service-icons.svg",
  "./assets/hero-cleaning-solutions.png",
  "./assets/hero-real-results.png",
  "./assets/before-after-car.png",
  "./assets/before-after-upholstery.png",
  "./assets/before-after-home-carpet.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
