mostrarNombre("Hardy");

// declaración de función
function mostrarNombre(nombre) {
  console.log(`El nombre es: ${nombre}`);
}

// expresión de función

// mostrarNombre2("Warren"); // Uncaught ReferenceError: Cannot access 'mostrarNombre2' before initialization

// se comporta casí igual que una constante, no se eleva
const mostrarNombre2 = function (nombre) {
  console.log(`El nombre es: ${nombre}`);
};
