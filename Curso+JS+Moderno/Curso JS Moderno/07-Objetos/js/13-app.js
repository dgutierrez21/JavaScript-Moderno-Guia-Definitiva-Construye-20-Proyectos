const producto = {
  nombre: "Teclado Keychron Q6",
  precio: 215.99,
  disponible: true,
};

console.log(Object.keys(producto)); // devuelve un arreglo con las llaves del objeto

console.log(Object.values(producto)); // devuelve un arreglo con las valores del objeto

console.log(Object.entries(producto)); // devuelve un arreglo con subarreglos con las propiedades y sus respectivos valores
