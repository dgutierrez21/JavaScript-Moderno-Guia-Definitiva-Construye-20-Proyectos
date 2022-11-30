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
      mostrarAlerta();
    } else {
      console.log("El campo contiene un valor");
    }
  }

  function mostrarAlerta() {
    // Generar alerta en el html
    const error = document.createElement("p");
    error.textContent = "Hubo un error...";
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Mostrar el error en el formulario
    form.appendChild(error);
  }
});
