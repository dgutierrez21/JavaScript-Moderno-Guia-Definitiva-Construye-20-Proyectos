const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Comprobar si un valor existe

//Forma manual

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log(`El mes enero si existe`);
  }
});

// Con includes
// Includes funciona solo con arreglos que tienen un valor basado en un indice, si se quiere revisar si existe un valor en un arreglo de objetos no va a funcionar
const resultado = meses.includes("Enero");

console.log(resultado);

// En un arreglo de objetos se utiliza some
const existe = carrito.some((producto) => producto.nombre == "Celular");
console.log(existe);

// Some tambien se puede utilzar en un arreglo de indice
const existe2 = meses.some((mes) => mes === "Diciembre");
console.log(existe2);
