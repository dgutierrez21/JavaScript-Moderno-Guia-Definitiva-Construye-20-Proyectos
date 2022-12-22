// new binding
// crear un nuevo objeto con el object constructor y se tiene acceso a la palabra reservada this

function Auto(marca, color) {
  this.marca = marca;
  this.color = color;
}

const auto1 = new Auto("Audi", "Negro");

console.log(auto1);

// window binding
// asignar una variable a la ventana global

window.color = "Verde";

function hola() {
  console.log(color);
}
hola();
