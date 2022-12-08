// Los maps son listas ordenadas en llave y valor, como un objeto, pero un objeto con una sola propiedad

// Los maps tienen mejor performance que los objetos

// Los maps son especialmente diseñados para agregar, recorrer o quitar elementos

// Los maps son iterables

const cliente = new Map();

cliente.set("nombre", "Alonso");
cliente.set("tipo", "Premium");
cliente.set("saldo", 1000);
cliente.set(true, true);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has("saldo"));
console.log(cliente.has("saldo2"));

// obtener los valores que existen en un map

console.log(cliente.get("nombre")); // Alonso

// eliminar un elemento

// true si el elemento ha sido removido exitosamente en el Map; de otra manera retorna false.

console.log(cliente.delete("tipo"));
console.log(cliente.delete("numero"));

console.log(cliente.has("tipo"));
console.log(cliente.get("tipo"));

// eliminar todos los elementos
cliente.clear();

console.log(cliente);

// tambien se puede iniciar un map con valores

const paciente = new Map([
  ["nombre", "Alejandro"],
  ["sala", "sin definir"],
]);

console.log(paciente);

paciente.set("doctor", "Perez");

// reescribir un valor
paciente.set("nombre", "Mauren");

console.log(paciente);

paciente.forEach((dato, index) => {
  console.log(`${index} -- ${dato}`);
});
