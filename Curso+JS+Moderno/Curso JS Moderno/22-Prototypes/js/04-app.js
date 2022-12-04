function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// instanciar

// NOTA: siempre que se cree un nuevo método para el prototype del objeto, se debe hacer con una expresion de funcion anonima ya que si se usa una funcion flecha el this no va a ser el objeto.
Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
    return tipo;
  }

  if (this.saldo > 5000) {
    tipo = "Platinum";
    return tipo;
  }

  tipo = "Normal";
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Tipo cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retirarSaldo = function (cantidad) {
  this.saldo -= cantidad;

  return console.log(
    `El retiro de saldo ha sido exitoso. Le quedan ${this.saldo} en su cuenta.`
  );
};

function Persona(nombre, saldo, telefono) {
  // se puede decir que con esto estamos herendado el constructor de Cliente
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

// Heredar métodos | copiar el prototype y asignarlo a otra funcion

// siempre es necesario clonar las propiedades antes de instanciar
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Persona;

// instanciar
const pedro = new Persona("Pedro", 3500, 12345);

console.log(pedro);
console.log(pedro.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  const { nombre, telefono } = this;
  return console.log(`El telefono de ${nombre} es ${telefono}`);
};

pedro.mostrarTelefono();
