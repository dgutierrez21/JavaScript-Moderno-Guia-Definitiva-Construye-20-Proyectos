// mixin pattern

// es una forma de agregar funciones a una clase despues de que haya sido creada

// la idea de los mixins es que se puede crear un objeto con multiples funciones, tener alguna clase y si se llega a tener otra clase, tambien poder añadirle las funciones a esa otra clase

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}
class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInformacion() {
    console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
  },

  mostrarNombre() {
    console.log(`El nombre es: ${this.nombre}`);
  },

  mostrarEmail() {
    console.log(`El email de ${this.nombre} es ${this.email}`);
  },
};

// añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona("Pedro", "pedro@pedro.com");

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente("Giselle", "gis@gis.com");

console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();
cliente2.mostrarEmail();
