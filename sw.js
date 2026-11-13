// Service worker : rend le site installable et utilisable même avec un réseau faible.
// Change VERSION à chaque grosse mise à jour pour forcer le rafraîchissement.
var VERSION = "ps-v3";
var FICHIERS = [
  "/", "/index.html", "/membres.html", "/vip.html", "/profil.html", "/soutien.html",
  "/abonnement.html", "/espace-membre.html", "/conditions.html", "/confidentialite.html",
  "/styles.css", "/config.js", "/data.js", "/layout.js", "/script.js",
  "/assets/img/hero.jpg", "/assets/icons/icon-192.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Pages : réseau d'abord (contenu frais), copie en cache si hors ligne.
// Images, styles, scripts : cache d'abord (rapide).
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(function (r) {
      var copie = r.clone(); caches.open(VERSION).then(function (c) { c.put(req, copie); }); return r;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match("/index.html"); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(function (r) {
    return r || fetch(req).then(function (rep) {
      var copie = rep.clone(); caches.open(VERSION).then(function (c) { c.put(req, copie); }); return rep;
    });
  }));
});
