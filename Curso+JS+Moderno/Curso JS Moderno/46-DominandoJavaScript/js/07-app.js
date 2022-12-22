// event loop

console.log("Primero");

setTimeout(() => {
  console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(() => {
  console.log("Cuarto");
}, 0);

new Promise((resolve) => {
  resolve("Desconocido...");
}).then(console.log);

console.log("Ultimo");

// los promises tiene prioridad sobre los settimeout y el resto de eventos( console.log, funciones, etc ) tienen prioridad sobre los promise

function hola() {
  console.log("Hola");
}

hola();

// recursos

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

// https://youtu.be/8aGhZQkoFbQ
