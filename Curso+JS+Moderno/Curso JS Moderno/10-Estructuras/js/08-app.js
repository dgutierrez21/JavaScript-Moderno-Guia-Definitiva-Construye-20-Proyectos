const aunteticado = true;

if (aunteticado) {
  console.log("El usuario esta autenticado");
}

const puntaje = 101;

function revisarPuntaje() {
  if (puntaje > 500) {
    console.log("Puntuacion perfecta");

    return;
  }

  if (puntaje > 300) {
    console.log("Puntuacion media");

    return;
  }

  if (puntaje > 100) {
    console.log("Puntuacion baja");

    return;
  }
}
revisarPuntaje();
