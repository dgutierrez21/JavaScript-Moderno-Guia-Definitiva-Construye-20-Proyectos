document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const inputEmail = document.querySelector("#email"),
    inputAsunto = document.querySelector("#asunto"),
    inputMensaje = document.querySelector("#mensaje"),
    form = document.querySelector("#formulario");

  // Eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(e.target.id, e.target.parentElement);
    } else {
      console.log("El campo contiene un valor");
    }
  }

  function mostrarAlerta(nombreCampo, referencia) {
    // Comprobar si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }

    // Generar alerta en el html
    const error = document.createElement("p");
    error.textContent = `El campo ${nombreCampo} es obligatorio`;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Mostrar el error en el formulario
    referencia.appendChild(error);
  }
});
