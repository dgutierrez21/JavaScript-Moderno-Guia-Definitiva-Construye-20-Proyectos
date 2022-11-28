const nav = document.querySelector(".navegacion");

// Registrar un evento
nav.addEventListener("dblclick", () => {
  console.log("Click en navegacion");
});

window.addEventListener("dblclick", () => {
  console.log("doble click");
});

console.log(nav.children);

nav.children[nav.children.length - 1].addEventListener("contextmenu", () => {
  console.log("click derecho para abrir el menú contextual");
});

// click -- Cuando se hace un click
// contextmenu -- cuando se hace click derecho ( menú contextual )
// mouseenter -- cuando el mouse entra a la zona del elemento que lo disparo
// mouseout --  cuando el mouse sale de la zona del elemento que lo disparo
// mousedown -- muy similar a un click
// mouseup -- al soltar el click
// dblclick -- cuando se hace doble click
