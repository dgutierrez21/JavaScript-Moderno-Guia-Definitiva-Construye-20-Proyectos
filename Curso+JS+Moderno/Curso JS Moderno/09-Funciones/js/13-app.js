const reproductorMusica = {
  cancion: "",

  reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),

  borrar: (id) => console.log(`Borrando canción con el id ${id}`),

  pausar: () => console.log(`Pausando...`),

  siguiente: (id) =>
    console.log(`Pasando a la siguiente canción con el id ${id}`),

  anterior: (id) =>
    console.log(`Regresando a la anterior canción con el id ${id}`),

  crearPlaylist: (nombre) =>
    console.log(`Creando nueva playlist con el nombre ${nombre}`),

  eliminarPlaylist: (nombre) => console.log(`Eliminando playlist ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;

    console.log(`Añadiendo ${cancion} a la playlist`);
  },

  get obtenerCancion() {
    console.log(`Escuchando ${this.cancion}`);
  },
};

reproductorMusica.nuevaCancion = "Sosa - AZ";
reproductorMusica.obtenerCancion;

reproductorMusica.reproducir(24);
reproductorMusica.pausar(24);
reproductorMusica.siguiente(45);
reproductorMusica.anterior(12);
reproductorMusica.crearPlaylist("Hip hop");
reproductorMusica.crearPlaylist("90s");
reproductorMusica.eliminarPlaylist("90s");
