// Object literal
const producto = {
  nombre: "Teclado Keychron Q6",
  precio: 215.99,
  disponible: true,
};

// Object constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("AirPods de Apple", 108.0);

console.log(producto2);

const producto3 = new Producto("Television", 500);

console.log(producto3);
