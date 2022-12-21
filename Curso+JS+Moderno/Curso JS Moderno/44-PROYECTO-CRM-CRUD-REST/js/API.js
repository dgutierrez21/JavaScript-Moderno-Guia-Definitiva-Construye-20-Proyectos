const url = "http://localhost:3000/clientes";

// cuando se crea un nuevo cliente
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

// obtener todos los clientes
export const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(url);
    const clientes = await respuesta.json();

    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// eliminar un cliente
export async function eliminarCliente(clienteId) {
  try {
    await fetch(`${url}/${clienteId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

// obtener un cliente por su id
export async function obtenerCliente (id) {
    try {
        const respuesta = await fetch(`${url}/${id}`)
        const cliente = await respuesta.json()

        return cliente;
    } catch (error) {
        console.log(error)
    }
}