// Variables
const carrito = document.querySelector("#carrito"),
  listaCursos = document.querySelector("#lista-cursos"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  btnVaciarCarrito = document.querySelector("#vaciar-carrito");

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

  console.log(infoCurso);
}
