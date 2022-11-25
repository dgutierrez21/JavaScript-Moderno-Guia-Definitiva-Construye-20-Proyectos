const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 1000 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

// Spread operator con arreglo de indices
const meses2 = ["agosto", ...meses];

console.log(meses2);

// Spread operator con arreglo de objetos
const nuevoProducto = {
  nombre: "Mouse",
  precio: 40,
};

const nuevoCarrito = [...carrito, nuevoProducto]; // No se le pone los tres puntos porque no es un elemento iterable como un array o una cadena

console.log(nuevoCarrito);
