// currying
// dividir una funcion que toma más de un parametro en argumentos de forma parcial

const suma = (a, b, c) => a + b + c;

console.log(suma(1, 2, 3));

// currying
const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);

const resultado = primerNumero(10, 20);

console.log(resultado);

// dividirla aún más

const parcial2 = (a) => (b) => (c) => suma(a, b, c);

const primerNum = parcial2(10);
const segundoNum = primerNum(20);

const resultado2 = segundoNum(30);

console.log(resultado2);

// se puede simplificar más

const resultado3 = parcial2(30)(20)(30);

console.log(resultado3);
