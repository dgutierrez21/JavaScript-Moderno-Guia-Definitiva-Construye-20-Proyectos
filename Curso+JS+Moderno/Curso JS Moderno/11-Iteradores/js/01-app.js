for (let i = 0; i < 10; i++) {
  console.log(`numero: ${i}`);
}

// EJERCICIO SI UN NUMERO ES PAR O IMPAR
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es PAR`);
  } else {
    console.log(`El número ${i} es IMPAR`);
  }
}

// EJERCICIO CARRITO

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
  console.log(
    `El producto #${i + 1} es: ${carrito[i].nombre} y su precio es de ${
      carrito[i].precio
    }`
  );
}
