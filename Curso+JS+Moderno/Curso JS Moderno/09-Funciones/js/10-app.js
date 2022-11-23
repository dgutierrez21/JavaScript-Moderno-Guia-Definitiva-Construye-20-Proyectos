const aprendiendo = function () {
  console.log("Aprendiendo JavaScript");
};

aprendiendo();

// funcion de flecha
const aprendiendo2 = () => {
  console.log("Aprendiendo JavaScript");
};

aprendiendo2();

// Si en la función de flecha solo ejecuta una linea, se da por implicito el return y no es necesario poner las llaves
const aprendiendo3 = () => "Aprendiendo JavaScript";

console.log(aprendiendo3());

// Si la funcion tiene solo un parametro, no es necesario poner los parentesis
const aprendiendo4 = lenguaje => `Aprendiendo ${lenguaje}`;

console.log(aprendiendo4("Swift"));
