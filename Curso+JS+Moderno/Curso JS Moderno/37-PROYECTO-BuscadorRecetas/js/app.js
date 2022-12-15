document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  selectCategorias.addEventListener("change", seleccionarCategoria);

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

      console.log(imgReceta);
    });
  }
}
