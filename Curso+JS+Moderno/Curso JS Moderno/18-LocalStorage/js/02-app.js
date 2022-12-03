const nombre = localStorage.getItem("nombre");

console.log(nombre);

// obtener datos guardados en localStorage con localStorage.getItem, este método acepta solo un argumento que es el nombre de la llave
const miProducto = localStorage.getItem("producto");
console.log(miProducto);

// convertir string ( json ) a objeto o arreglo
const miProductoObj = JSON.parse(localStorage.getItem("producto"));
console.log(miProductoObj);

const diasArr = JSON.parse(localStorage.getItem("dias"));

console.log(diasArr);
