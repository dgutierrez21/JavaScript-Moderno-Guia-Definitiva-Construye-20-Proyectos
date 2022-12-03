// variables
const form = document.querySelector("#formulario"),
  listaTweets = document.querySelector("#lista-tweets");

const tweets = [];

// eventos

eventos();

function eventos() {
  form.addEventListener("submit", agregarTweet);
}

// funciones

function agregarTweet(evento) {
  evento.preventDefault();

  console.log("Agregando tweet");
}
