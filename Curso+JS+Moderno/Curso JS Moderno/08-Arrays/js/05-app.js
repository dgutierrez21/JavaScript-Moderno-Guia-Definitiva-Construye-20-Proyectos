const meses = ["Enero", "Febrero", "Marzo"];

//Agregar valores al final del arreglo
meses.push("Abril");
meses.push("Mayo");

console.table(meses);

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
