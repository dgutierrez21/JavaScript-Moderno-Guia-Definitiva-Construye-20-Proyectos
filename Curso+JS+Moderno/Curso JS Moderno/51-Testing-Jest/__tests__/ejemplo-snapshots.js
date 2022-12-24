const cliente = {
  nombre: "Kendal Martinez",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("El nombre es Kendal Garrett", () => {
    expect(cliente).toMatchSnapshot();
  });
});

// npm t -- -u para actualizar un snapshot
