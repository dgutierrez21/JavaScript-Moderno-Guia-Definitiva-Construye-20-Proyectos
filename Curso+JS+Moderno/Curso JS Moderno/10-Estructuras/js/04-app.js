const dinerEfectivo = 500,
  tarjeta = true,
  cheque = true,
  totalPagar = 500;

// Cuando hay más de dos condiciones, siempre se ejecuta la primera condición que se cumpla
if (dinerEfectivo >= totalPagar) {
  // presupuesto es mayor o igual a totalPagar ???
  console.log(
    "Su compra se ha realizado correctamente: Ha pagado con efectivo"
  );
} else if (tarjeta) {
  console.log("Su compra se ha realizado correctamente: Ha pagado con tarjeta");
} else if (cheque) {
  console.log("Su compra se ha realizado correctamente: Ha pagado con cheque");
} else {
  console.log("Fondos insuficientes");
}
