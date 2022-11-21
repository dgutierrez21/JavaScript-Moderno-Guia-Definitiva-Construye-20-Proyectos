let puntaje = 5;

console.log(puntaje++); // muestra 5 porque primero muestra y luego aumenta
console.log(puntaje); // si se vuelve a llamar ahora si aumenta

let puntaje2 = 5;

console.log(++puntaje2); // muestra 6 porque primero aumenta y luego muestra

let puntaje3 = 10;
console.log("**************");

console.log(puntaje3--); // 10
console.log(puntaje3); // 9

let puntaje4 = 10;

console.log(--puntaje4); // 9

console.log("**************");
// Sumar más de uno

let puntaje5 = 10;

puntaje5 += 5; // 15
console.log(puntaje5);

puntaje5 += 5; // 20
console.log(puntaje5);

puntaje5 += 5; // 25
console.log(puntaje5);

console.log("**************");

puntaje5 -= 5; // 20
console.log(puntaje5);

puntaje5 -= 5; // 15
console.log(puntaje5);

puntaje5 -= 5; // 10
console.log(puntaje5);
