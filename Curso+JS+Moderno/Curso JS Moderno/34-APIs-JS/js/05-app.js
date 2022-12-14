document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);

  if (document.visibilityState === "visible") {
    console.log("Ejecutar la función para reproducir el video");
  } else {
    console.log("Pausar el video");
  }
});
