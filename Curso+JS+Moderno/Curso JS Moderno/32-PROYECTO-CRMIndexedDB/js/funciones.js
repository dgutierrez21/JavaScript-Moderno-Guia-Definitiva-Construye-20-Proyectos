const form = document.querySelector("#formulario");
let DB;
function conectarDB() {
  const abrirConexion = window.indexedDB.open("crm", 1);

  abrirConexion.onerror = () => {
    console.log("Hubo un erro");
  };

  abrirConexion.onsuccess = () => {
    DB = abrirConexion.result;
  };
}

function imprimirAlerta(mensaje, tipoMensaje) {
  if (document.querySelector(".divMensaje")) {
    return;
  }
  // crear alerta
  const divMensaje = document.createElement("div");
  divMensaje.classList.add(
    "px-4",
    "py-3",
    "rounded",
    "max-w-lg",
    "mx-auto",
    "mt-6",
    "text-center",
    "divMensaje"
  );

  if (tipoMensaje === "error") {
    divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
  } else {
    divMensaje.classList.add(
      "bg-green-100",
      "border-green-400",
      "text-green-700"
    );
  }

  divMensaje.textContent = mensaje;

  form.appendChild(divMensaje);

  setTimeout(() => {
    divMensaje.remove();
  }, 3500);
}
