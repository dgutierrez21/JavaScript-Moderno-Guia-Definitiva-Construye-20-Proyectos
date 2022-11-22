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

console.log(`*
*
*
*
*`);

//Forma imperativa es usando los métodos como unshift(), con estos métodos siempre estamos trabajando con la variable original, modificandola, reescribiendola etc

// La Forma declarativa es usando el spread operator, con esta forma no modificamos directamente el arreglo original, sino que, crea una nueva

const carrito2 = [];

let resultado;

resultado = [...carrito2, producto];

console.table(resultado);
console.log(carrito2); // se sigue manteniendo vacio

//Si se desea agregar otro producto
resultado = [...resultado, producto2];

console.table(resultado);

// Agregar el producto al inicio
resultado = [producto3, ...resultado];

console.table(resultado);
