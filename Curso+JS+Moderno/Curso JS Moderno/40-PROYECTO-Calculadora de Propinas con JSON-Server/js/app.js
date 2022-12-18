let cliente = {
  pedido: [],
};

const categorias = {
  1: "Comidas",
  2: "Bebidas",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const inputMesa = document.querySelector("#mesa").value,
    inputHora = document.querySelector("#hora").value;

  // revisar si hay campos vacios
  if (!inputMesa || !inputHora) {
    mostrarAlerta("Ambos campos son obligatorios");

    return;
  }

  // asignar datos del formulario al obj cliente
  cliente = { ...cliente, inputMesa, inputHora };

  // ocultar formulario
  const formModal = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(formModal);
  modalBootstrap.hide();

  // mostrar las secciones
  mostrarSecciones();

  // obtener platilos de la api json-server
  obtenerPlatillos();
}

function mostrarAlerta(mensaje) {
  if (document.querySelector(".alerta")) {
    return;
  }
  const alerta = document.createElement("div");
  alerta.classList.add(
    "invalid-feedback",
    "d-block",
    "text-center",
    "fw-bold",
    "fs-4",
    "alerta"
  );
  alerta.textContent = mensaje;

  document.querySelector(".modal-body").appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2750);
}

function mostrarSecciones() {
  const secciones = document.querySelectorAll(".d-none");
  secciones.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarPlatillos(resultado))
    .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
  const divContenido = document.querySelector("#platillos .contenido");

  platillos.forEach((platillo) => {
    const { nombre, precio, categoria, id } = platillo;
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");

    const divNombre = document.createElement("div");
    divNombre.classList.add("col-md-4");
    divNombre.textContent = nombre;

    const divPrecio = document.createElement("div");
    divPrecio.classList.add("col-md-3", "fw-bold");
    divPrecio.textContent = `$${precio}`;

    const divCategoria = document.createElement("div");
    divCategoria.classList.add("col-md-3");
    divCategoria.textContent = categorias[categoria];

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto-${id}`;
    inputCantidad.classList.add("form-control");

    // funcion que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = () => {
      const cantidad = Number(inputCantidad.value);
      console.log(cantidad);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const divInput = document.createElement("div");
    divInput.classList.add("col-md-2");
    divInput.appendChild(inputCantidad);

    row.appendChild(divNombre);
    row.appendChild(divPrecio);
    row.appendChild(divCategoria);
    row.appendChild(divInput);

    divContenido.appendChild(row);
  });
}

function agregarPlatillo(objProducto) {
  console.log(objProducto);
}
