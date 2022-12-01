document.addEventListener("DOMContentLoaded", () => {
  //Objeto
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // Variables
  const inputEmail = document.querySelector("#email"),
    inputAsunto = document.querySelector("#asunto"),
    inputMensaje = document.querySelector("#mensaje"),
    form = document.querySelector("#formulario"),
    btnSubmit = document.querySelector('#formulario button[type="submit"]'),
    btnReset = document.querySelector('#formulario button[type="reset"]'),
    spinner = document.querySelector("#spinner");

  // Eventos
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  btnReset.addEventListener("click", (evento) => {
    evento.preventDefault();

    // Reiniciar objeto email
    for (const prop in email) {
      email[prop] = "";
    }

    form.reset();

    comprobarEmail();
  });

  form.addEventListener("submit", enviarEmail);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );

      email[e.target.id] = "";

      comprobarEmail();

      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido", e.target.parentElement);

      email[e.target.id] = "";

      comprobarEmail();

      return;
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar los valores
    email[e.target.id] = e.target.value.trim().toLowerCase();

    //Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // Generar alerta en el html
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Mostrar el error en el formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    // Comprobar si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex1 = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const regex2 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const resultado = regex2.test(email);

    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;

      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function enviarEmail(evento) {
    evento.preventDefault();

    spinner.classList.remove("hidden");
  }
});
