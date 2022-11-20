const producto = "Monitor 24 pulgadas";

// repeat permite repetir una cadena de texto

const texto = " en promoción".repeat(3);

console.log(`${producto} ${texto} !!!`);

// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // (4) ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']

const hobbies = "Leer, hacer ejercicio, escuchar musica, aprender a programar";

console.log(hobbies.split(", ")); // (4) ['Leer', 'hacer ejercicio', 'escuchar musica', 'aprender a programar']

const tweet = "Aprendiendo Javascript Moderno #ModernoConJuan";

console.log(tweet.split("#")); // (2) ['Aprendiendo Javascript Moderno ', 'ModernoConJuan']
