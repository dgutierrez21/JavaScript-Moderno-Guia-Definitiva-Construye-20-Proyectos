// Weakset ( set debil )

const weakSet = new WeakSet();

// A diferencia del set, en el weakset solo se le pueden pasar  o agregar objetos

const cliente = {
  nombre: "Alonso",
  saldo: 300,
};

weakSet.add(cliente);

console.log(weakSet);

// weakSet.add(20) // error: Invalid value used in weak set

console.log(weakSet);

// existe o no un objeto

console.log(weakSet.has(cliente)); // true

// eliminar un objeto
weakSet.delete(cliente);

console.log(weakSet);

// en un weakset no se puede conocer la cantidad de elementos a como se hace con set con el método size

console.log(weakSet.size); // undefined

// Tampoco son iterables, no se puede utilizar forEach como se hace con un set normal
