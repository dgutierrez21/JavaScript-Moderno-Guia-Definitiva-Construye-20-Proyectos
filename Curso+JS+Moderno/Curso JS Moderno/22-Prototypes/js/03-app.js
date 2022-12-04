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

const pedro = new Cliente("Pedro", 11000);

console.log(pedro);

console.log(pedro.tipoCliente());

console.log(pedro.nombreClienteSaldo());

pedro.retirarSaldo(3000);

console.log(pedro.nombreClienteSaldo());

console.log(pedro);
