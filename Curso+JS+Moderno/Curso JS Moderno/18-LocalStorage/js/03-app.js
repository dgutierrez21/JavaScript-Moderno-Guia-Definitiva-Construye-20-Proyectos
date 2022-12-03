// Se usa el método localStorage.removeItem, este método solo acepta un argumento, siendo este la llave del valor que se desea eliminar

localStorage.removeItem("nombre");

console.log(localStorage.getItem("nombre")); // null

// Actualizar un registro
const diasArr = JSON.parse(localStorage.getItem("dias"));
console.log(diasArr);

diasArr.push("Nuevo mes");
console.log(diasArr);

// Reescribe el valor actual
localStorage.setItem("dias", JSON.stringify(diasArr));

// NOTA: cuando se actualiza un registro se tiene que hacer de forma controlada, ya que, cada vez que se recargue la pagina va a añadir un nuevo valor como en este ejemplo

// Eliminar todo lo que hay en localStorage
localStorage.clear();
