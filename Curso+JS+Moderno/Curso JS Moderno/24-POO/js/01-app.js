// declaracion de clase
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `El nombre del cliente es ${this.nombre} y su saldo es de ${this.saldo}`;
  }

  // Los métodos estaticos son propios de la clase, no se puede acceder mediante una instancia
  //los métodos estaticos no requieren una instancia
  // Los métodos estaticos no pueden acceder a las propiedades de la clase

  static bienvenida() {
    return `Hola, Bienvenido/a al cajero`;
  }
}

const pablo = new Cliente("Pablo", 600);

console.log(pablo);
console.log(pablo.mostrarInformacion());
console.log(Cliente.bienvenida());

// expresion de clase
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `El nombre del cliente es ${this.nombre} y su saldo es de ${this.saldo}`;
  }

  // Los métodos estaticos son propios de la clase, no se puede acceder mediante una instancia
  //los métodos estaticos no requieren una instancia
  // Los métodos estaticos no pueden acceder a las propiedades de la clase
  static bienvenida() {
    return `Hola, Bienvenido/a al cajero`;
  }
};

const juan = new Cliente2("Juan", 300);

console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente2.bienvenida());
