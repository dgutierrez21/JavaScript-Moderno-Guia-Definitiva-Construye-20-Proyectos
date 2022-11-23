// Switch case
const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    pagar(metodoPago);
    break;
  case "tarjeta":
    pagar(metodoPago);
    break;
  case "cheque":
    pagar(metodoPago);
    break;
  default:
    console.log("Método de pago inválido");
    break;
}

function pagar(metodo) {
  console.log(`Su pago se ha realizado con ${metodo}`);
}
