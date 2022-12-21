import { obtenerCliente } from "./API.js";

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    const parametroURL = new URLSearchParams(window.location.search);

    const idCliente = Number(parametroURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);
  });

  function mostrarCliente(cliente) {
    for (const prop in cliente) {
      let inputFormulario = document.querySelector(`#${prop}`);
      inputFormulario.value = cliente[prop];
    }
  }
})();
