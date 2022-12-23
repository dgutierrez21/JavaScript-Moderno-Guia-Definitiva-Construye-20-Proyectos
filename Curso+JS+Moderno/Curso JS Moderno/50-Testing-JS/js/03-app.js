function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

async function sumaAsync(a, b) {
  return Promise.resolve(suma(a, b));
}

let resultado = suma(1, 10);

let esperado = 15;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

test("Suma 10 + 20, el resultado debe ser 30", async () => {
  const resultado = await sumaAsync(10, 20);

  const esperado = 31;

  expected(esperado).toBe(resultado);
});

async function test(mensaje, callback) {
  try {
    await callback();
    console.log(`El test: "${mensaje}" se ejecutó correctamente`);
  } catch (error) {
    console.log("Ha ocurrido un error");
    console.log(error);
  }
}

function expected(esperado) {
  return {
    toBe(resultado) {
      if (resultado !== esperado) {
        console.error(
          `El ${resultado} es diferente a lo esperado, la prueba no pasó`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
    toEqual(resultado) {
      if (resultado !== esperado) {
        console.error(
          `El ${resultado} No es igual a lo esperado, la prueba no pasó`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
  };
}
