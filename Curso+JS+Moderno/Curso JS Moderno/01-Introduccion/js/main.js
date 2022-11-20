// Pregunta al usuario su nombre
const nombre = prompt("Cual es tu nombre?");

// Toma el nombre y lo muestra en pantalla
document.querySelector(
  ".contenido"
).innerHTML = `${nombre} está aprendiendo JavaScript`;

// Este es un comentario de una linea

/* Este es un
comentario
de varios 
lineas */

const producto = "Teclado 60%";

const arreglo = [1, 2, 3, 4];

console.log(nombre);
console.error("Algo salió mal");

console.table(arreglo);

console.time("Warn");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");

console.timeEnd("Warn");

// Consideraciones con el punto y coma

// console.log("Hola") console.log("Mundo") esta linea da un error

console.log("Hola");
console.log("Mundo");

function miFuncion() {
  // Cuidar el codigo para que se vea limpio usando espacios o tab antes de las instruccciones
  console.log("Esta es mi función");
}
