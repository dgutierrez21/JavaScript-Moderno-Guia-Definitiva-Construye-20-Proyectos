const meses = ["Enero", "Febrero", "Marzo", "Abril"];

// A pesar de que el arreglo este declarado con const, sus valores si se pueden modificar

//Moficar valores existentes
meses[0] = "nuevo mes";

//Agregar nuevos valores
meses[7] = "ultimo mes";

// Nota: a diferencia de otros lenguajes, javascript no agregar valores en blanco en las posiciones que no existen.

console.table(meses);
