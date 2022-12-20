const url = " http://localhost:3000/clientes";

export const nuevoCliente = async (objCliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(objCliente),
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
