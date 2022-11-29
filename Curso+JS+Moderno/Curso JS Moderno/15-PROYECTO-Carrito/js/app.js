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
    console.log("Presionando boton para agregar al carrito");
  }
}
