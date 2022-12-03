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

  const tweet = document.querySelector("#tweet").value;

  if (!tweet) {
    mostrarError("El tweet no puede ir vacio");

    return;
  }

  console.log("Agregando tweet");
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
