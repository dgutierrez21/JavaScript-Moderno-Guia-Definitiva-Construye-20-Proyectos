// Campos del formulario
const inputMascota = document.querySelector("#mascota"),
  inputPropietario = document.querySelector("#propietario"),
  inputTelefono = document.querySelector("#telefono"),
  inputFecha = document.querySelector("#fecha"),
  inputHora = document.querySelector("#hora"),
  inputSintomas = document.querySelector("#sintomas");

// Formulario y contenedor en el que se muestran las citas
const form = document.querySelector("#nueva-cita");

const contenedorCitas = document.querySelector("#citas");

// Clases

class Citas {
  constructor() {
    this.arrCitas = [];
  }

  agregarCita(cita) {
    this.arrCitas = [...this.arrCitas, cita];

    console.log(this.arrCitas);
  }

  eliminarCita(id) {
    this.arrCitas = this.arrCitas.filter((cita) => cita.id !== id);
  }
}

class UI {
  imprimirAlerta(mensaje, tipoError) {
    // Validar si el contenedor divMensaje existe para que no se creen multiples mensajes
    if (document.querySelector(".divMensaje")) {
      return;
    }
    // crear el mensaje
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(
      "divMensaje",
      "text-center",
      "alert",
      "d-block",
      "col-12",
      "text-uppercase",
      "font-weight-bold"
    );

    // agregar clase en base al tipo de error
    if (tipoError === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // texto del mensaje
    divMensaje.textContent = mensaje;

    // agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarCitas({ arrCitas }) {
    // limpiar html
    this.limpiarHtml();
    arrCitas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;

      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      // Scripting de los elementos de la cita

      const parrafoMascota = document.createElement("h2");
      parrafoMascota.classList.add("card-title", "font-weight-bolder");
      parrafoMascota.textContent = mascota;

      const parrafoPropietario = document.createElement("p");
      parrafoPropietario.innerHTML = `
      <span class="font-weight-bolder">Propietario: </span> ${propietario}
      `;

      const parrafoTelefono = document.createElement("p");
      parrafoTelefono.innerHTML = `
      <span class="font-weight-bolder">Telefono: </span> ${telefono}
      `;

      const parrafoFecha = document.createElement("p");
      parrafoFecha.innerHTML = `
      <span class="font-weight-bolder">Fecha: </span> ${fecha}
      `;

      const parrafoHora = document.createElement("p");
      parrafoHora.innerHTML = `
      <span class="font-weight-bolder">Hora: </span> ${hora}
      `;

      const parrafoSintomas = document.createElement("p");
      parrafoSintomas.innerHTML = `
      <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
      `;

      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.textContent = "Eliminar";

      btnEliminar.onclick = () => eliminarCita(id);

      // agregar los parrafos al divCita
      divCita.appendChild(parrafoMascota);
      divCita.appendChild(parrafoPropietario);
      divCita.appendChild(parrafoTelefono);
      divCita.appendChild(parrafoFecha);
      divCita.appendChild(parrafoHora);
      divCita.appendChild(parrafoSintomas);
      divCita.appendChild(btnEliminar);

      // agreagar divCitas al html
      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHtml() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();

// Eventos
eventos();

function eventos() {
  inputMascota.addEventListener("input", datosCita);
  inputPropietario.addEventListener("input", datosCita);
  inputTelefono.addEventListener("input", datosCita);
  inputFecha.addEventListener("input", datosCita);
  inputHora.addEventListener("input", datosCita);
  inputSintomas.addEventListener("input", datosCita);

  form.addEventListener("submit", nuevaCita);
}

// Objeto con la informacion de la cita
const citaObj = {};

// Funciones

// Agregar datos al objeto de la cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;

  console.log(citaObj);
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault();

  // Extraer informacion del objeto de citas
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  // validar
  if (!mascota || !propietario || !telefono || !fecha || !hora || !sintomas) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  } else if (isNaN(telefono)) {
    ui.imprimirAlerta("Ingresa un número de telefono válido", "error");
    return;
  }

  // Generar id único
  citaObj.id = Date.now();

  // agregar cita
  administrarCitas.agregarCita({ ...citaObj });

  // Reiniciar el objeto citaObj
  reiniciarObjetoCita();

  // Reiniciar el formulario
  form.reset();

  // Mostrar citas en el html
  ui.mostrarCitas(administrarCitas);
}

function reiniciarObjetoCita() {
  for (const prop in citaObj) {
    citaObj[prop] = "";
  }
}

function eliminarCita(id) {
  // eliminar cita
  administrarCitas.eliminarCita(id);

  //mostrar mensaje
  ui.imprimirAlerta("La cita se eliminó correctamente");

  // refrescar citas
  ui.mostrarCitas(administrarCitas);
}
