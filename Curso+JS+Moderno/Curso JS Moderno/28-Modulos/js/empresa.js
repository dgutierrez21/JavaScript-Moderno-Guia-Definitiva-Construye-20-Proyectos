import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }

  mostrarInfo() {
    return console.log(
      `La empresa ${this.nombre} de la categoría ${this.categoria} tiene un ahorro de ${this.ahorro}`
    );
  }
}
