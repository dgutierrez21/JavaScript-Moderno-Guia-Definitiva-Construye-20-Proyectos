// Ejemplo de carrito de compras en internet
const carrito = [];

//Definir un producto
const producto = {
  nombre: "Mouse logitech",
  precio: 30,
};

const producto2 = {
  nombre: "Celular",
  precio: 200,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Monitor 24 pulgadas",
  precio: 300,
};

// Agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);

// Eliminar ultimo elemento de un arreglo

carrito.pop();

console.table(carrito);

carrito.shift();

console.table(carrito);

//Eliminar un elemento en especifico con splice
const carrito2 = [];

carrito2.push(producto, producto2, producto3);

console.table(carrito2);

//recibe dos parametros, el indice del elemento y cuantos va a eliminar
carrito2.splice(1, 1); // elimina producto2 solamente

console.table(carrito2);
