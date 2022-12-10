(function () {
  let DB;

  window.onload = () => {
    crearDB();
  };

  // crear base de datos indexedDB
  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = () => {
      console.log("Hubo un error");
    };

    crearDB.onupgradeneeded = (e) => {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("Base de datos configurada");
    };

    crearDB.onsuccess = () => {
      DB = crearDB.result;
    };
  }
})();
