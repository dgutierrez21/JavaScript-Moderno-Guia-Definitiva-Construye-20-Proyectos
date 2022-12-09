const ciudades = ["Londres", "Barcelona", "Madrid", "New york"];

const ordenes = new Set([123, 231, 131, 102]);

const datos = new Map();

datos.set("Nombre", "Pedro");
datos.set("Profesion", "Desarrollador web");

// Entries iterador
// El método Object.entries() devuelve una matriz de los pares clave-valor de propiedad con clave de cadena enumerables propios de un objeto determinado.

for (const entrada of ciudades.entries()) {
  console.log(entrada);
}

for (const entrada of ordenes.entries()) {
  console.log(entrada);
}

for (const entrada of datos.entries()) {
  console.log(entrada);
}

console.log(`*
*
*
*
*`);

// Values iterador
// El método Object.values() devuelve una matriz de valores de propiedad con clave de cadena enumerables propios de un objeto determinado.

// ejemplo 1
const persona = {
  nombre: "Esteban",
  edad: 24,
  peso: "70 kg",
};

// sin el iterador values
for (const key in persona) {
  if (persona.hasOwnProperty(key)) {
    console.log(persona[key]);
  }
}

// con el iterador values
const valoresObj = Object.values(persona);

console.log(valoresObj);

// ejemplo 2

console.log(datos);

for (const valor of datos.values()) {
  console.log(valor);
}

console.log(`*
*
*
*
*`);

// Keys iterador
for (const key of ciudades.keys()) {
  console.log(key);
}

for (const key of ordenes.keys()) {
  console.log(key);
}

for (const key of datos.keys()) {
  console.log(key);
}

// Iteradores por defecto

// el iterador por defecto de un arreglo y un set es values()
for (const ciudad of ciudades) {
  console.log(ciudad);
}

for (const orden of ordenes) {
  console.log(orden);
}

// el iterador por defecto de un map es entries()
for (const dato of datos) {
  console.log(dato);
}
