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

// Herencia

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    // utilizar super para heredar propiedades del constructor padre
    super(nombre, saldo);

    this.telefono = telefono;
    this.categoria = categoria;
  }

  // si se crea un método con un nombre igual al del método del padre, se reescribe el método
  static bienvenida() {
    return "Bienvenido/a al cajero de empresas.";
  }
}

const miEmpresa = new Empresa("nombreEmpresa", 5000, 12345, "Tecnologia");

console.log(miEmpresa);
console.log(miEmpresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
