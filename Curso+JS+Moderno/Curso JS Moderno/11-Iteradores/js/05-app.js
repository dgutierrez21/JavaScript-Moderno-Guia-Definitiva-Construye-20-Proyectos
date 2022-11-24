let i3 = 1; // inicializador do while

// El bucle do while se ejecuta al menos una vez sin importar si la condicíon se cumple o no y despues comprueba
do {
  console.log(`Número ${i3}`);
  i3++; // incremento
} while (i3 > 11); // condicion

//Ejecuta Número 1

let i4 = 1;

do {
  if (i4 % 3 === 0 && i4 % 5 === 0) {
    // Esta condicion es la menos comun, por lo tanto es la que se revisa primero

    // esto es porque 3 if independientes se ejecutan de manera independiente. 3 ciclos en cadenados(if else, por ejemplo), dependen uno del otro, por lo que si uno se cumple, los restantes se omiten

    console.log(`${i4} FIZZBUZZ`);
  } else if (i4 % 3 === 0) {
    console.log(`${i4} FIZZ`);
  } else if (i4 % 5 === 0) {
    console.log(`${i4} BUZZ`);
  }

  i4++;
} while (i4 < 100);
