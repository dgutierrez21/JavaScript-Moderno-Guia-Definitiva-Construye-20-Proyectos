const selectCripto = document.querySelector("#criptomonedas"),
  selectModena = document.querySelector("#moneda"),
  form = document.querySelector("#formulario");

const objBusqueda = {};

// crear promise

const obtenerCripto = (criptos) =>
  new Promise((resolve) => {
    resolve(criptos);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCripto();

  form.addEventListener("submit", formSubmit);

  selectCripto.addEventListener("change", leerValor);
  selectModena.addEventListener("change", leerValor);
});

function consultarCripto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCripto(resultado.Data))
    .then((criptos) => funcSelectCripto(criptos));
}

function funcSelectCripto(criptos) {
  criptos.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;

    selectCripto.appendChild(option);
    console.log(cripto);
  });
}

function formSubmit(e) {
  e.preventDefault();

  //validar
  const { moneda, criptomoneda } = objBusqueda;

  if (!moneda || !criptomoneda) {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  consultarAPI();
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
  console.log(objBusqueda);
}

function mostrarAlerta(mensaje) {
  if (document.querySelector(".divMensaje")) {
    return;
  }
  const divMensaje = document.createElement("div");
  divMensaje.classList.add("error", "divMensaje");
  divMensaje.textContent = mensaje;

  form.appendChild(divMensaje);

  setTimeout(() => {
    divMensaje.remove();
  }, 2500);
}

function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((cotizacion) => {
      mostrarCotizacionHtml(cotizacion.DISPLAY[criptomoneda][moneda]);
    });
}

function mostrarCotizacionHtml(cotizacion) {}
