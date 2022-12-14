// notificaciones nativas en JS

const btnNotificar = document.querySelector("#notificar");

btnNotificar.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    // resultados posibles
    // granted -- el usuario acepto las notificaciones
    // denied -- El usuario NO acepto las notificaciones
    // default -- dio en la x
    console.log(`El resultado es ${resultado}`);
  });
});

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const notificacion = new Notification("Esta es una notificación", {
      icon: "img/ccj.png",
      body: "Aprendiendo JavaScript Moderno",
    });

    notificacion.onclick = () => {
      window.open("https://www.google.com/");
    };
  }
});
