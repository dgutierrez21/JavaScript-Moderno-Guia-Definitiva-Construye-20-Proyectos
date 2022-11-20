const producto = "Monitor 24 pulgadas";

// Replace permite remplazar un string con otro
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor curvo"));

// Slice permite cortar(mover y eliminar de donde se encuentra) un string

// El primer parametro donde inicia la cadena y el segundo donde finaliza
console.log(producto.slice(0, 10));
// Si solo se le para un parametro va a cortar de ese indice hasta el final
console.log(producto.slice(11));
// Si el segundo parametro es menor al primero, no devuelve nada.
console.log(producto.slice(11, 5));

//Alternativa a slice
// El substring() método devuelve un subconjunto de un objeto String.
console.log(producto.substring(0, 10));
// a diferencia de slice, Si el segundo parametro es menor al primero, alterna los valores. En este ejemplo los alterna de 11, 5 a 5, 11.
console.log(producto.substring(11, 5));

// devolver sola la primera letra
const usuario = "Juan";

console.log(usuario.substring(0, 1)); // J

// O aun mas facil con chartAt()

// El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
// este método recibe un unico parametro, que es un entero entre 0 y 1 menos que la longitud de la cadena. Si no se proporciona ningún indice charAt() utilizará 0.

console.log(usuario.charAt()); // 0
console.log(usuario.charAt(2)); // a
