const nombreCache = "apv-v5";
const archivos = [
  "./",
  "./index.html",
  "./error.html",
  "./css/bootstrap.css",
  "./css/styles.css",
  "./js/app.js",
  "./js/apv.js",
];

// cuando se instala el service worker
// se ejecuta una sola vez
self.addEventListener("install", (e) => {
  console.log("Instalado el service worker");

  console.log(e);

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("Cacheando");
      console.log(cache);

      cache.addAll(archivos);
    })
  );
});

// activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker Activado");

  console.log(e);

  e.waitUntil(
    caches.keys().then((keys) => {
      console.log(keys);

      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key)) // borrar los demas
      );
    })
  );
});

// evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);

  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) =>
        cacheResponse ? cacheResponse : caches.match("error.html")
      )
  );
});

// requerimientos para hacer la aplicación instalable:

// tiene que ser https o localHost

// tener un manifest válido

// agregar el evento fetch
