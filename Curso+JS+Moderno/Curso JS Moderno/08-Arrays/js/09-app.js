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

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} -- Precio: ${carrito[i].precio}`);
}

console.log(`*
*
*
*`);

// con el método forEach()
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
});
