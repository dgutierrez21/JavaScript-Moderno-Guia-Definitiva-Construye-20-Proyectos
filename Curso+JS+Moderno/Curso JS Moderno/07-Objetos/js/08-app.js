"use strict";

const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
};
// Hacer que un objeto no se pueda modificar
Object.freeze(producto);

// producto.disponible = false; // Uncaught TypeError: Cannot assign to read only property 'disponible' of object '#<Object>'

// producto.imagen = "imagen.jpg"; // Uncaught TypeError: Cannot assign to read only property 'disponible' of object '#<Object>'

// Comprobar si un objeto esta congelado
console.log(Object.isFrozen(producto));

console.log(producto);
