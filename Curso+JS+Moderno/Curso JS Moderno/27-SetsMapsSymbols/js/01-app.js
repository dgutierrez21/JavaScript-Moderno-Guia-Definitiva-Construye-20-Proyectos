// un set permite crear una lista de valores sin duplicados

// cuando se maneja un gran volumen de datos, un set tiende a ser más rapido que un objeto o un arreglo

// Algunos métodos que existen para los arreglos se pueden utilizar en los set. Al igual que los arreglos, los set tiene sus propios métodos.

// los set solamente son valores

const carrito = new Set();

// agregar un elemento a un set

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");

console.log(carrito);
// si se trata de agregar nuevamente un valor que ya existe, no lo va a agregar
carrito.add("Camisa");

console.log(carrito);

// en los set en lugar de usar length se usa size
console.log(carrito.size); // 2
console.log(carrito);

// comprobar si un valor existe en el set
console.log(carrito.has("Camisa")); // true

console.log(carrito.has("Guitarra")); // false

// Eliminar un elemento del set
console.log(carrito.delete("Disco #1")); // retorna un true: significa que si lo borro

console.log(carrito.delete("Zapatos")); // false: no lo borro porque no existe

console.log(carrito);

// los set son iterables

carrito.forEach((producto, index) => {
  console.log(producto);
  // IMPORTANTE: en un set, pararle un segundo parametro ( index ) a el foreach solo va a devolver lo mismo. ya que los set solo almacenan valores

  console.log(index);
});

// ejemplo de un uso de un set

// del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 40, 50, 50, 60, 70, 80, 90, 100];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
