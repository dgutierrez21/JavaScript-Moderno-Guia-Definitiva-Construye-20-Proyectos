// Un generador es una funcion que retorna un iterador

function* crearGenerador() {
  yield 1;
  yield "Pedro";
  yield 3 + 3;
  yield true;
}

const iterador = crearGenerador();

console.log(iterador); // cuando el generador no se utiliza se queda suspendido hasta que se utilice con el método next()

// cada vez que se llame a next, va a ir recorriendo cada yield
console.log(iterador.next()); // value 1, done false

// done significa que si ya ha terminado de iterar o no
console.log(iterador.next().value);
console.log(iterador.next().done);

console.log(iterador.next());
console.log(iterador.next()); // undefined, true

console.log(`*
*
*
*
*`);

// ejemplo
// generador para carrito de compras

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

function *generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
