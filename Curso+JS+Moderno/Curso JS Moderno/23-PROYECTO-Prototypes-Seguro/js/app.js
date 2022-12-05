// constructores
function Seguro(marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}

// Realizar la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
  let cantidad;

  const base = 2000;
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;

    default:
      break;
  }

  // leer el año
  const diferencia = new Date().getFullYear() - this.anio;

  // cada año que la diferencia es mayor, el costo va a reducirse un 3%
  cantidad -= (diferencia * 3 * cantidad) / 100;

  // si el seguro es básico se multiplica por un 30%, si es completo, por 50%
  if (this.tipo === "basico") {
    return (cantidad *= 1.3);
  }

  return (cantidad *= 1.5);
  console.log(cantidad);
};

function UI() {}

// llenar opciones del año
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const seleccionarAnio = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    seleccionarAnio.appendChild(option);
  }
};

// mostrar alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  // validar si ya existe el div
  if (document.querySelector(".mensaje")) {
    return;
  }

  const div = document.createElement("div");
  div.classList.add("mensaje", "mt-10");

  if (tipo === "error") {
    div.classList.add(tipo);
  } else {
    div.classList.add(tipo);
  }

  div.textContent = mensaje;

  // insetar en el html
  const form = document.querySelector("#cotizar-seguro");
  form.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.mostrarResultado = (seguro, total) => {
  const { marca, anio, tipo } = seguro;

  let textoMarca, textoTipo;

  switch (marca) {
    case "1":
      textoMarca = "Americano";
      break;
    case "2":
      textoMarca = "Asiatico";
      break;
    case "3":
      textoMarca = "Europeo";
      break;

    default:
      break;
  }

  switch (tipo) {
    case "basico":
      textoTipo = "Básico";
      break;
    default:
      textoTipo = "Completo";
      break;
  }

  // crear resultado
  const div = document.createElement("div");
  div.classList.add("mt-10", "resumen");

  div.innerHTML = `
  <p class="header">Resumen</p>
  <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
  <p class="font-bold">Año: <span class="font-normal"> ${anio}</span></p>
  <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize"> ${textoTipo}</span></p>
  <p class="font-bold">Total: <span class="font-normal"> $${total}</span></p>
  `;

  // mostrar spinner
  const spinner = document.querySelector("#cargando");
  spinner.classList.remove("hidden");

  setTimeout(() => {
    // luego de 3 segundos se borra el spinner y se muestra el resultado
    spinner.classList.add("hidden");

    document.querySelector("#resultado").appendChild(div);
  }, 3000);
};

// Instanciar UI

const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); // llena el select con los años
});

eventos();

function eventos() {
  const form = document.querySelector("#cotizar-seguro");
  form.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  // leer la marca seleccionada
  const marca = document.querySelector("#marca").value;
  console.log(marca);
  // leer el año seleccionado
  const anio = document.querySelector("#year").value;
  console.log(anio);

  // leer el tipo seleccionado
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  console.log(tipo);

  if (!marca || !anio || !tipo) {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");

    return;
  }

  ui.mostrarMensaje("Cotizando...", "correcto");

  // eliminar cotizaciones previas
  const resultados = document.querySelector("#resultado div");
  if (resultados) {
    resultados.remove();
  }

  // Instanciar el seguro

  const seguro = new Seguro(marca, anio, tipo);

  const total = seguro.cotizarSeguro();
  console.log(seguro);

  // utilizar el prototype que va a cotizar
  ui.mostrarResultado(seguro, total);
}
