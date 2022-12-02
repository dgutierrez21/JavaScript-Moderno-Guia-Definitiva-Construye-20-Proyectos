// variables

const resultado = document.querySelector("#resultado");

// eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
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
