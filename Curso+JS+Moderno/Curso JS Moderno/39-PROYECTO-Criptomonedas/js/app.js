const selectCripto = document.querySelector("#criptomonedas");

// crear promise

const obtenerCripto = (criptos) =>
  new Promise((resolve) => {
    resolve(criptos);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCripto();
});

function consultarCripto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCripto(resultado.Data))
    .then((criptos) => funcSelectCripto(criptos));
}

function funcSelectCripto(criptos) {
  criptos.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;

    selectCripto.appendChild(option);
    console.log(cripto);
  });
}
