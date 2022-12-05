// declaracion de clase
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const pablo = new Cliente("Pablo", 600);

console.log(pablo);

// expresion de clase
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const juan = new Cliente2("Juan", 300);

console.log(juan);
