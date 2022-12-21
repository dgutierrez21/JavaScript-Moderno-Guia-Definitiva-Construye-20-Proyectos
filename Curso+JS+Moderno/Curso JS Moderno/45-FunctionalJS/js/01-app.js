// first class functions
// asignar una funcion como si fuera un valor

const suma = (a, b) => {
  return a + b;
};

const resultado = suma;

console.log(resultado(10, 5));
