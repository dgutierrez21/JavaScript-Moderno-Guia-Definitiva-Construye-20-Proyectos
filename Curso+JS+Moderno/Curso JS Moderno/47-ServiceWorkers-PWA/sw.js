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
