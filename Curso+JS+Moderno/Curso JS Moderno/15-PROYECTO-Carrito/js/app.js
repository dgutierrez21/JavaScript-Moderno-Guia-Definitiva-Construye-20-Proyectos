// Variables
const carrito = document.querySelector("#carrito"),
  listaCursos = document.querySelector("#lista-cursos"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  btnVaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosDelCarrito = [];

registrarEventos();

function registrarEventos() {
  // Evento cuando se agrega un curso al presionar el btn "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(evento) {
  evento.preventDefault();

  if (evento.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = evento.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

// Leer y extraer informacion del curso al que se le dio click
function leerDatosCurso(curso) {
  console.log(curso);

  // Objeto con el contenido al que se el dio click
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    idCurso: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Agregar elementos al arreglo del carrito

  articulosDelCarrito = [...articulosDelCarrito, infoCurso];

  console.log(infoCurso);

  console.log(articulosDelCarrito);

  carritoHTML();
}

// Mostrar el carrito en el HTML
function carritoHTML() {
  // Limpiar el html antes de generarlo
  limpiarHTML();

  // Recorrer el carrito y generar el html
  articulosDelCarrito.forEach((curso) => {
    const { imagen, titulo, precio, idCurso, cantidad } = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src="${imagen}" width="100">
    </td>
    <td>
    ${titulo}
    </td>
    <td>
    ${precio}
    </td>
    <td>
    ${cantidad}
    </td>
    <td>
    <a href="#" class="borrar-curso" data-id="${idCurso}"> X </a>
    </td>
    `;

    // Agregar el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Eliminar cursos del tbody
function limpiarHTML() {
  // contenedorCarrito.innerHTML = "";

  // Mas rapido que usar innerHTML
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
