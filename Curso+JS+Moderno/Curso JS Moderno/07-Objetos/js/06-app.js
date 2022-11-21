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

// Destructuring de Objetos Anidados

const {
  nombre,
  informacion,
  informacion: {
    peso,
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

console.log(nombre);

console.log(informacion);

console.log(fabricacion);

console.log(pais);
