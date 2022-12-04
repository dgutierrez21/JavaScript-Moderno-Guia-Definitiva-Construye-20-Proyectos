function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const maria = new Cliente("Maria", 2000);

console.log(maria);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;

  return `La clienta ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(maria));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;

  return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const CCJ = new Empresa("código con juan", 5000, "cursos en línea");

console.log(formatearEmpresa(CCJ));

// El problema que solucinan los prototypes es que se evita intentar adivinar que funcion es para cade objeto en el caso de que más personas tengas que acceder al código, ya que nos permiten añadir funciones que son exclusivas de cada objeto y de esa forma solamente con acceder al prototype de cada objeto se puede conocer que funciones tiene disponibles.
