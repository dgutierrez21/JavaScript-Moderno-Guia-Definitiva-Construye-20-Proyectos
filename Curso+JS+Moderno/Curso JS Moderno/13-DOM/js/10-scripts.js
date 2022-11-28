// Generar html con JS

const enlace = document.createElement("a");

// Agrendole texto
enlace.textContent = "Ir a google";

// Añadiendo atributos
enlace.href = "https://www.google.com";

console.log(enlace);

enlace.target = "_blank";

enlace.classList.add("alguna-clase");

enlace.onclick = funcionAlerta;

function funcionAlerta() {
  alert("Haz dado click para ir a google");
}

// Seleccionar la nav
const nav = document.querySelector(".navegacion");

// insertBefore() inserta un nodo antes de un nodo de referencia como hijo de un especificado nodo padre.

// Parámetros

// newNode
// El nodo a insertar.

// referenceNode
// El nodo ante el cual newNode se inserta. Si esto es null, entonces newNode se inserta al final de los nodos secundarios del nodo.

// Valor de retorno
// Devuelve el hijo agregado ( a menos que newNode es un DocumentFragment, en cuyo caso el vacío DocumentFragment se devuelve ).

const hijoAgregado = nav.insertBefore(enlace, nav.children[1]);

console.log(hijoAgregado);
