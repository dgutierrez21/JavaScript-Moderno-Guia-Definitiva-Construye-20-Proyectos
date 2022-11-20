const producto = "                        Monitor 24 pulgadas              ";

console.log(producto);
console.log(producto.length);

// Eliminar de inicio
console.log(producto.trimStart());
console.log(producto.trimEnd());

// Encadenando metodos
console.log(producto.trimStart().trimEnd());

console.log(producto.trim());
