// ventajas de hacer testing

// -- mejorará la calidad de el software evitando bugs

// --probar todos los diferentes escenarios puede ser complicado o tardado, pero hay herramientas que automatizan las pruebas de nuestros proyectos

// -- liberar nuevas versiones sin la preocupación de que algo salga mal

// ---- consideraciones con el testing ----

// --- ¿Cuantas veces has agregado nuevas funciones a un proyecto existente pero desconoces si funciona bien con lo existente?

//-- Tener pruebas hará que una persona que no ha mantenido un proyecto conozca que es lo que hace cada parte.

// ---- Diferentes tipos de Testing ----
// -- End to End - Más interactivo, simula algunos clicks, llenar formularios y asegurarse de que se muestre en pantalla lo que se desea.

//-- Integración - Revisar que múltiples partes de nuestro proyecto funcionen bien.

// -- Unit - Revisar que cada parte por si sola funcione bien. Static - Revisar por errores en el código mientras vas escribiendo.

// ---- Herramientas para Testing ----
//-- Cada tecnología tiene sus herramientas para Testing,
//-- pero una muy popular es Jest, hay versiones para VueJS, Angular, TypeScript Node, React, etc. Es necesario tener instalado Node.js

//-- Otra opción es Cypress que es una herramienta para hacer testings End to End.

// --- testing sin herramientas---

function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

let resultado = suma(1, 10);

let esperado = 15;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

function expected(esperado) {
  return {
    toBe(resultado) {
      if (resultado !== esperado) {
        console.error(
          `El ${resultado} es diferente a lo esperado, la prueba no pasó`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
    toEqual(resultado) {
      if (resultado !== esperado) {
        console.error(
          `El ${resultado} No es igual a lo esperado, la prueba no pasó`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
  };
}
