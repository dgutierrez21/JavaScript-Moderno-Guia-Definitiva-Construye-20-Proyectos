const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 1000 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

let result1 = carrito.filter((producto) => producto.precio >= 1000);

console.log(result1);

let result2 = carrito.filter((producto) => producto.precio < 500);

console.log(result2);

let result3 = carrito.filter((producto) => producto.nombre !== "Teclado");

console.log(result3);

let result4 = carrito.filter((producto) => producto.nombre === "Televisión");

console.log(result4);
