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

const tareaPendientes = [
  "Lavar Carro",
  "Estudiar JavaScript",
  "Hacer ejercicio",
  "Comprar monitor",
];

// For of sirve para iterar sobre arreglos, se puede decir que es como una sintaxis más simplificada
for (const tarea of tareaPendientes) {
  console.log(tarea);
}

for (const producto of carrito) {
  console.log(
    `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
  );
}
