document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const inputEmail = document.querySelector("#email"),
    inputAsunto = document.querySelector("#asunto"),
    inputMensaje = document.querySelector("#mensaje");

  // Eventos
  inputEmail.addEventListener("blur", (e) => {
    console.log(e.target.value);
  });
});
