// class pattern

// utilizar clases para la creación de los objetos
// es un patron de diseño de creación
// define como deben de crearse los objetos

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const julianne = new Persona("Julianne", "juli@juli.com");

console.log(julianne);
