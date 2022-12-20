export function mostrarAlerta(msj) {
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
    "mx-auto",
    "mt-6",
    "text-center",
    "alerta"
  );
  alerta.textContent = msj;

  const form = document.querySelector("#formulario");

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2500);
}
