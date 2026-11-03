// Cuentas Claras: guarda la app para que abra sin conexión.
// Cambia VERSION cuando subas una versión nueva (borra las copias antiguas).
const VERSION = "cc-v3";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
// Librerías de exportar: se guardan al instalar para que funcionen sin conexión desde el primer día
const LIBS = ["./lib/xlsx.full.min.js", "./lib/jspdf.umd.min.js", "./lib/jspdf.plugin.autotable.min.js"];
const LIB_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];
const NET_TIMEOUT = 3000; // con mala cobertura, a los 3 s se abre la copia guardada

self.addEventListener("install", e => {
  // Cada archivo por separado: si falta uno (por ejemplo un icono), el resto se guarda igual
  e.waitUntil(caches.open(VERSION)
    .then(c => Promise.all([...SHELL, ...LIBS].map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// waitUntil puede fallar si la respuesta ya se entregó; el guardado sigue igualmente
const keep = (e, p) => { try { e.waitUntil(p); } catch (err) {} };
const save = (req, res) => { const copy = res.clone(); return caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {}); };

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    // Las librerías no cambian: primero la copia guardada
    if (url.pathname.includes("/lib/")) {
      e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) keep(e, save(req, res)); return res; })));
      return;
    }
    // La app: la red si responde rápido (para recibir mejoras); si no, la copia guardada al momento
    const fromNet = fetch(req).then(res => { if (res.ok) keep(e, save(req, res)); return res; });
    fromNet.catch(() => {});
    const fromCache = () => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html"));
    const wait = new Promise(r => setTimeout(r, NET_TIMEOUT)).then(fromCache);
    e.respondWith(Promise.race([fromNet, wait]).then(r => r || fromNet).catch(fromCache));
    return;
  }

  if (LIB_HOSTS.includes(url.hostname)) {
    // Fuentes: se guardan la primera vez que se usan
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") keep(e, save(req, res));
      return res;
    })));
  }
  // Todo lo demás (tu hoja de Google, Gemini) va directo a internet
});
