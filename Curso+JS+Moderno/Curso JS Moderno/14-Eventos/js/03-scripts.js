const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", (evento) => {
  console.log("Escribiendo...");
  console.log(evento); // informacion del evento que se ejecuto
  console.log(evento.target); // es una referencia al objeto en el que se realizó el evento enviado
  console.log(evento.target.value); // el valor que contiene el elemento en el que se realizó en el evento
});

// blur --- cuando entra y despues se sale del input
// copy --- cuando se copia un texto
// paste --- cuando se pega
// cut ---  cuando se corta
// input --- cuando se ejecuta cualquiera de los eventos que se puedan usar en un input
