// querySelectorAll devuelve todos los elementos que concidan con el selector

const card = document.querySelectorAll(".card");

console.log(card);

const forms = document.querySelectorAll("#formulario");

console.log(forms);

// Si un elemento no existe
const noExiste = document.querySelectorAll("no-existe");

console.log(noExiste); // Devuelve una lista de nodos vacía
