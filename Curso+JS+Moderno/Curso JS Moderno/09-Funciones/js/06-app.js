function saludar(nombre = "Desconocido", apellido = "no tiene apellido") {
  console.log(`Hola, ${nombre} ${apellido}`);
}

saludar("Mark", "Mark Zuckerberg");

// si no se le pasa valores, devuelve undefined

saludar("Mark");

saludar();
    