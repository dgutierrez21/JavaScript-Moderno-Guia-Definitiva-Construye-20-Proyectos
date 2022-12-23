// module pattern

// const mostrarCliente = (nombre) => {
//   console.log(nombre);
// };

// export default mostrarCliente;

// forma antes de ES6

const modulo1 = (function () {
  const nombre = "Pedro";

  function hola() {
    console.log("Hola");
  }

  return {
    nombre,
    hola,
  };
})();
