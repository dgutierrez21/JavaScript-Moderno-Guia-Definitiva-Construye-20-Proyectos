const form = document.querySelector("#formulario");

form.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault(); // detiene la accion por defecto del formulario, que en este caso es ir hacia la direccion y enviar los datos via post

  console.log("consultar una api");

  console.log(e);
  console.log(e.target.action);
}
