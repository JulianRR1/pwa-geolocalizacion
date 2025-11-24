// sw.js: Service Worker mínimo para que el sitio califique como PWA

self.addEventListener("install", (event) => {
  console.log("SW: instalado");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW: activado");
  return self.clients.claim();
});

navigator.serviceWorker.register("./sw.js")
  .then((reg) => console.log("Service Worker registrado:", reg.scope))
  .catch((err) => console.error("Error al registrar SW:", err));


// En esta práctica no interceptamos fetch.
