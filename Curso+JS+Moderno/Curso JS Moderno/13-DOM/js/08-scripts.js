const navegacion = document.querySelector(".navegacion");

//Traversing padre al hijo

console.log(navegacion);
console.log(navegacion.childNodes); // La propiedad de solo lectura Node.childNodes devuelve una colección de hijos nodes del elemento dado donde el primer nodo hijo es asignado un índice 0. Con esta propiedad los espacios en blanco son considerados elementos

console.log(navegacion.children); // Hace lo mismo que la propiedad anterior con la diferencia que devuelve una HTMLCollection que contiene todos los elementos secundarios del elemento sobre el que se llamó.

console.log(navegacion.children[2]);

const card = document.querySelector(".card");

console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = "Aprendiendo JavaScript";

console.log(card.children[0].src);

card.children[0].src = "img/hacer3.jpg";

//Traversing de hijo al padre

console.log(card);
console.log(card.parentElement);
console.log(card.parentElement.parentElement);
console.log(card.parentElement.parentElement.parentElement);

// Traversing al elemento siguiente ( hermano )

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(
  card.nextElementSibling.nextElementSibling.nextElementSibling
    .nextElementSibling
); // null

// Traversing al elemento anterior ( hermano )

const ultimoCard = document.querySelector(".card:nth-child(4)");

console.log(ultimoCard.children[0]);

console.log(ultimoCard.previousElementSibling.children[0]);
console.log(
  ultimoCard.previousElementSibling.previousElementSibling.children[0]
);
console.log(
  ultimoCard.previousElementSibling.previousElementSibling
    .previousElementSibling.children[0]
);

console.log(navegacion.firstElementChild); // primer hijo de un padre
console.log(navegacion.lastElementChild); // ultimo hijo de un padre
