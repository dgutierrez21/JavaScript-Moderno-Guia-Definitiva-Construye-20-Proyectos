import {
  nombreCliente,
  ahorro,
  mostrarInfo,
  saldo,
  Cliente,
} from "./cliente.js";

// importar empresa
import { Empresa } from "./empresa.js";
// Nota: la extension del archivo es importante cuando se trabaja solo con javascript

console.log(nombreCliente);

console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));

saldo(ahorro);

const fernando = new Cliente("Fernando", 3500);

console.log(fernando);

fernando.mostrarInfo();

const nuevaTech = new Empresa("NuevaTech", 25000, "Tecnología");

console.log(nuevaTech);

nuevaTech.mostrarInfo()