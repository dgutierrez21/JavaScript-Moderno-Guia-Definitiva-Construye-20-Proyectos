//Variables y selectores
const form = document.querySelector("#agregar-gasto"),
  gastoListado = document.querySelector("#gasto ul");

let presupuesto;

// eventos
eventos();

function eventos() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// clases

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.presupuestoRestante = presupuesto;
    this.gastos = [];
  }
}

class UI {}

// Intancias

const ui = new UI();

// funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = Number(prompt("¿Cuál es tu presupuesto semanal?"));

  if (!presupuestoUsuario || presupuestoUsuario < 1) {
    alert("Ingresa un presupuesto válido");
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);

  console.log(presupuesto);
}
