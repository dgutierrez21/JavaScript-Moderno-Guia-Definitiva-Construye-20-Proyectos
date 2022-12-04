// variables
const form = document.querySelector("#formulario"),
  listaTweets = document.querySelector("#lista-tweets");

let tweets = [];

// eventos

eventos();

function eventos() {
  document.querySelector("#tweet").focus();

  //Cuando el usuario agrega nuevos tweets
  form.addEventListener("submit", agregarTweet);

  //Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);

    crearHtml();
  });
}

// funciones

function agregarTweet(evento) {
  evento.preventDefault();

  const tweet = document.querySelector("#tweet").value;

  if (!tweet) {
    mostrarError("El tweet no puede ir vacio");

    return;
  }

  //Creamos un objeto para poder identificar cada tweet
  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  // añadir tweet al arreglo
  tweets = [...tweets, tweetObj];

  // crear el html
  crearHtml();

  //   limpiar formulario
  form.reset();
  document.querySelector("#tweet").focus();
}

// mostrar mensaje de error
function mostrarError(error) {
  if (document.querySelector(".error")) {
    return;
  }

  const msjError = document.createElement("p");
  msjError.classList.add("error");
  msjError.textContent = error;

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(msjError);

  setTimeout(() => {
    msjError.remove();
  }, 3000);
}

function crearHtml() {
  limpiarHtml();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // agregar un boton de eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";

      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      // crear html
      const li = document.createElement("li");
      li.textContent = tweet.tweet;

      li.appendChild(btnEliminar);

      listaTweets.appendChild(li);
    });
  }

  sincronizarLocalStorage();
}

// agregar tweet actuales a localStorage
function sincronizarLocalStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// eliminar tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);

  console.log(tweets);

  crearHtml();
}

function limpiarHtml() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
