//Variables y selectores
const form = document.querySelector("#agregar-gasto"),
  gastoListado = document.querySelector("#gasto ul");

let presupuesto;

// eventos
eventos();

function eventos() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  form.addEventListener("submit", agregarGasto);
}

// clases

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.presupuestoRestante = presupuesto;
    this.gastos = [];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, presupuestoRestante } = cantidad;

    // agregar al html
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = presupuestoRestante;
  }

  imprimirAlerta(mensaje, tipo) {
    // validar si ya existe el divMensaje
    if (document.querySelector(".divMensaje")) {
      return;
    }
    // crear div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "divMensaje");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // mensaje error
    divMensaje.textContent = mensaje;

    // insertar en el html

    document.querySelector(".primario").insertBefore(divMensaje, form);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  // quitar el html
}

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

  ui.insertarPresupuesto(presupuesto);
}

// añadir gastos
function agregarGasto(e) {
  e.preventDefault();

  // leer datos del formulario
  const nombre = document.querySelector("#gasto").value,
    cantidad = Number(document.querySelector("#cantidad").value);

  if (!nombre && !cantidad) {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");

    return;
  }

  if (!cantidad || cantidad < 1) {
    ui.imprimirAlerta("Cantidad no válida.", "error");

    return;
  }

  ui.imprimirAlerta("Agregando gastos...", "exito");
}
