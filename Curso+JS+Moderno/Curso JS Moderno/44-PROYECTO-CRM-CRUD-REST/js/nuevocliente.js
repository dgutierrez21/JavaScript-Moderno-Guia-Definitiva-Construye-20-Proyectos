import { mostrarAlerta } from "./funciones.js";

(function () {
  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      correo,
      telefono,
      empresa,
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    console.log("Se paso la validación");
  }

  function validar(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
