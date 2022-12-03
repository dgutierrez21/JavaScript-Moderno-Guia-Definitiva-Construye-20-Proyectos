localStorage.setItem("nombre", "pedro");

const producto = {
  nombre: "Manzana",
  precio: "500",
};

const productoString = JSON.stringify(producto);

console.log(productoString);

localStorage.setItem("producto", productoString);

const diasSemana = ["lunes", "miercoles", "jueves"];

console.log(diasSemana);

localStorage.setItem("dias", JSON.stringify(diasSemana));
