const btnAbrir = document.querySelector("#abrir-pantalla-completa");
const btnSalir = document.querySelector("#salir-pantalla-completa");

btnAbrir.addEventListener("click", abrirPantallaCompleta);
btnSalir.addEventListener("click", cerrarPantallaCompleta);

function abrirPantallaCompleta() {
  document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(params) {
  document.exitFullscreen();
}
