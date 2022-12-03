// variables
const marca = document.querySelector("#marca"),
  year = document.querySelector("#year"),
  precioMin = document.querySelector("#minimo"),
  precioMax = document.querySelector("#maximo"),
  puertas = document.querySelector("#puertas"),
  transmision = document.querySelector("#transmision"),
  color = document.querySelector("#color");

// contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear(),
  min = max - 10;

// objeto con los datos de la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  precioMin: "",
  precioMax: "",
  puertas: "",
  transmision: "",
  color: "",
};

// eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);

  llenarSelect();
});

// eventos para los select

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;

  filtrarAuto();
});

precioMin.addEventListener("change", (e) => {
  datosBusqueda.precioMin = e.target.value;

  filtrarAuto();
});

precioMax.addEventListener("change", (e) => {
  datosBusqueda.precioMax = e.target.value;

  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;

  console.log(datosBusqueda);
});

// funciones
function mostrarAutos(autos) {
  // limpiar el html
  limpiarHtml();

  autos.forEach((auto) => {
    const autoHtml = document.createElement("p");
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    autoHtml.textContent = `
        ${marca} ${modelo} -- ${year} -- ${puertas} Puertas -- Transmisión: ${transmision} -- Precio: ${precio} -- Color: ${color}
        `;

    // insertar en el html
    resultado.appendChild(autoHtml);
  });
}

// limpiar el html
function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// generar los años del select

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;

    year.appendChild(opcion);
  }
}

// funcion que filtrar en base a la busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo);

  console.log(resultado);

  mostrarAutos(resultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;

  if (marca) {
    return auto.marca === marca;
  }

  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === parseInt(year);
  }

  return auto;
}

function filtrarMinimo(auto) {
  const { precioMin } = datosBusqueda;

  if (precioMin) {
    return auto.precio >= precioMin;
  }

  return auto;
}

function filtrarMaximo(auto) {
  const { precioMax } = datosBusqueda;

  if (precioMax) {
    return auto.precio <= precioMax;
  }

  return auto;
}
