const contenedor = document.querySelector(".container"),
  divResultado = document.querySelector("#resultado"),
  form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  // Validar
  const ciudad = document.querySelector("#ciudad").value,
    pais = document.querySelector("#pais").value;

  if (!ciudad || !pais) {
    //hubo un error
    mostrarError("Ambos campos son obligatorios");

    return;
  }

  // consultar la api
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  //validar si ya existe la alerta
  if (document.querySelector(".alerta")) {
    return;
  }
  // Crear alerta
  const alerta = document.createElement("div");
  alerta.classList.add(
    "bg-red-100",
    "border-red-400",
    "text-red-700",
    "px-4",
    "py-3",
    "rounded",
    "max-w-md",
    "mx-auto",
    "mt-6",
    "text-center",
    "alerta"
  );

  const strong = document.createElement("strong");

  strong.classList.add("font-bold");
  strong.textContent = "Error!";

  const span = document.createElement("span");
  span.classList.add("block");
  span.textContent = `${mensaje}`;

  alerta.appendChild(strong);
  alerta.appendChild(span);

  contenedor.appendChild(alerta);

  // eliminar alerta despues de unos segundos
  setTimeout(() => {
    alerta.remove();
  }, 2500);
}

function consultarAPI(ciudad, pais) {
  const appID = import.meta.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

  console.log(url);

  spinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);

      // limpiar html
      limpiarHtml();

      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrada");

        return;
      }

      // mostrar la respuesta en el html
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const paises = document.querySelector("#pais");
  //    https://bobbyhadz.com/blog/javascript-select-onchange-get-value
  let nombrePais = paises.options[paises.selectedIndex].textContent;

  const {
    main: { temp, temp_max, temp_min },
    name,
  } = datos;

  const celsius = kelvinACelsius(temp),
    maxCelsius = kelvinACelsius(temp_max),
    minCelsius = kelvinACelsius(temp_min);

  const nombre = document.createElement("p");
  nombre.classList.add("font-bold", "text-2xl");
  nombre.textContent = `${name}, ${nombrePais}`;

  const actual = document.createElement("p");
  actual.classList.add("font-bold", "text-6xl");
  actual.textContent = `${celsius}°C`;

  const tempMax = document.createElement("p");
  tempMax.classList.add("text-xl");
  tempMax.textContent = `Max: ${maxCelsius} °C`;

  const tempMin = document.createElement("p");
  tempMin.classList.add("text-xl");
  tempMin.textContent = `Min: ${minCelsius} °C`;

  const divTemp = document.createElement("div");
  divTemp.classList.add("text-center", "text-white");
  divTemp.appendChild(nombre);
  divTemp.appendChild(actual);
  divTemp.appendChild(tempMax);
  divTemp.appendChild(tempMin);

  divResultado.appendChild(divTemp);
}

const kelvinACelsius = (grados) => parseInt(grados - 273.15);

function limpiarHtml() {
  while (divResultado.firstChild) {
    divResultado.firstChild.remove();
  }
}

function spinner() {
  limpiarHtml();

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
`;

  divResultado.appendChild(divSpinner);
}
