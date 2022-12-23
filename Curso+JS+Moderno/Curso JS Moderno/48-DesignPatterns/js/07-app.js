// Namespace pattern

// ayuda a evitar colision con nombres en el scope global de javascript

// la idea del Namespace es crear un objeto global alrededor de la aplicación y agregar todas las funciones dentro en lugar de crear multiples funciones y objetos que se puedan acceder de forma global

const appRestaurante = {};

appRestaurante.platillos = [
  {
    platillo: "Pizza",
    precio: 25,
  },
  {
    platillo: "Nachos",
    precio: 10,
  },
  {
    platillo: "Tacos",
    precio: 5,
  },
];

appRestaurante.funciones = {
  mostrarMenu(platillos) {
    console.log(`Bienvenidos a nuestro menú`);

    platillos.forEach((platillo, indice) => {
      console.log(
        `El platillo #${indice} es ${platillo.platillo} y tiene un precio de ${platillo.precio}`
      );
    });
  },

  ordenar(id) {
    console.log(
      `Tu platillo: ${appRestaurante.platillos[id].platillo} se esta preparando`
    );
  },

  agregarPlatillo(platillo, precio) {
    const nuevo = {
      platillo: platillo,
      precio: precio,
    };

    appRestaurante.platillos.push(nuevo);
  },
};

const { platillos } = appRestaurante;

appRestaurante.funciones.mostrarMenu(platillos);

appRestaurante.funciones.ordenar(1);

appRestaurante.funciones.agregarPlatillo("Salmón a la plancha", 3);

appRestaurante.funciones.mostrarMenu(platillos);
appRestaurante.funciones.ordenar(3);

console.log(appRestaurante);
