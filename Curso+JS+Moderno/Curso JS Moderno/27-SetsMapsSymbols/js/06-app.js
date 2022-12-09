// crear nuestro propio iterador

function creaIterador(carrito) {
  let i = 0;

  return {
    siguiente: () => {
      const fin = i >= carrito.length;
      const valor = !fin ? carrito[i++] : undefined;
      // Analiza la parte donde la variable "i" creada como contador se utiliza para la posición en el arreglo pero al mismo tiempo iterarlo en un solo paso, recuerda que el operador ++ tiene un funcionamiento distinto antes o después, en este caso leé la variable en la posición y luego lo itera guardando al mismo tiempo su valor.

      return { fin, valor };
    },
  };
}
const carrito = ["Producto 1", "Producto 2", "Producto 3"];

// utilizar el iterador
const recorrerCarrito = creaIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
