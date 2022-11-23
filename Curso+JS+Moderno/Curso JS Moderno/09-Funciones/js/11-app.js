const aprendiendo = function (lenguaje) {
    console.log(`Aprendiendo ${lenguaje}`)
}

aprendiendo("JavaScript")

const aprendiendo2 = lenguaje => `Aprendiendo ${lenguaje}`;

console.log(aprendiendo2("JavaScript"));

const aprendiendo3 = function (lenguaje1, lenguaje2) {
    console.log(`Aprendiendo ${lenguaje1} y ${lenguaje2}`);
}

aprendiendo3("JavaScript", "Swift");

// LOS PARENTESIS SOLO SON NECESARIOS CUANDO SE TIENE MÁS DE UN PARAMETRO
const aprendiendo4 = (lenguaje1, lenguaje2) => `Aprendiendo ${lenguaje1} y ${lenguaje2}`;

console.log(aprendiendo4("Javascript", "Swift"));
