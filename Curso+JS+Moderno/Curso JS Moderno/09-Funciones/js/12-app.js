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

carrito.forEach(producto => 
  console.log(`${producto.nombre} -- Precio: ${producto.precio}`)
);

console.log(`*
*
*
*`);

const nuevoArreglo = carrito.map(
  producto => `${producto.nombre} -- Precio: ${producto.precio}`
);

console.log(nuevoArreglo);
