// indexDB es un API de JS para almacenar grandes cantidades de datos estructurados

// A diferencia  de LocalStorage puede almacenar string, booleans, incluso archivos, cualquier tipo de dato soportado por JS

// no tiene "Limites" conocidos anque los archivos de más de 50mb va a pedir permiso

// Soportada en todas las ultimas versiones de los navegadores

// Es diferente a LocalStorage. LocalStorage es una buena solución para almacenar poca información ( como un carrito de compras abandonado o un JSON web token)

// indexDB es una base de datos completa, pero hay que tener en cuenta que estos datos siguen siendo visibles para cualquiera por lo que no es recomendable almacenar passwords o tarjetas de crédito #FF0000

document.addEventListener("DOMContentLoaded", () => {
  crmDB();
});

function crmDB() {
  // crear base de datos versión 1.0

  let crmDB = window.indexedDB.open("crm", 1);

  // si hay un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la DB");
  };

  // si se crea correctamente
  crmDB.onsuccess = function () {
    console.log("Base de datos creada!!");
  };

  // configuración de la base de datos
  crmDB.onupgradeneeded = function (e) {
    console.log("Este código se ejecuta una sola vez");

    console.log(e.target.result);

    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      kePath: "crm",
      autoIncrement: true,
    });

    // definir las columnas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Columnas Creadas");
  };
}
