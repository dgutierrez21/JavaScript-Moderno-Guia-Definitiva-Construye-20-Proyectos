// funciones que retornan otra funcion

const obtenerCliente = () => () => console.log("Pedro");

const fn = obtenerCliente();

fn();
