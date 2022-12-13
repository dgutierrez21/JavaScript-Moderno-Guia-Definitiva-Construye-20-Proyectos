const paises = ["francia", "argentina", "croacia", "marruecos"];

const nuevoPais = (pais, callback) => {
  setTimeout(() => {
    paises.push(pais);

    callback();
  }, 2000);
};

const mostrarPaises = () => {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
};

mostrarPaises();

nuevoPais("Alemania", mostrarPaises);
