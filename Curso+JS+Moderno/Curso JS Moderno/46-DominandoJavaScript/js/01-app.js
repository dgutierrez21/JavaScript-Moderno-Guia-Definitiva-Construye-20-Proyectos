// scope es el alcance de una variable

// tipos de scope:
// scope global
// scope en una función o bloque de código

const cliente = "Pedro";

function mostrarCliente() {
  console.log(cliente);
}

mostrarCliente();

function mostrarCliente2() {
  // la variable definida dentro de las llaves tiene prioridad
  const cliente = "Hugo";
  console.log(cliente);

  const cliente2 = "Alejandro";
}

mostrarCliente2();

// console.log(cliente2) // error: cliente solo exite dentro de la función

// ejemplo2

const login = true;

function clienteLogueado() {
  const clienteUser = "Joshua";
  console.log(clienteUser);

  if (login) {
    // console.log(clienteUser); // error: como la variable que se encuentra en el scope tiene prioridad entonces da como error que no se puede acceder antes de ser declarada

    const clienteUser = "Tommy";
    console.log(clienteUser);
  }
}

clienteLogueado();
