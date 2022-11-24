let i = 0; // variable para inicializar el while

// while se ejecuta mientras una condicion sea verdadera
while (i < 10) {
  // condicion

  console.log(`Número ${i}`);

  i++; // incremento
}

// EJEMPLO DE FIZZBUZZ PASADO DE FOR A WHILE

let i2 = 1;

while (i2 < 100) {
  if (i2 % 3 === 0 && i2 % 5 === 0) {
    // Esta condicion es la menos comun, por lo tanto es la que se revisa primero

    // esto es porque 3 if independientes se ejecutan de manera independiente. 3 ciclos en cadenados(if else, por ejemplo), dependen uno del otro, por lo que si uno se cumple, los restantes se omiten

    console.log(`${i2} FIZZBUZZ`);
  } else if (i2 % 3 === 0) {
    console.log(`${i2} FIZZ`);
  } else if (i2 % 5 === 0) {
    console.log(`${i2} BUZZ`);
  }

  i2++;
}

// EJERCICIO

let i3 = 1;

while (i3 < 11) {
  if (i3 % 2 === 0) {
    console.log(`El número ${i3} es PAR`);
  } else {
    console.log(`El número ${i3} es IMPAR`);
  }

  i3++;
}
