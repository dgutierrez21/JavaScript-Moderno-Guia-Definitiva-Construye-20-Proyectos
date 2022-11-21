const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

// #1 forma de copiar un objeto, usando el metodo assign

const resultado = Object.assign(producto, medidas);

console.log(resultado);

console.log(resultado.peso);
console.log(resultado.nombre);

// #2 forma de copiar un objeto, usando el spread o rest operator

const resultado2 = { ...producto, ...medidas };

console.log(resultado2.nombre);
console.log(resultado2.medida);
