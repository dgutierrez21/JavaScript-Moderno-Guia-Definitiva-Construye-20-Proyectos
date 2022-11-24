const automovil = {
  modelo: "Camaro",
  anio: "1969",
  motor: "6.0",
};

// FORMA #1

let parrafo1 = "Las caracteristicas del carro son:\n";

for (const propiedad in automovil) {
  parrafo1 += `${propiedad}: ${automovil[propiedad]}\n`;
}

console.log(parrafo1);

// FORMA #2

// El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).

console.log(Object.entries(automovil));
console.log(Object.entries(automovil)[0]);
const [llave, valor] = Object.entries(automovil)[0];
console.log(llave, valor);

let parrafo2 = "Las caracteristicas del carro son:\n";

for (const [llave, valor] of Object.entries(automovil)) {
  parrafo2 += `${llave}: ${valor}\n`;
}

console.log(parrafo2);
