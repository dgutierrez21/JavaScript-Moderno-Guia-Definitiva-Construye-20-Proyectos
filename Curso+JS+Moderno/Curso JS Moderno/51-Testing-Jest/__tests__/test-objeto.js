const cliente = {
  nombre: "Angela Corrina",
  edad: 29,
  dinero: 300,
};

describe("Testing al cliente", () => {
  test("El cliente es mayor de edad", () => {
    expect(cliente.edad).toBeGreaterThan(17);
  });

  test("cliente es Angela Corrina", () => {
    expect(cliente.nombre).toBe("Angela Corrina");
  });

  // hay ciertos escenarios que no se toman en cuenta, por lo que es buena practica comprobar un valor y comprobar que no sea un valor para evitar falsos positivos

  test("No es otro cliente", () => {
    expect(cliente.nombre).not.toBe("Sydney Luther");
  });

  test("No tiene 500", () => {
    expect(cliente.dinero).not.toBeGreaterThan(500);
  });
});
