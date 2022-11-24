// fizz buzz -- 100 Números

// 3 6 9 12 ... fizz

// 5 10 15 20 ... buzz

// 15 30 45 ... FIZZBUZZ

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // Esta condicion es la menos comun, por lo tanto es la que se revisa primero

    // esto es porque 3 if independientes se ejecutan de manera independiente. 3 ciclos en cadenados(if else, por ejemplo), dependen uno del otro, por lo que si uno se cumple, los restantes se omiten

    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i} BUZZ`);
  }
}
