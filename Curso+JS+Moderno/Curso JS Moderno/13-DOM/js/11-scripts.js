const btnFlotante = document.querySelector(".btn-flotante"),
  footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", () => {
  let activo = footer.classList.toggle("activo");
  btnFlotante.classList.toggle("activo");

  btnFlotante.textContent = activo ? "X Cerrar" : "Idioma y Moneda";
});
