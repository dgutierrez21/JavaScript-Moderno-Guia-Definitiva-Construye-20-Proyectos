// Explicit binding

function persona(elemento1, elemento2) {
  console.log(
    `Mi nombre es ${this.nombre} y programo en ${elemento1} y ${elemento2}`
  );
}

const informacion = {
  nombre: "Brittney",
};

const lenguajeProgra = ["JavaScript", "Java"];

// call: se pasan los elementos de forma individual
persona.call(informacion, lenguajeProgra[0], lenguajeProgra[1]);

// apply: toma un arreglo completo
persona.apply(informacion, lenguajeProgra);

// bind: crea una nueva funición y se pasan los valores de forma individual

const nuevaFuncion = persona.bind(
  informacion,
  lenguajeProgra[0],
  lenguajeProgra[1]
);

nuevaFuncion();
