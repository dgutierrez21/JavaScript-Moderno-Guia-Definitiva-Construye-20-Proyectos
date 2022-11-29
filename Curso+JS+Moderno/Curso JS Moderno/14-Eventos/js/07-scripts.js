// Prevenir Event Bubbling con Delegation

const divCard = document.querySelector(".card");

divCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("Click en titulo");
  }

  if (e.target.classList.contains("precio")) {
    console.log("Click en precio");
  }

  if (e.target.classList.contains("card")) {
    console.log("Click en card");
  }
});
