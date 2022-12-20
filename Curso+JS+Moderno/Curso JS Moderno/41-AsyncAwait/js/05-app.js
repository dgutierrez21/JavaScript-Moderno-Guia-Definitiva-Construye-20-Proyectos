// https://picsum.photos/list

const url = "https://pisum.photos/list";

document.addEventListener("DOMContentLoaded", () => {
  obtenerDatos();
  obtenerDatos02();
});

// promise

function obtenerDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}

// async await

// Nota: en este caso no nos va a devolver un error en caso de que falle, como si lo hace cuando se usa promise, se debe usar un try catch para obtener el mismo resultado que usando promise

async function obtenerDatos02() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

console.log(2 + 2);
