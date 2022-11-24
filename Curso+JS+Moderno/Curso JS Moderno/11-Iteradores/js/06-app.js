const tareaPendientes = [
  "Lavar Carro",
  "Estudiar JavaScript",
  "Hacer ejercicio",
  "Comprar monitor",
];

tareaPendientes.forEach((tarea, indice) =>
  console.log(`La tarea ${indice} es ${tarea}`)
);

console.log(`*
*
*
*`);

const carrito = [
  {
    nombre: "Monitor",
    precio: 400,
  },
  {
    nombre: "Pantalla",
    precio: 130,
  },
  {
    nombre: "Celular",
    precio: 300,
  },
];

carrito.forEach((producto) =>
  console.log(`${producto.nombre} con un precio de ${producto.precio}`)
);

console.log(`*
*
*
*`);

carrito.map((producto) =>
  console.log(`${producto.nombre} con un precio de ${producto.precio}`)
);

// La direncia entre forEach y map, es que el map devuelve un nuevo arreglo mientras que forEach no.

console.log(`*
*
*
*`);

const varForEach = carrito.forEach(
  (producto) => `${producto.nombre} con un precio de ${producto.precio}`
);

const varMap = carrito.map(
  (producto) => `${producto.nombre} con un precio de ${producto.precio}`
);

console.log(varForEach);
console.log(varMap);
