const producto = {
  nombre: "Mouse Logitech M720 Triathlon",
  precio: 34.99,
  disponible: true,
  //Cuando una funcion se encuentra en un objeto se le llama método

  //this hace referencia al objeto donde se declaro la propiedad, en este caso el objeto producto
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};

producto.mostrarInfo();

const producto2 = {
  nombre: "Teclado Keychron Q6",
  precio: 215.99,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};

producto2.mostrarInfo();
