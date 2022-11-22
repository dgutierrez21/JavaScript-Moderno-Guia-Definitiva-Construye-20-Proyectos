const numeros = [5, 10, 20, [40, 50, 60]];

console.log(numeros);
console.table(numeros);

// para acceder a los valores del arreglo se utiliza corchetes

console.log(numeros[1]); // 10

console.log(numeros[0]); // 5

console.log(numeros[2]); // 20

console.log(numeros[20]); // undefined

// Acceder a los valores de un arreglo dentro de otro arreglo
console.log(numeros[3][1]); // 50
console.log(numeros[3][0]); // 40
console.log(numeros[3][2]); // 60
