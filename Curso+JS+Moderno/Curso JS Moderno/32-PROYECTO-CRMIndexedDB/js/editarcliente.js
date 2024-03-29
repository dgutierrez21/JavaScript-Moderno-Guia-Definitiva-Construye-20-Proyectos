(function () {
  let idCliente;

  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");

  const form = document.querySelector("#formulario");

  window.onload = () => {
    conectarDB();

    // actualizar registro
    form.addEventListener("submit", actualizarCliente);
    // verificar el id de la url
    const parametroUrl = new URLSearchParams(window.location.search);

    idCliente = parametroUrl.get("id");

    console.log(idCliente);

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 10);
    }
  };

  function actualizarCliente(e) {
    e.preventDefault();

    if (!nombreInput.value || !emailInput || !empresaInput || !telefonoInput) {
      imprimirAlerta("Hubo un error", "error");
      return;
    }

    // actualizar cliente
    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: Number(idCliente),
    };

    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.put(clienteActualizado);

    transaction.oncomplete = () => {
      imprimirAlerta("Editado correctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };

    transaction.onerror = () => {
      imprimirAlerta("Hubo un error", "error");
    };
  }

  function obtenerCliente(id) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    console.log(objectStore);
    const cliente = objectStore.openCursor();
    cliente.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function llenarFormulario(datosCliente) {
    const { nombre, email, telefono, empresa } = datosCliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
  }

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = () => {
      console.log("Hubo un erro");
    };

    abrirConexion.onsuccess = () => {
      DB = abrirConexion.result;
    };
  }
})();
