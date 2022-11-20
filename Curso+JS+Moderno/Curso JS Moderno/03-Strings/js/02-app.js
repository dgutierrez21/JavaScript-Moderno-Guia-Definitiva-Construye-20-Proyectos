const producto = "Monitor de 20 pulgadas";

console.log(producto);

//Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

// Saber si un string contiene una palabra. si es así, nos devuelve el indice en el que empieza la palabra, sino, nos devuelve -1
console.log(producto.indexOf("pulgadas")); // 14
console.log(producto.indexOf("Tablet")); //-1

// Saber si un string contiene una palabra con el método includes(), si es así, nos devuelve true, sino, nos devuelve false.

console.log(producto.includes("Tablet")); // false
console.log(producto.includes("pulgadas")); // true
console.log(producto.includes("Pulgadas")); // false
