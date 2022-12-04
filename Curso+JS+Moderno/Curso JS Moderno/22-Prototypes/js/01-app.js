const cliente = {
  nombre: "Pedro",
  saldo: 1000,
};

console.log(cliente);

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const maria = new Cliente("Maria", 2000);

console.log(maria);

// ¿Qué es un prototipo de JavaScript?

// un Prototipo de JavaScript se usa para agregar nuevas propiedades y métodos a un existente constructor de objetos.

// Un constructor de objetos se realiza en JavaScript de la siguiente manera:

function Jugador(nombre, apellido, pais, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.pais = pais;
  this.edad = edad;
}

// El objeto puede tener valores asignados de la siguiente manera:

const anioActual = new Date().getFullYear();

const jugador1 = new Jugador("Jamal", "Musiala", "Alemania", anioActual - 2003);

console.log(jugador1);

const jugador2 = new Jugador("Pablo", "Gavira", "España", anioActual - 2004);

console.log(jugador2);

// Ahora, si desea agregar una nueva propiedad a la Player objeto, se necesitará la propiedad prototipo de JavaScript. De esta manera, la propiedad agregada se compartirá entre todas las instancias del objeto.

// Todos los objetos JavaScript heredan propiedades y métodos de un prototipo:

// Date los objetos heredan de Date.prototype.
// Array los objetos heredan de Array.prototype.
// Player los objetos ( del ejemplo anterior ) heredan de Player.prototype.
// los Object.prototype está en la cima de la cadena de herencia prototipo Date objetos, Array objetos y Player todos los objetos heredan de Object.prototype.

// El siguiente fragmento de código resalta la sintaxis necesaria para usar prototipos para agregar una nueva propiedad “ sport ” a la Player objeto:

Jugador.prototype.deporte = "Fútbol";

console.log(`${jugador1.nombre} es un jugador de ${jugador1.deporte}`);

// También se pueden agregar nuevos métodos al constructor de objetos utilizando prototype, como se muestra a continuación:

Jugador.prototype.mostrarNombre = function () {
  return `${this.nombre} ${this.apellido}`;
};

console.log(jugador2.mostrarNombre());
