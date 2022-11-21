let resultado;

// PI

resultado = Math.PI;

// Redondear un numero

resultado = Math.round(2.8); // 3
resultado = Math.round(2.2); // 2
resultado = Math.round(2.5); // Javascript redondea hacia arriba

// Redondear siempre hacia arriba

resultado = Math.ceil(2.1); // 3

// Redondear siempre hacia abajo

resultado = Math.floor(2.9); // 2

// Raiz cuadrada

resultado = Math.sqrt(10);

// Valor absoluto

resultado = Math.abs(-500);

// Potencia

resultado = Math.pow(2, 3);

// minimo

resultado = Math.min(4, 6, -3, 10, 20);

// maximo

resultado = Math.max(4, 6, -3, 10, 20);

// aleatorio
// Math.random() devuelve un número aleatorio entre 0 (inclusivo), y 1 (exclusivo):

resultado = Math.random();

// Devuelve un número entero aleatorio de 1 a 10:

resultado = Math.floor(Math.random() * 11);

console.log(resultado);
