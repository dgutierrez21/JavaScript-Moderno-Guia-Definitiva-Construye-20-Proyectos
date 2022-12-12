(function () {
  let DB;

  window.onload = () => {
    // conectar db
    conectarDB();

    form.addEventListener("submit", validarCliente);
  };

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
})();
