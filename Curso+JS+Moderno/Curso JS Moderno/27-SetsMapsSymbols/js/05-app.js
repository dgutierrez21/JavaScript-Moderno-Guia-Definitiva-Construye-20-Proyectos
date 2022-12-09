// Los simbols son nuevos a partir de ES6
// permiten crear una propiedad unica
// Las propiedades que utilizan un simbol, no son iterables

const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

console.log(Symbol() === Symbol());

const nombre = Symbol(),
  apellido = Symbol();

const persona = {};

persona[nombre] = "Pedro";
persona[apellido] = "Perez";
persona.tipoCliente = "Premium";
persona.saldo = 1000;

console.log(persona);

console.log(persona.nombre); // undefined

console.log(persona[nombre]); // Pedro
console.log(persona[apellido]); // Perez

console.log("**********************");

for (const prop in persona) {
  console.log(prop); // no imprime pedro y perez
}

// definir una descripcion del symbol

const nombreCliente = Symbol("Nombre del cliente");

const cliente = {};

cliente[nombreCliente] = "Gustavo";

console.log(cliente);

console.log(cliente[nombreCliente])

console.log(nombreCliente)