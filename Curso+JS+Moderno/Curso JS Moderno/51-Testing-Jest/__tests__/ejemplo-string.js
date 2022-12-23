const password = "002244";

describe("Validar que la contraseña no este vacia y tenga una extensión de 6 caracteres", () => {
  test("Contraseña tenga 6 caracteres", () => {
    expect(password).toHaveLength(6);
  });

  test("Contraseña no esta vacia", () => {
    expect(password).not.toHaveLength(0);
  });
});
