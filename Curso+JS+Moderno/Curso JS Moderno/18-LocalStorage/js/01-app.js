localStorage.setItem("nombre", "pedro");

const producto = {
  nombre: "Manzana",
  precio: "500",
};

// localStorage solo acepta string, por lo tanto se usa JSON.stringify para convertir un objeto o arreglo a string
const productoString = JSON.stringify(producto);

console.log(productoString);

// localStorage.setItem para añadir datos a localStorage, los argumentos que acepta son una llave y un valor
localStorage.setItem("producto", productoString);

const diasSemana = ["lunes", "miercoles", "jueves"];

console.log(diasSemana);

localStorage.setItem("dias", JSON.stringify(diasSemana));
