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

  // Eliminar cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Vaciar el carrito y eliminar el html
  btnVaciarCarrito.addEventListener("click", () => {
    articulosDelCarrito = [];

    limpiarHTML(); // Eliminar todo el html
  });
}

// Funciones
function agregarCurso(evento) {
  evento.preventDefault();

  if (evento.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = evento.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

function eliminarCurso(evento) {
  if (evento.target.classList.contains("borrar-curso")) {
    const idCurso = evento.target.getAttribute("data-id");

    // Eliminar del arreglo por el data-id
    articulosDelCarrito = articulosDelCarrito.filter((curso) => {
      // filtrar el curso por id

      if (curso.idCurso === idCurso) {
        if (curso.cantidad > 1) {
          curso.cantidad--;
          return curso;
        } else {
          delete curso;
        }
      } else {
        return curso;
      }
    });

    console.log(articulosDelCarrito);

    carritoHTML(); // Iterar sobre el carrito y mostrar su html
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

  // Revisar si un elemento ya existe en el carrito
  const elementoExiste = articulosDelCarrito.some(
    (cursoEnCarrito) => cursoEnCarrito.idCurso === infoCurso.idCurso
  );

  if (elementoExiste) {
    // Actualizar la cantidad
    const cursos = articulosDelCarrito.map((curso) => {
      if (curso.idCurso === infoCurso.idCurso) {
        curso.cantidad++;
        return curso; // devuelve el objeto actualizado
      } else {
        return curso; // devuelve los objetos que no son los duplicados
      }
    });

    articulosDelCarrito = [...cursos];
  } else {
    //Agregar elementos al arreglo del carrito
    articulosDelCarrito = [...articulosDelCarrito, infoCurso];
  }

  console.log(elementoExiste);

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
