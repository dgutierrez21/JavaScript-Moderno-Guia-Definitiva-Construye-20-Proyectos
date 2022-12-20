console.log(1 + 1);

// nos permite que en caso de que nuestra app falle, aún así siga funcionando

try {
  autenticaUsuario();
} catch (error) {
  // "administrar el error"
  console.log(error);
}

console.log(2 + 2);

// solo usar en parte criticas de una aplicación, por ejemplo: conectar una base de datos, consultar una API, autenticar un usuario o acciones en las que necesitemos que nuestra app siga funcionando
