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

// EJEMPLO CREANDO NUEVO CARDS
const info = document.createElement("div"),
  parr1 = document.createElement("p"),
  parr2 = document.createElement("p"),
  parr3 = document.createElement("p");

parr1.textContent = "Concierto";
parr1.classList.add("categoria", "concierto");

console.log(parr1);

parr2.textContent = "Concierto de Rock JS";
parr2.classList.add("titulo");

console.log(parr2);

parr3.textContent = "$800 por persona";
parr3.classList.add("precio");

console.log(parr3);

// div info

info.classList.add("info");

console.log(info);

const parrafos = [parr1, parr2, parr3];

for (const parrafo of parrafos) {
  info.appendChild(parrafo);
}
// Crear imagen
const img = document.createElement("img");
img.src = "img/hacer2.jpg";

// Crear div card
const card = document.createElement("div");
card.classList.add("card");

// Asignar elementos hijos del card

const hijosCard = [img, info];

for (const hijo of hijosCard) {
  card.appendChild(hijo);
}

console.log(card);

// Insertar en el html

const contenedorCards = document.querySelector(".hacer .contenedor-cards");
contenedorCards.insertBefore(
  card,
  contenedorCards.children[contenedorCards.children.length - 1]
);
