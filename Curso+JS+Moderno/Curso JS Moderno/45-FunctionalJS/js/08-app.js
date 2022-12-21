const cliente = "Pedro";

function mostrarCliente() {
  const cliente = "Alejandro";

  console.log(cliente);
}

console.log(cliente);

mostrarCliente();

// closures
// es una forma de acceder a un valor o funcion desde el exterior

const obtenerCliente = () => {
  const nombre = "Leonardo";

  function mostrarNombre() {
    console.log(nombre);
  }

  return mostrarNombre;
};

const cliente2 = obtenerCliente();

cliente2();
