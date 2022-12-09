import {
  nombreCliente,
  ahorro,
  mostrarInfo,
  saldo,
  Cliente,
} from "./cliente.js";
// Nota: la extension del archivo es importante cuando se trabaja solo con javascript

console.log(nombreCliente);

console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));

saldo(ahorro);

const fernando = new Cliente("Fernando", 3500);

console.log(fernando);

fernando.mostrarInfo();
