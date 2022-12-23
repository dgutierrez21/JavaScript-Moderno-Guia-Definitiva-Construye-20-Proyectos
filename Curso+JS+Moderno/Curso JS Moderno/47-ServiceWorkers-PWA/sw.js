// cuando se instala el service worker
// se ejecuta una sola vez
self.addEventListener("install", (e) => {
  console.log("Instalado el service worker");

  console.log(e);
});

// activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker Activado");

  console.log(e);
});

// evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);
});

// requerimientos para hacer la aplicación instalable:

// tiene que ser https o localHost

// tener un manifest válido

// agregar el evento fetch
