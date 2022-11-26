const encabezado = document.querySelector(".contenido-hero h1");

console.log(encabezado.textContent);

// console.log(encabezado.innerText); // Si esta oculto por el css, no lo va a encontrar
// console.log(encabezado.textContent) // Si la va a encontrar independientemente si esta oculto o no

// console.log(encabezado.innerHTML); // devuelve el texto incluyendo el html

encabezado.textContent = "Nuevo Heading";

const imagen = document.querySelector(".card img");

imagen.src = "img/hacer2.jpg";
