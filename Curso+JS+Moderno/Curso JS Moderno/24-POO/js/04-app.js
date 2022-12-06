// declaracion de clase
class Cliente {
  // Una propiedad privada solo se puede acceder desde la clase desde otros métodos
  #nombre;
  #edad;

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `El nombre del cliente es ${this.#nombre} y su saldo es de ${
      this.saldo
    }`;
  }

  // Los métodos estaticos son propios de la clase, no se puede acceder mediante una instancia
  //los métodos estaticos no requieren una instancia
  // Los métodos estaticos no pueden acceder a las propiedades de la clase

  static bienvenida() {
    return `Hola, Bienvenido/a al cajero`;
  }

  // método para establecer la edad
  setEdad(edad) {
    this.#edad = edad;
  }

  // método para obtener la edad
  getEdad() {
    return this.#edad;
  }
}

const pedro = new Cliente("Pedro", 4000);

// console.log(pedro.#nombre) // error
console.log(pedro.mostrarInformacion());

pedro.setEdad(34);

// console.log(pedro.#edad) // error
console.log(pedro.getEdad());
