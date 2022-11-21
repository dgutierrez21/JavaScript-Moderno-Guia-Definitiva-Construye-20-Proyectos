const autenticado = false;

// NO ES NECESARIO HACER ESTO = auntenticado === true, porque ya se da por implicito
if (autenticado) {
  console.log("Puedes ver el curso");
} else {
  console.log("No puedes ver el curso");
}

// Operador ternario

console.log(
  autenticado
    ? "Puedes acceder a la información"
    : "No puedes acceder a la información"
);
