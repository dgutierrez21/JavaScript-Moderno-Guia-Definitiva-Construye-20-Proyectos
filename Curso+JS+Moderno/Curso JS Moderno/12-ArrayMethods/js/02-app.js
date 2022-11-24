const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

//Econtrar el indice del mes encontrado

// Forma manual
meses.forEach((mes, indice) => {
  if (mes === "Marzo") {
    console.log(`Econtrado en el indice ${indice}`);
  }
});

// Con el metodo findIndex
// Si se encuentra, devuelve el indice y si no, devuelve -1
const indice = meses.findIndex((mes) => mes === "Julio");
console.log(indice); // 6

const indice2 = meses.findIndex((mes) => mes === "Noviembre");
console.log(indice2); // -1

// findIndex en arreglo de objetos

const objIndice = carrito.findIndex(
  (producto) => producto.nombre === "Teclado"
);

console.log(objIndice); // 4

const objIndice2 = carrito.findIndex(
  (producto) => producto.nombre === "Septiembre"
);

console.log(objIndice2); // -1

// NOTA: findIndex devuelve solo la primer considencia que encuentra
const objIndice3 = carrito.findIndex(
  (precioProducto) => precioProducto.precio === 500
);

console.log(objIndice3); // 0
