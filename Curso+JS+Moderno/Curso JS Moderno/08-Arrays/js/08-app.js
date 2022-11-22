// Destructuring de arreglos

const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45];

// A diferencia de los objetos, en los arreglos se elige que nombre ponerle porque los arreglos funcionan por posicion
const [primero, , , cuarto, , sexto, ...todosLosDemas] = numeros;

console.log(primero); // 5
console.log(cuarto); // 20
console.log(sexto); // 30

console.log(todosLosDemas); // (3) [35, 40, 45]
