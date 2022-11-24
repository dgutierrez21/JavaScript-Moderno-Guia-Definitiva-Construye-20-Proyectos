const auntenticado = true,
  puedePagar = true;

console.log(auntenticado && puedePagar ? "Si puede pagar" : "No puede pagar");

console.log(
  auntenticado
    ? puedePagar
      ? "Si esta autenticado y puede pagar"
      : "Si esta autenticado pero no cuenta con suficientes fondos"
    : "No esta autenticado"
);
