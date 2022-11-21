const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
};

// Agregar nuevas propiedades al objeto se usa la notación de punto y la notación de corchetes
producto.imagen = "imagen.jpg";
producto["color"] = "Rojo";

// para eliminar una propiedad se utiliza la palabra delete y despues se accede a esa propiedad
delete producto.disponible;

console.log(producto);
