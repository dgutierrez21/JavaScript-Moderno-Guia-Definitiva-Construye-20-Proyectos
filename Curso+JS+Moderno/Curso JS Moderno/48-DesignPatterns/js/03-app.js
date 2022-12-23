// Singleton pattern

// La caracteristica principal de este patron es que no permite crear multiples instancias de una misma clase, en cambio, siempre va a devolver el objeto instanciado

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const persona = new Persona("Geffrey", "gef@gef.com");

console.log(persona);
const persona2 = new Persona("Walter", "walter@walter.com");

console.log(persona2);
