const boolean1 = true,
  boolean2 = false,
  boolean3 = true;

console.log(boolean1);
console.log(boolean2);

console.log(boolean1 == boolean3); // false
console.log(boolean1 === boolean3); // false

const boolean4 = new Boolean(true);

console.log(boolean4);

console.log(typeof boolean4); // object
