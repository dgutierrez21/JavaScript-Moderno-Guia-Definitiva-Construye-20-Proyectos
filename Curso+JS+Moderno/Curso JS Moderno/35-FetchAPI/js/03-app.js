const btnJsonArr = document.querySelector("#cargarJSONArray");

btnJsonArr.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleados.json";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHtml(resultado));
}

function mostrarHtml(empleados) {
  const contenido = document.querySelector(".contenido");

  const h2 = document.createElement("h2");
  h2.style.textAlign = "center";
  h2.textContent = "MIS EMPLEADOS";

  contenido.appendChild(h2);

  for (const empleado of empleados) {
    const p = document.createElement("p");
    const { id, nombre, trabajo } = empleado;
    p.textContent = `ID: ${id} -- Nombre: ${nombre} -- Trabajo: ${trabajo}`;

    contenido.appendChild(p);
  }
}
