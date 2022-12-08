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

// Eventos
eventos();

function eventos() {
  inputMascota.addEventListener("input", datosCita);
  inputPropietario.addEventListener("input", datosCita);
  inputTelefono.addEventListener("input", datosCita);
  inputFecha.addEventListener("input", datosCita);
  inputHora.addEventListener("input", datosCita);
  inputSintomas.addEventListener("input", datosCita);
}

// Objeto con la informacion de la cita
const citaObj = {};

// Funciones

// Agregar datos al objeto de la cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;

  console.log(citaObj);
}
