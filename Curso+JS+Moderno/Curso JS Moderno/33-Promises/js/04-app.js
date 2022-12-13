const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pais) {
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
      } else {
        reject("Ingrese un país válido.");
      }
    }, 2500);
  });

function mostrarResultado(resultadoPromise) {
  console.log(resultadoPromise);
  console.log(paises);
}

nuevoPais("Alemania")
  .then((resultado) => {
    mostrarResultado(resultado);

    return nuevoPais("Francia");
  })
  .then((resultado) => {
    mostrarResultado(resultado);

    return nuevoPais("");
  })
  .then((resultado) => {
    mostrarResultado(resultado);

    return nuevoPais("Islandia");
  })
  .then((resultado) => {
    mostrarResultado(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
