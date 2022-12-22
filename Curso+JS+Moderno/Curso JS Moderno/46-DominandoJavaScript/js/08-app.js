// self
// self se refiere a la ventana global, es igual a window, sin embargo, self se utiliza mucho en los Service Workers, en los service workers no esta disponible la palabra window por lo tanto se usa self

window.onload = () => {
  console.log("Ventana lista desde window");
};

self.onload = () => {
  console.log("Ventana lista desde self");
};

window.regalia = "Teclado Mecánico";

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInformacion() {
    const self = this;

    return `El producto ${self.nombre} tiene un precio de ${self.precio}`;
  },
  mostrarRegalia() {
    return `La regalia por la compra es el producto ${self.regalia}`;
  },
};

console.log(producto.mostrarInformacion());
console.log(producto.mostrarRegalia());
