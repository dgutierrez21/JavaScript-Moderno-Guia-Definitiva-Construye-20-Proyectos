if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registrado) => console.log("Se instalo correctamente", registrado))
    .catch((error) => console.log("Falló en la instalación", error));
} else {
  console.log("Service Workers no soportados");
}
