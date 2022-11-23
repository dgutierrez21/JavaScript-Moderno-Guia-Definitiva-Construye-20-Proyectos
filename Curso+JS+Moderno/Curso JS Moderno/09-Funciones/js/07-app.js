// como se comunican las funciones

iniciarAplicacion();

function iniciarAplicacion() {
  console.log("Iniciando aplicación...");

  segundaFucion();
}

function segundaFucion() {
  console.log("Desde la segundad funcion");

  autenticarUsuario("Juan");
}

function autenticarUsuario(usuario) {
  console.log("Autenticando usuario... espere...");
  console.log(
    `Bienvenido ${usuario}, su correo y contraseña han sido autenticados exitosamente`
  );
}
