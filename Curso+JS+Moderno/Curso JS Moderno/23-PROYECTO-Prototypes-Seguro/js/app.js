// constructores

function Seguro(marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}

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
    console.log("no paso la validación");

    return;
  }

  console.log("Si paso la validación");
}
