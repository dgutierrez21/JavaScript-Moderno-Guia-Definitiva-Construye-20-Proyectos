document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const inputEmail = document.querySelector("#email"),
    inputAsunto = document.querySelector("#asunto"),
    inputMensaje = document.querySelector("#mensaje");

  // Eventos
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta();
    } else {
      console.log("El campo contiene un valor");
    }
  }

  function mostrarAlerta() {
    // Generar alerta en el html
    const error = document.createElement("p");
    error.textContent = "Hubo un error...";

    console.log(error);
  }
});
