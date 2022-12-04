const diaHoy = new Date();

let valor;

valor = diaHoy;

console.log(typeof diaHoy);

console.log(valor); // obtener la fecha completa, horas, minutos y segundos

console.log(valor.getFullYear()); // obtener el año

console.log(valor.getMonth()); // obtener el mes

console.log(valor.getMinutes()); // obtener los minutos

console.log(valor.getHours()); // obtener la hora

console.log(valor.getTime()); // obtener los milisegundos que han transcurrido desde el 1 de enero de 1970 hasta la fecha

console.log(Date.now()); // lo mismo que getTime()

// Tambien existen sets para modificar los valores del objeto fecha

valor.setFullYear(2010);

console.log(valor.getFullYear()); // 2010
