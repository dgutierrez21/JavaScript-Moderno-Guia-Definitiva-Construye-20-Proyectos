const btnCargarJson = document.querySelector("#cargarJSON");
btnCargarJson.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";

  fetch(url)
    .then((respuesta) => {
      console.log(respuesta.status);
      console.log(respuesta);

      return respuesta.json();
    })
    .then((resultado) => mostrarHtml(resultado));
}

function mostrarHtml({ nombre, trabajo, empresa }) {
  const p = document.createElement("p");
  p.textContent = `El nombre del instructor es ${nombre}, trabaja de ${trabajo} y su empresa se llama ${empresa}`;

  document.querySelector("#contenido").appendChild(p);
}
