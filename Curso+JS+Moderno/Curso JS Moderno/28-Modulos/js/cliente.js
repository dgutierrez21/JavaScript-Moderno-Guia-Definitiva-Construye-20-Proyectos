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

// SOLO SE PUEDE TENER UN EXPORT POR DEFECTO

// puede ir con o sin nombre, cuando lo importas, el lenguaje sabe que se refiere a lo que se esta exportando por defecto
export default function () {
  console.log("Este es el export default");
}
