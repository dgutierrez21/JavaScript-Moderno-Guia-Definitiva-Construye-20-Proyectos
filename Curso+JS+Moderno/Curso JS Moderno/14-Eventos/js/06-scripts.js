// Event bubbling ( propagacion de eventos )

const divCard = document.querySelector(".card"),
  divInfo = document.querySelector(".info"),
  titulo = document.querySelector(".titulo");

divCard.addEventListener("click", () => {
  console.log("click en card");
});

divInfo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});

titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo");
});
