//Variables y selectores
const form = document.querySelector("#agregar-gasto"),
  gastoListado = document.querySelector("#gastos ul");

let presupuesto;

// eventos
eventos();

function eventos() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  document.querySelector("#gasto").focus();

  form.addEventListener("submit", agregarGasto);
}

// clases

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.presupuestoRestante = presupuesto;
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];

    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );

    this.presupuestoRestante = this.presupuesto - gastado;

    console.log(this.presupuestoRestante);
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);

    console.log(this.gastos);

    this.calcularRestante();
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

  imprimirAlertaRestante(mensaje, tipo) {
    // validar si ya existe el divMensaje
    if (document.querySelector(".divMensajeRestante")) {
      return;
    }
    // crear div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "divMensajeRestante");

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

  mostrarGastos(gastos) {
    // limpiar html
    this.limpiarHtml();
    // iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      // crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id;
      nuevoGasto.style.fontSize = "20px";

      console.log(nuevoGasto);
      // agregar al html del gasto
      nuevoGasto.innerHTML = `
      ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
      `;

      // boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.textContent = "Borrar X";

      btnBorrar.onclick = () => {
        // Eliminar gasto
        eliminarGasto(id);
      };

      nuevoGasto.appendChild(btnBorrar);

      // agregar al html
      gastoListado.appendChild(nuevoGasto);
    });
  }

  // limpiar html
  limpiarHtml() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const DivRestante = document.querySelector(".restante");
    const { presupuesto, presupuestoRestante } = presupuestoObj;

    if (presupuesto / 4 >= presupuestoRestante) {
      DivRestante.classList.remove("alert-success", "alert-warning");
      DivRestante.classList.add("alert-danger");
    } else if (presupuesto / 2 >= presupuestoRestante) {
      DivRestante.classList.remove("alert-success", "alert-danger");
      DivRestante.classList.add("alert-warning");
    } else {
      DivRestante.classList.remove("alert-danger", "alert-warning");
      DivRestante.classList.add("alert-success");
    }

    if (presupuestoRestante <= 0) {
      ui.imprimirAlertaRestante("El presupuesto se ha agotado", "error");
      form.querySelector('button[type="submit"]').disabled = true;
    } else {
      form.querySelector('button[type="submit"]').disabled = false;
    }
  }
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
    cantidad = document.querySelector("#cantidad").value;

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");

    return;
  } else if (isNaN(cantidad) || cantidad < 1) {
    ui.imprimirAlerta("Cantidad no válida.", "error");

    return;
  }

  // generar un objeto con el gasto
  const gasto = {
    nombre,
    cantidad: Number(cantidad),
    id: Date.now(),
  };

  ui.imprimirAlerta("Gasto agregado correctamente.");

  //añadir nuevo gasto
  presupuesto.nuevoGasto(gasto);

  // imprimir los gastos
  const { gastos, presupuestoRestante } = presupuesto;

  ui.mostrarGastos(gastos);

  ui.actualizarRestante(presupuestoRestante);

  ui.comprobarPresupuesto(presupuesto);

  console.log(presupuesto);

  form.reset();
  document.querySelector("#gasto").focus();
}

function eliminarGasto(id) {
  // elimina del objeto
  presupuesto.eliminarGasto(id);
  const { gastos, presupuestoRestante } = presupuesto;

  // elimina los gastos del html
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(presupuestoRestante);

  ui.comprobarPresupuesto(presupuesto);
}
