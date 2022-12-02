// variables
const resultado = document.querySelector("#resultado"),
  year = document.querySelector("#year");

const max = new Date().getFullYear(),
  min = max - 10;

// eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();

  llenarSelect();
});

// funciones
function mostrarAutos() {
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

// generar los años del select

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;

    year.appendChild(opcion);
  }
}
