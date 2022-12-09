// Los weakMaps son los menos utilizados
// Sirven muy bien para mantener una serie de datos como privados
// al igual que map, se conforma de llave y valor
// solamente acepta objetos

// al igual que los weakSet, no se pueden iterar
// no se puede saber la longitud usando size

const producto = {
  nombre: "Mouse",
  precio: 500,
  idProducto: 10,
};

const weakMap = new WeakMap();

weakMap.set(producto, "Monitor");

console.log(weakMap.has(producto)); // true

// extraer informacion
// no se puede acceder a los valores originales
console.log(weakMap.get(producto));

console.log(weakMap);

console.log(weakMap.delete(producto)); // true

console.log(weakMap);
