export const nombreCliente = "Pedro Alvarez";
export const ahorro = 1000;

export function mostrarInfo(cliente, ahorro) {
  return `Cliente: ${cliente} --- Ahorro: ${ahorro}`;
}

export function saldo(ahorro) {
  if (ahorro > 0) {
    console.log("Puede añadir al carrito");
  } else {
    console.log("Saldo insuficiente");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInfo() {
    return console.log(
      `El cliente ${this.nombre} tiene un ahorro de ${this.ahorro}`
    );
  }
}
