// Una variable se declara para indicarle al programa a partir de qué lugar empieza a existir, qué nombre tendrá y qué tipo de datos almacenará, esto ultimo no aplica en javascript. La asignación de un valor inicial se llama inicialización.

// Declarar una variable
var producto;

// Inicializar una variable
producto = "Monitor de 24 pulgadas";

// Nunca mezclar comillas
// producto = "Monitor de 19 pulgadas'; esta linea da error

console.log(producto);

// Javascript es un lenguaje de tipo dinamico, por lo tanto, no se especifica el tipo de dato.
producto = 20;

console.log(producto);

// declarar e inicialiar multiples variables

var categoria = "Computadoras",
  marca = "Lenovo",
  calificacion = 7.5;

console.log(categoria, marca, calificacion);

// Las variables no se pueden declarar iniciando con numeros

// var 44dias = "Cuarenta y cuatro dias"; // esta linea da error

// Las variables si se pueden declarar iniciando con guiones bajos

var _dia = 33,
  __dias45 = 45;

console.log(_dia, __dias45);

// declarar una variable de forma correcta

// La notación Camel Case combina las palabras directamente, sin usar ningún símbolo, estableciendo que la primera letra de cada palabra esté en mayúscula a excepción de la primera palabra, estando el resto de letras en minúsculas. Este tipo de notación está muy extendida, siendo su uso muy común tanto en la declaración de variables como en el nombre de funciones y métodos.

var aprendiendoJavascript = true,
  nombreProducto = "Mouse";

console.log(aprendiendoJavascript, nombreProducto);
