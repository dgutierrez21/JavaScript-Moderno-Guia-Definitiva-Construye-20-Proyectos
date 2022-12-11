(function () {
  let DB;
  const form = document.querySelector("#formulario");

  window.onload = () => {
    // conectar db
    conectarDB();

    form.addEventListener("submit", validarCliente);
  };

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = () => {
      console.log("Hubo un erro");
    };

    abrirConexion.onsuccess = () => {
      DB = abrirConexion.result;
    };
  }

  function validarCliente(e) {
    e.preventDefault();

    console.log("Validar");

    // leer inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (!nombre || !email || !telefono || !empresa) {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    if (isNaN(telefono)) {
      imprimirAlerta("Ingresa un número de telefono valido", "error");
      return;
    }

    // crear nuevo objeto con la informacion
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
      id: Date.now(),
    };

    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");

    const objectStore = transaction.objectStore("crm");

    objectStore.add(cliente);

    transaction.onerror = () => {
      imprimirAlerta("Hubo un error");
    };

    transaction.oncomplete = () => {
      imprimirAlerta("El cliente se agregó correctamente.");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
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
})();
