const meses = ["Enero", "Febrero", "Mayo"],
  meses2 = ["Marzo", "Abril"],
  meses3 = ["Junio", "Julio"];

// NOTA: EL ORDEN EN EL QUE SE PASAN ES IMPORTANTE
const resultado = meses.concat(meses2, meses3, "Otro mes");

console.log(resultado);

// Con spread operator

const resultado2 = [...meses, ...meses2, ...meses3, "Otro mes"];

console.log(resultado2);
