document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  selectCategorias.addEventListener("change", seleccionarCategoria);

  const resultado = document.querySelector("#resultado");

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
  }

  function limpiarHtml(padre) {
    while (padre.firstChild) {
      padre.firstChild.remove();
    }
  }
}
