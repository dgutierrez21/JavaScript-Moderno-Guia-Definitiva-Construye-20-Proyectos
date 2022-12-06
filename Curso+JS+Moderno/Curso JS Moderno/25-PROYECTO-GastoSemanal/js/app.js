//Variables y selectores
const form = document.querySelector("#agregar-gasto"),
  gastoListado = document.querySelector("#gasto ul");

// eventos
eventos();

function eventos() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// clases

// funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = Number(prompt("¿Cuál es tu presupuesto semanal?"));

  if (!presupuestoUsuario || presupuestoUsuario < 1) {
    alert("Ingresa un presupuesto válido");
    window.location.reload();
  }

  console.log(presupuestoUsuario);
}
