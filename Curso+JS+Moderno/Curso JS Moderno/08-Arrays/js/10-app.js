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

// con el método forEach()
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
});

console.log(`*
*
*
*`);

//con el método map()
//La diferencia entre map y forEach es que map crea un arreglo nuevo y forEach no
const nuevoArreglo = carrito.map(function (producto) {
  return `${producto.nombre} -- Precio: ${producto.precio}`;
});

console.log(nuevoArreglo); // (3) ['Monitor -- Precio: 400', 'Pantalla -- Precio: 130', 'Celular -- Precio: 300']

// Si se intenta hacer con map lo que se hace con forEach y viceversa, esto devolveria valores undefined
