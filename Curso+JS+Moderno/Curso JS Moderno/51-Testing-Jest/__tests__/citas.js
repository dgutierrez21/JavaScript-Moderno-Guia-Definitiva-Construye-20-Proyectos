import Citas from "../js/classes/Citas.js";

describe("Probar la clase de citas", () => {
  const citas = new Citas();

  const id = Date.now();

  test("Agregar nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Firu",
      propietario: "Palmer Pamila",
      telefono: "002211",
      fecha: "5-8-2022",
      hora: "8:00",
      sintomas: "No quiere comer",
    };

    citas.agregarCita(citaObj);

    // Prueba

    expect(citas).toMatchSnapshot();
  });

  test("Actualizar cita", () => {
    const citaActualizada = {
      id,
      mascota: "Rocco",
      propietario: "Palmer Pamila",
      telefono: "002211",
      fecha: "5-8-2022",
      hora: "8:00",
      sintomas: "No quiere comer",
    };

    citas.editarCita(citaActualizada);

    // Prueba
    expect(citas).toMatchSnapshot();
  });

  test("Eliminar cita", () => {
    citas.eliminarCita(id);

    // Prueba
    expect(citas).toMatchSnapshot();
  });
});
