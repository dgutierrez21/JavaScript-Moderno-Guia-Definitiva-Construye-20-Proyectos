// mediator pattern

// es un patron de diseño que se comunica con diferentes objetos a la vez, el mediador define objetos ya localizados para objetivos especificos

//

function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Vendedor.prototype = {
  oferta(articulo, precio) {
    console.log(
      `Tenemos el articulo ${articulo}, iniciamos con un precio de ${precio}`
    );
  },

  vendido(comprador) {
    console.log(`Vendido a ${comprador}`);
  },
};

function Comprador(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Comprador.prototype = {
  oferta(cantidad, comprador) {
    console.log(`${comprador.nombre} : ${cantidad}`);
  },
};

function Subasta() {
  let compradores = {};

  return {
    registrar(usuario) {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;

      console.log(compradores);
    },
  };
}

// crear objetos

const pedro = new Comprador("Pedro");

const hardy = new Comprador("Hardy");

const vendedor = new Vendedor("Hudson");

const subasta = new Subasta();

// subasta es el mediador, el que comunica vendedor y compradores
subasta.registrar(pedro);
subasta.registrar(hardy);
subasta.registrar(vendedor);

vendedor.oferta("Laptop", 300);

pedro.oferta(350, pedro);
hardy.oferta(450, hardy);
pedro.oferta(550, pedro);
hardy.oferta(800, hardy);

vendedor.vendido("Hardy");
