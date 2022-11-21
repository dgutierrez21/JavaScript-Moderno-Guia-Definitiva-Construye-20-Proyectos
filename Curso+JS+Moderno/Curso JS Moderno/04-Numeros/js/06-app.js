const num1 = "40",
  num2 = "40.2",
  num3 = "Uno",
  num4 = 40;

console.log(typeof num1, num1); // string

stringANumero = Number.parseInt(num1); // number
console.log(typeof stringANumero, stringANumero);

console.log(Number.parseInt(num2)); // siempre devuelve un entero
console.log(Number.parseFloat(num2)); // lo convierte en número de coma flotante

console.log(Number.parseInt(num3)); // NaN = no es un número

// Comprobar si un numero es entero o no
// primero comprueba si es un numero, despues comprueba si es un flotante
console.log(Number.isInteger(num2)); // false

const float = Number.parseFloat(num2);

console.log(Number.isInteger(float)); // false

// Comprobar si un numero es flotante
