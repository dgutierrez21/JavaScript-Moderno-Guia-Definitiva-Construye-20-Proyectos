//forma #1 de crear un arreglo
const numeros = [5, 10, 20];

//forma #2 de crear un arreglo, esta forma no es tan común de usar o de ver
const meses = new Array("octubre", "noviembre", "diciembre");

// Los arreglos estan conformados por su indice(empezando desde cero) y su respectivo valor

console.log(numeros);
console.log(meses);

// Un arreglo puede contener datos de todo tipo y tambien más arreglos

const miArreglo = [
  null,
  undefined,
  "Hola",
  45,
  { nombre: "Juan", cursoActual: "Javascript Moderno" },
  [1, 2, 3],
];

console.log(miArreglo);
