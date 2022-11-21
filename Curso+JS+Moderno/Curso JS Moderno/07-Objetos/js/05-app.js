const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
  informacion: {
    peso: "135 g",
    altura: "45 mm",
    ancho: "115 mm",
    fabricacion: {
      pais: "China",
    },
  },
};

// Objetos dentro de Objetos

console.log(producto);

console.log(producto.informacion.peso);

console.log(producto.informacion.altura);

console.log(producto.informacion.fabricacion.pais);
