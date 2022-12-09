// funciones
import { datosCita, nuevaCita } from "../funciones.js";

// selectores
import {
  mascotaInput,
  propietarioInput,
  telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  formulario,
} from "../selectores.js";

class App {
  constructor() {
    this.iniciarApp();
  }

  iniciarApp() {
    mascotaInput.addEventListener("change", datosCita);
    propietarioInput.addEventListener("change", datosCita);
    telefonoInput.addEventListener("change", datosCita);
    fechaInput.addEventListener("change", datosCita);
    horaInput.addEventListener("change", datosCita);
    sintomasInput.addEventListener("change", datosCita);

    formulario.addEventListener("submit", nuevaCita);
  }
}

export default App;