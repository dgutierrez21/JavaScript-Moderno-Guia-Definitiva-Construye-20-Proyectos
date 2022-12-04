const fecha = new Date();

console.log(fecha.toLocaleString()); // obtener la fecha y hora en el formato local

console.log(fecha.toTimeString()); // obtener la hora en el formato local

console.log(fecha.toLocaleDateString()); //  // obtener la fecha en el formato local

// momentJS permite establecer el formato que se desea

moment.locale("es");

console.log(moment().format("D MMMM y"));

console.log(moment().format("h:mm:ss a"));

console.log(moment().add(3, "days").calendar());

// SIN ENBARGO!!!

// los desarrolladores de esta librería aconsejan no usarla, ya que, Moment.js viene con muchos gastos generales e inconvenientes. Entre otros, tiene un gran tamaño de paquete que ralentizará mucho su aplicación.

// puede usar mejores alternativas modernas como:

// JavaScript Internationalization API

// date-fns

// day.js

// https://javascript.plainenglish.io/stop-using-momentjs-for-dates-this-is-the-better-alternative-2709afb229a0
