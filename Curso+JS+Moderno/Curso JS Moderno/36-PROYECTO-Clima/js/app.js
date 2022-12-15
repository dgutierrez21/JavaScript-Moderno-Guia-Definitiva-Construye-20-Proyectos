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

  console.log("buscando clima...");
  console.log(ciudad);
  console.log(pais);
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
