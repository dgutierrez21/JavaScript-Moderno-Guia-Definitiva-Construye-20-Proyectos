function descargarNuevoClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevoPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Pedidos...");

    setTimeout(() => {
      resolve("Los Pedidos fueron descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    const clientes = await Promise.all([
      descargarNuevoClientes(),
      descargarNuevoPedidos(),
    ]);
    console.log(clientes);
    console.log(clientes[0]);
    console.log(clientes[1]);
    // const pedidos = await descargarNuevoPedidos();
  } catch (error) {
    console.log(error);
  }
};

app();

// nota:  cuando haces lo de Promise.all inicias todas las promesas al mismo tiempo, usualmente tomas todas las promesas del servidor en un mismo fetch o async await o sea, se ejecutan de manera sincronica, una a la vez hasta que esten todas y poder emplearlas en la siguiente funcion.
// En este caso supongamos que el promise1 consume 5 segundos y promise 2 consume 10, resolver promise1 por un lado y luego promise 2 llevaria un total de 15 segundos, mientras que hacerlos en un promise.all las iniciaria y acabaria cuando la que mas tiempo toma finalice, por lo tanto tomando solo 10 segundos y ahorrando 5 a la funcion o funciones que luego emplean, muestran o almacenan esos datos.
// Luego hay otras formas de hacer llamados relativamente asincronicos por ejemplo a una API, pero eso por lo que yo conozco implica redux, middlewares y ya es un tema mas de react.
