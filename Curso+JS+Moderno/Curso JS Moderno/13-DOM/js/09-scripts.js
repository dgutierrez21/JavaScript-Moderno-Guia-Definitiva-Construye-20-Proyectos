const primerEnlace = document.querySelector("a");

// Eliminar elemento por si mismo con un método
primerEnlace.remove();

// Eliminar elemento desde el padre
const nav = document.querySelector(".navegacion");

nav.children[1].remove();

// O tambien con este otro método
// El método removeChild() de la interfaz Node quita un nodo secundario del DOM y a diferencia de remove(), este método devuelve el nodo eliminado.

const hijoEliminado = nav.removeChild(nav.children[1]);

console.log(hijoEliminado);

// Eliminar todos los elementos hijos
const destinos = document.querySelector(".destinos").children[1];

while (destinos.firstChild) {
  destinos.firstChild.remove();
}

if (!destinos.firstChild) {
  destinos.textContent =
    "En este momento no hay destinos populares que mostrar...";
}
