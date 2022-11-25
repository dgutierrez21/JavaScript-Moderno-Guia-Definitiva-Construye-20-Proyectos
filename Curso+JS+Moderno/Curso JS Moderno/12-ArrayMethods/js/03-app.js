const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 700 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 500 },
];

// EJERCICIO SUMAR PRECIO

// con un forEach()
let precioTotal = 0;

carrito.forEach((precioProducto) => (precioTotal += precioProducto.precio));

console.log(precioTotal);

//Con el metodo reduce

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// La función reductora recibe cuatro argumentos:
// 1. Acumulador (acc)
// 2. Valor Actual (cur)
// 3. Índice Actual (idx)
// 4. Array (src)

// El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

const precioTotal2 = carrito.reduce(
  (total, precioProducto) => total + precioProducto.precio,
  0 // valor inicial de total
);

console.log(precioTotal2);

// EJEMPLO 2 PARA ENTENDER MEJOR EL REDUCE

const numeros = [50, 30, 20, 50, 100];

const resultado2 = numeros.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  500
);

// NOTA: SI NO SE LE DA UN VALOR INICIAL, EL VALOR POR DEFECTO VA A SER 0

console.log(resultado2);
