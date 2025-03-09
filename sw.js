const CACHE_NAME = "game-app-cache-v1";
const urlsToCache = [
  "index.html",
  "index.css",
  "index.js",
  "Menu.html",
  "Menu.css",
  "About.html",
  "About.css",
  "Tic Tac Toe.html",
  "Tic Tac Toe.css",
  "Tic Tac Toe.js",
  "2048.html",
  "2048.css",
  "2048.js",
  "Gameover.html",
  "Gameover.css",
  "Gameover.js",
  "Winner.html",
  "Winner.css",
  "Winner.js",
  "Corf.html",
  "WebLogo.png",
  "AppLogo.png",
  "2048.png",
  "TTT.png",
  "Logo.png",
  "LogoWin.png",
  "LogoRepeat.png",
  "LogoPlay.png"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch Cached Files
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Update Cache when Needed
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});