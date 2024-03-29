const form = document.querySelector("#formulario"),
  divResultado = document.querySelector("#resultado"),
  divPaginacion = document.querySelector("#paginacion");

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
  form.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (!terminoBusqueda) {
    mostrarAlerta("Ingresa una palabra para buscar");
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(mensaje) {
  if (document.querySelector(".alerta")) {
    return;
  }

  const alerta = document.createElement("p");
  alerta.classList.add(
    "bg-red-100",
    "border-red-400",
    "text-red-700",
    "px-4",
    "py-3",
    "rounded",
    "max-w-lg",
    "mt-6",
    "text-center",
    "alerta"
  );

  const strong = document.createElement("strong");
  strong.classList.add("font-bold");
  strong.textContent = "Error! ";

  const span = document.createElement("span");
  span.classList.add("block", "sm:inline");
  span.textContent = `${mensaje}`;

  alerta.appendChild(strong);
  alerta.appendChild(span);

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2750);
}

function buscarImagenes() {
  const palabra = document.querySelector("#termino").value;
  const key = "32146440-7b7d39d6f7496d67c3077ec02";
  const url = `https://pixabay.com/api/?key=${key}&q=${palabra}&image_type=photo&pretty=true&per_page=${registrosPorPagina}&page=${paginaActual}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      if (!resultado.total) {
        mostrarAlerta(`No se encontraron resultados para "${palabra}"`);
        return;
      }
      limpiarHtml(divResultado);
      totalPaginas = calcularPaginas(resultado.totalHits);
      console.log(totalPaginas);
      mostrarImagenes(resultado.hits);
    });
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

// generador que va a registrar la cantidad de elementos de acuerdo a las paginas

function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function mostrarImagenes(imagenes) {
  console.log(imagenes);
  // iterar sobre el arreglo de imagenes  y construir el html
  imagenes.forEach((imagen) => {
    const { previewURL, views, likes, largeImageURL } = imagen;

    const html = `<div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
    <div class="bg-white">
        <img src="${previewURL}" alt="" class="w-full">

        <div class="p-4">
            <p class="font-bold">${likes} <span class="font-light"> Me Gusta</span></p>

            <p class="font-bold">${views} <span class="font-light"> Vistas</span></p>

            <a class="block w-full bg-blue-800 hover\:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
                Ver imagen
            </a>
        </div>
    </div>
</div>`;

    // shorturl.at/dvHP6
    divResultado.insertAdjacentHTML("beforeend", html);
    // divResultado.innerHTML += html;
  });

  limpiarHtml(divPaginacion);

  imprimirPaginador();
}

function limpiarHtml(padre) {
  while (padre.firstChild) {
    padre.firstChild.remove();
  }
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);

  while (true) {
    const { value, done } = iterador.next();

    if (done) {
      return;
    }

    // generar botón por cada elemento en el generador
    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-4",
      "uppercase",
      "rounded"
    );

    boton.onclick = () => {
      paginaActual = value;
      buscarImagenes();
    };

    divPaginacion.appendChild(boton);
  }
}
