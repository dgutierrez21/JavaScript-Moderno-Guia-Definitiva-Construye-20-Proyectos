const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 1000 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

//Con forEach

let resultado;

carrito.forEach((producto, indice) => {
  if (producto.nombre === "Teclado") {
    resultado = carrito[indice];
  }
});

console.log(resultado);

//Con find()
const resultado2 = carrito.find((producto) => producto.nombre === "Teclado");

console.log(resultado2);

const resultado3 = carrito.find((producto) => producto.precio < 500);

console.log(resultado3); // devuelve el objeto en el indice dos porque es el primero que encuentra y cumple con la condición
