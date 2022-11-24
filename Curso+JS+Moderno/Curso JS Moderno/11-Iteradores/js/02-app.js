for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    break; // rompe la ejecución del for
  }
  console.log(`numero ${i}`);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    continue; // Termina la ejecución de ciclo actual y no ejecuta las siguientes lineas, en este caso, cuando i === 5 pasa a la siguiente ejecución, osea, 1 === 6
  }
  console.log(`numero ${i}`);
}

console.log(`*
*
*
*
*`);

// EJEMPLO DE USO
const carrito = [
  {
    nombre: "Monitor",
    precio: 400,
  },
  {
    nombre: "Pantalla",
    precio: 130,
    descuento: true,
  },
  {
    nombre: "Celular",
    precio: 300,
  },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene un descuento`);
    continue;
  }

  console.log(carrito[i].nombre);
}
