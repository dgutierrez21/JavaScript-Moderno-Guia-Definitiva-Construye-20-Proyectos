const selectCripto = document.querySelector("#criptomonedas"),
  selectModena = document.querySelector("#moneda"),
  form = document.querySelector("#formulario"),
  divResultado = document.querySelector("#resultado");

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

async function consultarCripto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  // fetch(url)
  //   .then((respuesta) => respuesta.json())
  //   .then((resultado) => obtenerCripto(resultado.Data))
  //   .then((criptos) => funcSelectCripto(criptos));

  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const criptos = await obtenerCripto(resultado.Data);
    funcSelectCripto(criptos);
  } catch (error) {
    console.log(error);
  }
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

async function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  setTimeout(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((cotizacion) => {
        mostrarCotizacionHtml(cotizacion.DISPLAY[criptomoneda][moneda]);
      });
  }, 250);

  try {
    const respuesta = await fetch(url);
    const cotizacion = await respuesta.json();

    setTimeout(() => {
      mostrarCotizacionHtml(cotizacion.DISPLAY[criptomoneda][moneda]);
    }, 250);
  } catch (error) {
    console.log(error);
  }
}

function mostrarCotizacionHtml(cotizacion) {
  limpiarHtml(divResultado);

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  //precio
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "El precio es: ";

  const span = document.createElement("span");
  span.textContent = `${PRICE}`;

  precio.appendChild(span);

  //precio mas alto
  const precioAlto = document.createElement("p");
  precioAlto.classList.add("precio");
  precioAlto.textContent = "El precio más alto en el día: ";

  const span2 = document.createElement("span");
  span2.textContent = `${HIGHDAY}`;

  precioAlto.appendChild(span2);

  //precio mas bajo
  const precioBajo = document.createElement("p");
  precioBajo.classList.add("precio");
  precioBajo.textContent = "El precio más bajo en el día: ";

  const span3 = document.createElement("span");
  span3.textContent = `${LOWDAY}`;

  precioBajo.appendChild(span3);

  //precio últimas 24 horas
  const precio24Horas = document.createElement("p");
  precio24Horas.classList.add("precio");
  precio24Horas.textContent = "Variación en las últimas 24 horas: ";

  const span4 = document.createElement("span");
  span4.textContent = `${CHANGEPCT24HOUR}%`;

  precio24Horas.appendChild(span4);

  //última actualización
  const ultimaActualizacion = document.createElement("p");
  ultimaActualizacion.classList.add("precio");
  ultimaActualizacion.textContent = "Última actualización: ";

  const span5 = document.createElement("span");
  span5.textContent =
    LASTUPDATE === "Just now" ? "Justo Ahora" : `${LASTUPDATE}`;

  ultimaActualizacion.appendChild(span5);

  divResultado.appendChild(precio);
  divResultado.appendChild(precioAlto);
  divResultado.appendChild(precioBajo);
  divResultado.appendChild(precio24Horas);
  divResultado.appendChild(ultimaActualizacion);
}

function mostrarSpinner() {
  limpiarHtml(divResultado);

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
  `;

  divResultado.appendChild(spinner);
}

function limpiarHtml(padre) {
  while (padre.firstChild) {
    padre.firstChild.remove();
  }
}
