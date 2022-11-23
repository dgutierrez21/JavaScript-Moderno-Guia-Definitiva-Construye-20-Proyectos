// 66. Añadir Funciones ( metodos ) en un Objeto

const reproductorMusica = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },

  borrar: function (id) {
    console.log(`Borrando canción con el id ${id}`);
  },

  pausar: function () {
    console.log(`Pausando...`);
  },

  siguiente: function (id) {
    console.log(`Pasando a la siguiente canción con el id ${id}`);
  },

  anterior: function (id) {
    console.log(`Regresando a la anterior canción con el id ${id}`);
  },

  crearPlaylist: function (nombre) {
    console.log(`Creando nueva playlist con el nombre ${nombre}`);
  },

  eliminarPlaylist: function (nombre) {
    console.log(`Eliminando playlist ${nombre}`);
  },
};

reproductorMusica.reproducir(24);
reproductorMusica.pausar(24);
reproductorMusica.siguiente(45);
reproductorMusica.anterior(12);
reproductorMusica.crearPlaylist("Hip hop");
reproductorMusica.crearPlaylist("90s");
reproductorMusica.eliminarPlaylist("90s");
