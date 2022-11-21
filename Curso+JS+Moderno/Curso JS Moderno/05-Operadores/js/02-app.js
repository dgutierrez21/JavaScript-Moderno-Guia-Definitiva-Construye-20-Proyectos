const num1 = 20,
  num2 = "20",
  num3 = 30;

// Comprobrar si dos numero son iguales, comprobando solo en el valor

console.log(num1 == num3); // false
console.log(num3 == num1); // false

console.log(num1 == num2); // true

// Comprobrar si dos numero son iguales estrictamente, es decir,  comprobando el tipo de dato y el valor

console.log(num1 === num2); // false

console.log(num1 === Number.parseInt(num2)); // true

// Comprobaar si los valores son diferentes

console.log(num1 != num3); // true
console.log(num1 != num2); // false

// Estrictamente diferente
console.log(num1 !== num2); // true

const pass1 = "admin",
  pass2 = "Admin";

console.log(pass1 != pass2); // true
