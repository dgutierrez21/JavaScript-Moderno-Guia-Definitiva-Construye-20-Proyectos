import { obtenerCliente, editarCliente } from "./API.js";
import { validar, mostrarAlerta } from "./funciones.js";

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    const parametroURL = new URLSearchParams(window.location.search);

    const idCliente = Number(parametroURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    // submit al formulario
    const form = document.querySelector("#formulario");
    form.addEventListener("submit", validarCliente);
  });

  function mostrarCliente(cliente) {
    for (const prop in cliente) {
      let inputFormulario = document.querySelector(`#${prop}`);
      inputFormulario.value = cliente[prop];
    }
  }

  function validarCliente(e) {
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;
    const id = document.querySelector("#id").value;

    e.preventDefault();

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
      id: Number(id),
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    // reescribir el objeto
    editarCliente(cliente);
  }
})();
