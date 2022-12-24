import Citas from "../js/classes/Citas.js";

describe("Probar la clase de citas", () => {
  const citas = new Citas();

  test("Agregar nueva cita", () => {
    const citaObj = {
      mascota: "Firu",
      propietario: "Palmer Pamila",
      telefono: "002211",
      fecha: "5-8-2022",
      hora: "8:00",
      sintomas: "No quiere comer",
    };

    citaObj.id = Date.now();

    citas.agregarCita(citaObj);

    // Prueba

    expect(citas).toMatchSnapshot();
  });
});
