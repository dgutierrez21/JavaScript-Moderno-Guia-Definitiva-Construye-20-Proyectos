window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium"),
    ubicacion = premium.getBoundingClientRect();

  if (ubicacion.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log(ubicacion);
    console.log("Aún no, da más scroll");
  }
});
