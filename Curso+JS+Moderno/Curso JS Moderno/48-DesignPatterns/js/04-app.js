// factory pattern

// es una forma de crear objetos basados en cierta condición, es decir, van a compartir algunos atributos pero en base a esas condiciones algunos atributos se reutilizan y otros son diferentes

class InputHtml {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
  }
}

class HtmlFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case "text":
        return new InputHtml("text", nombre);
      case "date":
        return new InputHtml("date", nombre);
      default:
        return;
    }
  }
}

const elemento = new HtmlFactory();

const inputText = elemento.crearElemento("text", "nombre-cliente");

console.log(inputText.crearInput());

const elemento2 = new HtmlFactory();
const inputText2 = elemento2.crearElemento("date", "fecha-cita");

console.log(inputText2.crearInput());

// En que ejemplo práctico podría utilizar Factory?

// el patron de diseño "Factory" forma parte del grupo de patrones de diseño creacionales quiere decir que sirven para crear cosas, que cosas ? objetos , elementos HTML como el ejemplo o un modal, formularios y mas ...

// por ejemplo si tienes un sistema que maneja usuarios y se manejan 2 tipos de usuarios "Estudiantes" y "Profesores" y de alguna forma se necesita crear "algo" que nos permita dado un parametro unico por ejemplo el "type" que cree un objeto "estudiante" o "profesor" se podría solucionar con "Herencia" pero si vas mas alla y como en este caso que depende de el "type" nos serviria el "Factory".
