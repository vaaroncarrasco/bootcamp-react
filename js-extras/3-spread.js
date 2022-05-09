// ? ...Spread Operator
// We call an object iterable when it can be divided and run through it
// Iterable objects: [Arrays], 'strings', {objects}

// Spread syntax allows us to expand iterable elements for us to use them or
// to create clones, combine iterables, so on...

// * Example: Send array[] as separated elements

function sum(a, b) {
  return a + b;
}

let numbers = [10, 20];

sum(numbers) // ! Error cause it expects numbers
sum(...numbers) // ...[10, 20] -> sum(10, 20)


// * Example: we can duplicate/copy an element
let numbers_copy = [...numbers]; // [10, 20]

// Or combine 2 arrays into one new array
let numbers_final = [...numbers, ...numbers_copy];

// * It works also in objects

let usuario = { edad: 29 };
let usuario_copia = { ...usuario };

// Or combine them
let usuario_ambos = { ...usuario, ...usuario_copia };