let cliente = {};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const inputMesa = document.querySelector("#mesa").value,
    inputHora = document.querySelector("#hora").value;

  // revisar si hay campos vacios
  if (!inputMesa || !inputHora) {
    console.log("Ambos campos son obligatorios");

    return;
  }

  console.log("Todos los campos estan llenos");
}
