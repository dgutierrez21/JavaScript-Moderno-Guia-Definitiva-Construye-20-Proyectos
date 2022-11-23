// if else
const puntaje = 1000;

if (puntaje != 1000) {
  // puntaje es diferente a 1000 ???
  console.log(
    "Si la condición es verdadera, ejecuta este código TRUE | TRUE | TRUE | TRUE"
  );
} else {
  console.log(
    "Si la condición es falsa, ejecuta este otro código FALSE | FALSE | FALSE"
  );
}

// Comparador estricto
if (puntaje === "1000") {
  // puntaje es de el mismo tipo de dato y mismo valor a "1000" ???
  console.log(
    "Si la condición es verdadera, ejecuta este código TRUE | TRUE | TRUE | TRUE"
  );

  console.log(typeof puntaje);
  console.log(typeof "1000");
} else {
  console.log(
    "Si la condición es falsa, ejecuta este código FALSE | FALSE | FALSE"
  );

  console.log(typeof puntaje);
  console.log(typeof "1000");
}
