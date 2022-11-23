// 65. Ejemplo con múltiples funciones que se pasan valores

function sumar(a, b) {
  return a + b;
}

const resultadoSuma = sumar(10, 5);

console.log(resultadoSuma);

// Ejemplo avanzado

let total = 0;

function agregarAlCarrito(precio) {
  return (total += precio);
}

function aniadirImpuestos(totalCompra) {
  return totalCompra * 1.13;
}

agregarAlCarrito(1000);
agregarAlCarrito(2000);
agregarAlCarrito(3000);

const totalPagar = aniadirImpuestos(total);

console.log(`El total a pagar es de ${totalPagar.toFixed()}`);
