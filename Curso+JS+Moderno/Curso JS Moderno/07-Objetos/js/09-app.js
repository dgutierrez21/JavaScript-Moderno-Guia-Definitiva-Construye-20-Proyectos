"use strict";

const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
};
// a diferencia de freeze, seal si permite modificar las propiedades existentes
Object.seal(producto);

producto.disponible = false;
console.log(producto.disponible); // false

// producto.imagen = "imagen.jpg"; // Uncaught TypeError: Cannot add property imagen, object is not extensible

// Comprobar si un objeto esta sellado
console.log(Object.isSealed(producto));

console.log(producto);
