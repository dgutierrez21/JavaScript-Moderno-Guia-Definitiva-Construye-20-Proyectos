(function () {
  let DB;

  const nombreInput = document.querySelector("#nombre");

  window.onload = () => {
    conectarDB();
    // verificar el id de la url
    const parametroUrl = new URLSearchParams(window.location.search);

    const idCliente = parametroUrl.get("id");

    console.log(idCliente);

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 10);
    }
  };

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
    const { nombre } = datosCliente;

    nombreInput.value = nombre;
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
