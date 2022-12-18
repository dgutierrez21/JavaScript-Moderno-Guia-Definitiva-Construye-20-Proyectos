let cliente = {};

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

  console.log("Campos llenos");
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
