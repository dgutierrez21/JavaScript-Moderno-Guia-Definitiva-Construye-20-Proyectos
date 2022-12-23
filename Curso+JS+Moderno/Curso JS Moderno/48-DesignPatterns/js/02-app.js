// constructor pattern

// se utiliza una clase base para que las demas clases ereden sobre esa clase

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const gerard = new Cliente("Gerard", "ger@ger.com", "Empresa G");

console.log(gerard);
