// variables
const form = document.querySelector("#formulario"),
  listaTweets = document.querySelector("#lista-tweets");

let tweets = [];

// eventos

eventos();

function eventos() {
  document.querySelector("#tweet").focus();

  form.addEventListener("submit", agregarTweet);
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
      // crear html

      const li = document.createElement("li");
      li.textContent = tweet.tweet;

      listaTweets.appendChild(li);
    });
  }
}

function limpiarHtml() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
