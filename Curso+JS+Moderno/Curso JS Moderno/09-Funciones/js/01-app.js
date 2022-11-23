// Declaración de función ( funtion declaration )
sumar();

function sumar() {
  console.log(4 + 4);
}

sumar();
sumar();

// Expresion de función ( function expression )

// sumar2(); // Uncaught ReferenceError: Cannot access 'sumar2' before initialization

const sumar2 = function () {
  console.log(8 + 8);
};

sumar2();
sumar2();

// La diferencia entre declaración y expresion es que la declaracion se puede usar antes o despues de crearla, mientras que la expresion solo despues de crearla
