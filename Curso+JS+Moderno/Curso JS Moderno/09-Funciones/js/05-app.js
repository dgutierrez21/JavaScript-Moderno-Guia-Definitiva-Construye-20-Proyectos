function sumar(a, b) {
  // a y b son parametros
  console.log(a + b);
}

sumar(10, 5); // 10 y 5 son argumentos, es decir los valores reales

sumar(3485, 2039);

// EJEMPLO 2

function saludar(nombre, apellido) {
  console.log(`Hola, ${nombre} ${apellido}`);
}

saludar("Mark", "Mark Zuckerberg");

// si no se le pasa valores, devuelve undefined

saludar("Mark");
