// funciones puras o pure functions

// son funciones que retornan un dato pero no modifican los valores de las variables

// retornan la mismca cantidad de valores que recibio

const duplicar = (num) => num * 2;

const numero = 20;

const resultado = duplicar(numero);

console.log(resultado);
console.log(numero); // no modifica el valor
