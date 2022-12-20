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
  const url = "http://localhost:3000/platillos";

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
  // extraer pedido actual
  let { pedido } = cliente;

  // revisar que la cantidad sea mayor a cero
  if (objProducto.cantidad > 0) {
    // comprobar si el elemento ya existe en el array
    if (pedido.some((articulo) => articulo.id === objProducto.id)) {
      // actualizar cantidad si existe
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === objProducto.id) {
          articulo.cantidad = objProducto.cantidad;
        }

        return articulo;
      });

      // asignar el nuevo array a cliente.pedido
      cliente.pedido = [...pedidoActualizado];
    } else {
      // agregar al array si no existe
      cliente.pedido = [...pedido, objProducto];
    }
  } else {
    // eliminar elementos cuando la cantidad es 0
    const resultado = pedido.filter(
      (articulo) => articulo.id !== objProducto.id
    );

    cliente.pedido = [...resultado];
  }

  // limpiar html
  limpiarHtml(document.querySelector("#resumen .contenido"));

  if (cliente.pedido.length) {
    // mostrar el resumen
    actualizarResumen();

    return;
  }

  msjPedidoVacio();
}

function actualizarResumen() {
  console.log(cliente);
  console.log("desde actualizar resumen");

  const contenido = document.querySelector("#resumen .contenido");

  const resumen = document.createElement("div");
  resumen.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");

  // informacion mesa
  const mesa = document.createElement("p");
  mesa.classList.add("fw-bold");
  mesa.textContent = "Mesa: ";

  const mesaSpan = document.createElement("span");
  mesaSpan.classList.add("fw-normal");
  mesaSpan.textContent = cliente.inputMesa;

  mesa.appendChild(mesaSpan);

  // informacion hora
  const hora = document.createElement("p");
  hora.classList.add("fw-bold");
  hora.textContent = "Hora: ";

  const horaSpan = document.createElement("span");
  horaSpan.classList.add("fw-normal");
  horaSpan.textContent = cliente.inputHora;

  hora.appendChild(horaSpan);

  const heading = document.createElement("h3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Platillos consumidos";

  // iterar sobre el array de pedidos
  const grupo = document.createElement("ul");
  grupo.classList.add("list-group");

  const { pedido } = cliente;

  pedido.forEach((articulo) => {
    const { nombre, precio, cantidad, id } = articulo;

    const lista = document.createElement("li");
    lista.classList.add("list-group-item");

    const nombreElemento = document.createElement("h4");
    nombreElemento.classList.add("my-4");
    nombreElemento.textContent = nombre;

    // cantidad del articulo
    const cantidadElemento = document.createElement("p");
    cantidadElemento.classList.add("fw-bold");
    cantidadElemento.textContent = "Cantidad: ";

    const cantidadValor = document.createElement("span");
    cantidadValor.classList.add("fw-normal");
    cantidadValor.textContent = cantidad;

    // agregar valores a sus contenedores
    cantidadElemento.appendChild(cantidadValor);

    // precio del articulo
    const precioElemento = document.createElement("p");
    precioElemento.classList.add("fw-bold");
    precioElemento.textContent = "Precio: ";

    const precioValor = document.createElement("span");
    precioValor.classList.add("fw-normal");
    precioValor.textContent = `$${precio}`;

    // agregar valores a sus contenedores
    precioElemento.appendChild(precioValor);

    // subtotal del articulo
    const subTotalElemento = document.createElement("p");
    subTotalElemento.classList.add("fw-bold");
    subTotalElemento.textContent = "Subtotal: ";

    const subTotalValor = document.createElement("span");
    subTotalValor.classList.add("fw-normal");
    subTotalValor.textContent = `$${precio * cantidad}`;

    // boton eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.textContent = "Eliminar del pedido";

    btnEliminar.onclick = () => {
      eliminarProducto(id);
    };

    // agregar valores a sus contenedores
    subTotalElemento.appendChild(subTotalValor);

    // agregar elementos al li
    lista.appendChild(nombreElemento);
    lista.appendChild(cantidadElemento);
    lista.appendChild(precioElemento);
    lista.appendChild(subTotalElemento);
    lista.appendChild(btnEliminar);

    // agregar lista al grupo principal
    grupo.appendChild(lista);
  });

  // agregar a los elementos padres
  resumen.appendChild(heading);
  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(grupo);

  contenido.appendChild(resumen);

  // mostrar formulario de propinas
  formularioPropinas();
}

function limpiarHtml(padre) {
  while (padre.firstChild) {
    padre.firstChild.remove();
  }
}

function eliminarProducto(id) {
  const { pedido } = cliente;

  const resultado = pedido.filter((articulo) => articulo.id !== id);

  cliente.pedido = [...resultado];

  // reiniciar input del boton seleccionado a 0
  const productoEliminado = `#producto-${id}`,
    inputElementoEliminado = document.querySelector(productoEliminado);
  inputElementoEliminado.value = 0;

  // limpiar html
  limpiarHtml(document.querySelector("#resumen .contenido"));

  if (cliente.pedido.length) {
    // mostrar el resumen
    actualizarResumen();

    return;
  }

  msjPedidoVacio();
}

function msjPedidoVacio() {
  const mensaje = document.createElement("p");
  mensaje.classList.add("text-center");
  mensaje.textContent = "Añade los elementos del pedido";

  const contenido = document.querySelector("#resumen .contenido");

  contenido.appendChild(mensaje);
}

function formularioPropinas() {
  const contenido = document.querySelector("#resumen .contenido");

  const form = document.createElement("div");
  form.classList.add("col-md-6", "formulario");

  const divForm = document.createElement("div");
  divForm.classList.add("shadow", "card", "py-2", "px-3");

  const heading = document.createElement("h3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  // radio button 10%
  const radio10 = document.createElement("input");
  radio10.classList.add("form-check-input");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = "10";
  radio10.onclick = () => {
    calcularPropina();
  };

  const radio10label = document.createElement("label");
  radio10label.classList.add("form-check-label");
  radio10label.textContent = "10%";

  const radio10Div = document.createElement("div");
  radio10Div.classList.add("form-check");

  radio10Div.appendChild(radio10);
  radio10Div.appendChild(radio10label);

  // radio button 25%
  const radio25 = document.createElement("input");
  radio25.classList.add("form-check-input");
  radio25.type = "radio";
  radio25.name = "propina";
  radio25.value = "25";
  radio25.onclick = () => {
    calcularPropina();
  };

  const radio25label = document.createElement("label");
  radio25label.classList.add("form-check-label");
  radio25label.textContent = "25%";

  const radio25Div = document.createElement("div");
  radio25Div.classList.add("form-check");

  radio25Div.appendChild(radio25);
  radio25Div.appendChild(radio25label);

  // radio button 50%
  const radio50 = document.createElement("input");
  radio50.classList.add("form-check-input");
  radio50.type = "radio";
  radio50.name = "propina";
  radio50.value = "50";
  radio50.onclick = () => {
    calcularPropina();
  };

  const radio50label = document.createElement("label");
  radio50label.classList.add("form-check-label");
  radio50label.textContent = "50%";

  const radio50Div = document.createElement("div");
  radio50Div.classList.add("form-check");

  radio50Div.appendChild(radio50);
  radio50Div.appendChild(radio50label);

  form.appendChild(divForm);
  divForm.appendChild(heading);
  divForm.appendChild(radio10Div);
  divForm.appendChild(radio25Div);
  divForm.appendChild(radio50Div);

  contenido.appendChild(form);
}

function calcularPropina() {
  const { pedido } = cliente;
  let subtotal = 0;

  // calcular subtotal a pagar
  pedido.forEach((articulo) => {
    subtotal += articulo.cantidad * articulo.precio;
  });

  // seleccionar el radio button con la propina del cliente
  const propinaSeleccionada = document.querySelector(
    "[name='propina']:checked"
  ).value;
  console.log(subtotal);
  console.log(propinaSeleccionada);

  // calcular la propina
  const propina = subtotal * Number("0." + propinaSeleccionada);

  console.log(propina);

  // calcular total
  const total = subtotal + propina;

  console.log(total);
}

console.log();
