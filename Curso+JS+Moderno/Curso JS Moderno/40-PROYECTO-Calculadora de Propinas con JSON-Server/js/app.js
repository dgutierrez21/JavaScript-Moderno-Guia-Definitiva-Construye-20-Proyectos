let cliente = {
  pedido: [],
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const inputMesa = document.querySelector("#mesa").value,
    inputHora = document.querySelector("#hora").value;

  // revisar si hay campos vacios
  if (!inputMesa || !inputHora) {
    mostrarAlerta("Ambos campos son obligatorios");

    return;
  }

  // asignar datos del formulario al obj cliente
  cliente = { ...cliente, inputMesa, inputHora };

  // ocultar formulario
  const formModal = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(formModal);
  modalBootstrap.hide();

  // mostrar las secciones
  mostrarSecciones();

  // obtener platilos de la api json-server
  obtenerPlatillos();
}

function mostrarAlerta(mensaje) {
  if (document.querySelector(".alerta")) {
    return;
  }
  const alerta = document.createElement("div");
  alerta.classList.add(
    "invalid-feedback",
    "d-block",
    "text-center",
    "fw-bold",
    "fs-4",
    "alerta"
  );
  alerta.textContent = mensaje;

  document.querySelector(".modal-body").appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2750);
}

function mostrarSecciones() {
  const secciones = document.querySelectorAll(".d-none");
  secciones.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}
