document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  const resultado = document.querySelector("#resultado");
  if (selectCategorias) {
    selectCategorias.addEventListener("change", seleccionarCategoria);
    obtenerCategorias();
  }

  const divFavoritos = document.querySelector(".favoritos");
  obtenerFavoritos();

  const modal = new bootstrap.Modal("#modal", {});

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarCategorias(resultado.categories));
  }

  function mostrarCategorias(categorias = []) {
    console.log(categorias);

    categorias.forEach((categoria) => {
      const { strCategory } = categoria;
      const option = document.createElement("option");
      option.value = strCategory;
      option.textContent = strCategory;

      selectCategorias.appendChild(option);
    });
  }

  function seleccionarCategoria(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarRecetas(resultado.meals));
  }

  function mostrarRecetas(recetas = []) {
    limpiarHtml(resultado);

    const heading = document.createElement("h2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recetas.length ? "Resultados" : "No hay resultados";

    resultado.appendChild(heading);

    // iterar en los resultados
    recetas.forEach((receta) => {
      console.log(receta);

      const { idMeal, strMeal, strMealThumb } = receta;

      const divReceta = document.createElement("div");
      divReceta.classList.add("col-md-4");

      const cardReceta = document.createElement("div");
      cardReceta.classList.add("card", "mb-4");

      const imgReceta = document.createElement("img");
      imgReceta.classList.add("card-img-top");
      imgReceta.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
      imgReceta.src = strMealThumb ?? receta.img;

      const cardBodyReceta = document.createElement("div");
      cardBodyReceta.classList.add("card-body");

      const headingReceta = document.createElement("h3");
      headingReceta.classList.add("card-title", "mb-3");
      headingReceta.textContent = strMeal ?? receta.titulo;

      const btnReceta = document.createElement("button");
      btnReceta.classList.add("btn", "btn-danger", "w-100");
      //   btnReceta.dataset.bsTarget = "#modal";
      //   btnReceta.dataset.bsToggle = "modal";
      btnReceta.textContent = "Ver Receta";

      btnReceta.onclick = () => {
        seleccionarReseta(idMeal ?? receta.id);
      };

      // agregar en el código html
      cardBodyReceta.appendChild(headingReceta);
      cardBodyReceta.appendChild(btnReceta);

      cardReceta.appendChild(imgReceta);
      cardReceta.appendChild(cardBodyReceta);

      divReceta.appendChild(cardReceta);

      resultado.appendChild(divReceta);
    });
  }

  function seleccionarReseta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((resultado) => mostrarRecetaModal(resultado.meals[0]));
  }

  function mostrarRecetaModal(receta) {
    console.log(receta);
    const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

    // añadir contenido a modal
    const tituloModal = document.querySelector(".modal .modal-title");
    tituloModal.textContent = strMeal;
    const bodyModal = document.querySelector(".modal .modal-body");
    bodyModal.innerHTML = `
    <img src="${strMealThumb}" alt="receta ${strMeal}" class="img-fluid" />
    <h3 class="my-3">Instrucciones</h3>
    <p>${strInstructions}</p>
    <h3 class="my-3">Ingredientes y cantidades</h3>
    `;

    // mostrar cantidades e ingredientes
    const ulListGroup = document.createElement("ul");
    ulListGroup.classList.add("list-group");
    for (let i = 1; i < 21; i++) {
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`],
          cantidad = receta[`strMeasure${i}`];

        const liIngrediente = document.createElement("li");
        liIngrediente.classList.add("list-group-item");
        liIngrediente.textContent = `${ingrediente} -- ${cantidad}`;

        ulListGroup.appendChild(liIngrediente);
      }
    }

    bodyModal.appendChild(ulListGroup);

    const modalFooter = document.querySelector(".modal-footer");

    // boton de favoritos y cerrar
    limpiarHtml(modalFooter);

    const btnFavorito = document.createElement("button");
    btnFavorito.classList.add("btn", "btn-danger", "col");

    btnFavorito.textContent = existeStorage(idMeal)
      ? "Eliminar Favorito"
      : "Guardar Favorito";

    //localStorage
    btnFavorito.onclick = () => {
      if (existeStorage(idMeal)) {
        eliminarFavorito(idMeal);
        obtenerFavoritos();
        btnFavorito.textContent = "Guardar Favorito";
        mostrarToast("Receta eliminada correctamente");
        return;
      }

      agregarFavorito({
        id: idMeal,
        titulo: strMeal,
        img: strMealThumb,
      });

      obtenerFavoritos();

      btnFavorito.textContent = "Eliminar Favorito";

      mostrarToast("Receta guardada correctamente");
    };

    function agregarFavorito(objReceta) {
      // ?? operador lógico coalescente nulo
      // devuelve su operando del lado derecho cuando su operando del lado izquierdo es null o undefined, y de lo contrario devuelve su operando del lado izquierdo.

      const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...favoritos, objReceta])
      );
    }

    function eliminarFavorito(id) {
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
      const nuevosFavoritos = favoritos.filter(
        (favorito) => favorito.id !== id
      );

      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    }

    function existeStorage(id) {
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

      return favoritos.some((favorito) => favorito.id === id);
    }

    const btnCerrar = document.createElement("button");
    btnCerrar.classList.add("btn", "btn-secondary", "col");
    btnCerrar.textContent = "Cerrar";
    btnCerrar.onclick = () => {
      modal.hide();
    };

    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrar);
    // muestra el modal
    modal.show();
  }

  function mostrarToast(mensaje) {
    const divToast = document.querySelector("#toast");

    const bodytoast = document.querySelector(".toast-body");
    bodytoast.textContent = mensaje;

    const nuevoToast = new bootstrap.Toast(divToast);

    nuevoToast.show();
  }

  function obtenerFavoritos() {
    if (!divFavoritos) {
      return;
    }

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    if (favoritos.length) {
      mostrarRecetas(favoritos);
      return;
    }

    const noExisteFavoritos = document.createElement("p");
    noExisteFavoritos.textContent = "No se han agregado recetas a favoritos";
    noExisteFavoritos.classList.add("fs-4", "text-center", "font-bold", "mt-5");

    divFavoritos.appendChild(noExisteFavoritos);
  }

  function limpiarHtml(padre) {
    while (padre.firstChild) {
      padre.firstChild.remove();
    }
  }
}
