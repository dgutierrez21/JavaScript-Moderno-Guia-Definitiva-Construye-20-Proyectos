const usuario = true,
  puedePagar = true;

if (usuario && puedePagar) {
  console.log("Puedes pagar");
} else if (!usuario && !puedePagar) {
  console.log("NO puedes pagar");
} else if (!usuario) {
  console.log("Inicia sesion o crea una cuenta");
} else if (!puedePagar) {
  console.log("Fondos insuficientes.");
}

// NOTA: EL ORDEN DE LAS CONDICIONES ES MUY IMPORTANTE, PORQUE ELSE IF VA A EJECUTAR LA PRIMERA CONDICIÓN QUE SE CUMPLA, POR EJEMPLO = SI SE PONE LA SEGUNDA CONDICION DE ULTIMO ENTONCES NUNCA SE EJECUTARIA PORQUE SIEMPRE SE EJECUTARIA ALGUNA DE LAS ANTERIORES
