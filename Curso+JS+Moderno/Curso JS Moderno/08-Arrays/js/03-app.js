const meses = ["Enero", "Febrero", "Marzo", "Abril"];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);

//Cuanto mide el arreglo
console.log(meses.length); // 4, length si empieza a contar desde 1

// Recorrer un arreglo con un bucle for

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
