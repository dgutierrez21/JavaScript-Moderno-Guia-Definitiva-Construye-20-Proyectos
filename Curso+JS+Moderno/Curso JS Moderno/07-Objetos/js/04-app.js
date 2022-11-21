const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
};

// const nombre = producto.nombre;

//Usando desestructuración se extrae el valor y se crea una variable, esto simplifica mucho las cosas

const { nombre, precio, disponible, NoExiste } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(NoExiste); // undefined
