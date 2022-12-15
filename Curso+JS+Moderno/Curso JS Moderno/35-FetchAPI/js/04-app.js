const btnCargarAPI = document.querySelector("#cargarAPI");
btnCargarAPI.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "https://picsum.photos/list";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHtml(resultado));
}

function mostrarHtml(datos) {
  const contenido = document.querySelector(".contenido");

  datos.forEach((perfil) => {
    const { author, post_url } = perfil;

    const p = document.createElement("p");
    p.textContent = `Autor: ${author}`;
    const a = document.createElement("a");
    a.href = `${post_url}`;
    a.target = "_blank";
    a.textContent = "Ver imagen";

    contenido.appendChild(p);
    contenido.appendChild(a);
  });
}
