const efectivo = 300,
  credito = 300,
  disponible = efectivo + credito,
  totalPagar = 600;

if (
  efectivo >= totalPagar ||
  credito >= totalPagar ||
  disponible >= totalPagar
) {
  console.log("Compra realizada exitosamente");
} else {
  console.log("Fondos Insuficientes");
}
