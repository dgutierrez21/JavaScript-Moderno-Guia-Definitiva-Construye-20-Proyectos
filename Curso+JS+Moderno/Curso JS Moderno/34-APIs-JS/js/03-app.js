// permite detectar si se cuenta con conexion a internet o no

// Navigator.onLine
// Retorna el estado en línea del navegador. La propiedad retorna un valor booleano, true significa en línea y false significa desconectado. La propiedad envía actualizaciones siempre que el navegador tenga la capacidad de conectarse a los cambios de red. La actualización se produce cuando un usuario sigue un enlace o cuando un script pide una pagina remota. Por ejemplo, la propiedad debe retornar false cuando los usuarios hacen clic en un enlace poco después de perder la conexión a internet.

// Los navegadores implementan esta propiedad de forma diferente.

// En Chrome y Safari, si el navegador no puede conectarse a la red de area local (LAN) o al router, está desconectado; todas las otras condiciones retornan true. Así que puedes suponer que el navegador esta desconectado cuando retorna un valor false,#FF0000 no puedes suponer que un valor true signifique que el navegador puede acceder a internet #FF0000. Podrías estar recibiendo falsos positivos, como en los casos en el que el ordenador este ejecutando un software de virtualización que tiene los adaptadores ethernet virtuales siempre "conectados". Por lo tanto, si tu quieres determinar el estado en linea de el navegador, tu debes desarrollar medios adicionales para comprobarlo. Para más información, consulte el artículo HTML5 Rocks article, Working Off the Grid.

// https://www.html5rocks.com/en/mobile/workingoffthegrid.html

// En Firefox e Internet Explorer, cambiando el navegador al modo desconectado envía un valor false. Hasta Firefox 41, todas las demás condiciones retornaban un valor true; desde Firefox 41, en OS X y Windows, el valor sigue la actual conectividad de red.

// Puedes ver los cambios en el estado de red escuchando los eventos window.ononline y window.onoffline.

// Esto se prueba usando las herramientas de desarrollador en la pestaña "network"

document.querySelector(".irGoogle").addEventListener("click", detectarRed);

function detectarRed(e) {
  if (!navigator.onLine) {
    e.preventDefault();
    alert("No cuenta con conexión a internet");
  }
}

window.addEventListener("offline", (e) => {
  actualizarEstado(e);
});

window.addEventListener("online", (e) => {
  actualizarEstado(e);
});

function actualizarEstado(e) {
  // en la condición se puede usar tanto navigator.onLine, como detectar el tipo de evento
  if (e.type === "offline") {
    console.log("No cuenta con conexión a internet");
  } else {
    console.log("Está en línea");
  }
}
