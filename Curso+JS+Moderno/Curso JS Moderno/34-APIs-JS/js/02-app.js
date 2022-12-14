// intersection observer
// permite identificar cuando un elemento es visible en el navegador

window.onload = () => {
  // habilitar
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("El elemento está visible.");
    } else {
      console.log("El elemento NO está visible");
    }
  });

  // indicar que elemento va a observar
  observer.observe(document.querySelector(".premium"));
};
