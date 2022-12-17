const form = document.querySelector("#formulario"),
  resultado = document.querySelector("#resultado");

window.onload = () => {
  form.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (!terminoBusqueda) {
    mostrarAlerta("Ingresa una palabra para buscar");
    return;
  }
}

function mostrarAlerta(mensaje) {
  if (document.querySelector(".alerta")) {
    return;
  }

  const alerta = document.createElement("p");
  alerta.classList.add(
    "bg-red-100",
    "border-red-400",
    "text-red-700",
    "px-4",
    "py-3",
    "rounded",
    "max-w-lg",
    "mt-6",
    "text-center",
    "alerta"
  );

  const strong = document.createElement("strong");
  strong.classList.add("font-bold");
  strong.textContent = "Error! ";

  const span = document.createElement("span");
  span.classList.add("block", "sm:inline");
  span.textContent = `${mensaje}`;

  alerta.appendChild(strong);
  alerta.appendChild(span);

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2750);
}
