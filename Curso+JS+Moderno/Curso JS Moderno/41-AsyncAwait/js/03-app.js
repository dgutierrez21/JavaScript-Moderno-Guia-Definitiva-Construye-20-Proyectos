function descargandoCliente() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de clientes ha sido descargado");
      } else {
        reject("Error en la conexión");
      }
    }, 3000);
  });
}

// en una expresion de funcion
const ejecutar = async () => {
  try {
    console.log("Este codigo se ejecuto inmediatamente");

    console.log("Se resolvio el promise");
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

ejecutar();
