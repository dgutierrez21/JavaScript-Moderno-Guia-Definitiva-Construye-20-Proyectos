const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 1000 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

// .every()
// Determina si todos los elementos en el array satisfacen una condición.

// Nota: Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

const resultado = carrito.every((producto) => producto.precio < 1500);

console.log(resultado); // true

const resultado2 = carrito.every((producto) => producto.precio < 500);

console.log(resultado2);

// RECUERDA!!!
// Si se desea revisar que al menos uno cumple con la condición se debe usar .some()

const resultado3 = carrito.some((producto) => producto.precio < 300);

console.log(resultado3);
