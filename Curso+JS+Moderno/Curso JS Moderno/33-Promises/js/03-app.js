const aplicarDescuento = new Promise((resolver, rechazar) => {
  const descuento = true;

  if (descuento) {
    resolver("Descuento aplicado");
  } else {
    rechazar("No se pudo aplicar el descuento");
  }
});

console.log(aplicarDescuento);

// hay 3 valores posibles

// fulfilled - el promise se cumplio
// rejected - el promise no se cumplio
// pending - no se ha cumplido y tampoco ha sido rechazado

// se aplico el descuento, entonces hacer esto
aplicarDescuento
  .then((resultado) => descuento(resultado))
  //No se aplico el descuento, entonces hacer esto
  .catch((error) => {
    console.log(error);
  });

function descuento(menssaje) {
  console.log(menssaje);
}
