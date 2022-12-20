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

// async await

// async se usa para indicar que esta función es asincrona y el código no nos marque error
async function ejecutar() {
  try {
    console.log("Este codigo se ejecuto inmediatamente");
    // await detiene la ejecución del código hasta que se resuelva el promise, si el promise es rechazado entonces no ejecuta las siguientes líneas en el try y pasa directamente al catch
    const respuesta = await descargandoCliente();

    console.log("Se resolvio el promise");
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

ejecutar();
