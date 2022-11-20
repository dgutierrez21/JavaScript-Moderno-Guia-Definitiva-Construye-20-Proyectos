const producto = "Monitor 24 pulgadas",
  precio = "150 USD";

// Existen varias formas de concatenar strings

// 1. con el metodo concat()
console.log(producto.concat(" " + precio));
console.log(producto.concat(" en descuento"));

// 2. usando el signo más +
console.log(producto + " con un precio de: " + precio);
console.log(producto + " en descuento");
console.log("El producto " + producto + " tiene un precio de: " + precio);

// 3. con backtick (Acento grave)
console.log(`El producto ${producto} tiene un precio de ${precio}`);

//4. con coma, agrega un espacio automaticamente y la forma más rapida si se domina el teclado.
console.log("El producto", producto, "tiene un precio de", precio);
