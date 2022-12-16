document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  selectCategorias.addEventListener("change", seleccionarCategoria);

  const resultado = document.querySelector("#resultado");

  const modal = new bootstrap.Modal("#modal", {});

  obtenerCategorias();

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
      imgReceta.alt = `Imagen de la receta ${strMeal}`;
      imgReceta.src = strMealThumb;

      const cardBodyReceta = document.createElement("div");
      cardBodyReceta.classList.add("card-body");

      const headingReceta = document.createElement("h3");
      headingReceta.classList.add("card-title", "mb-3");
      headingReceta.textContent = strMeal;

      const btnReceta = document.createElement("button");
      btnReceta.classList.add("btn", "btn-danger", "w-100");
      //   btnReceta.dataset.bsTarget = "#modal";
      //   btnReceta.dataset.bsToggle = "modal";
      btnReceta.textContent = "Ver Receta";

      btnReceta.onclick = () => {
        seleccionarReseta(idMeal);
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
    btnFavorito.textContent = "Guardar Favorito";

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

  function limpiarHtml(padre) {
    while (padre.firstChild) {
      padre.firstChild.remove();
    }
  }
}
