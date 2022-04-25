// ? Parameters/Arguments
// In JS, an argument can be sent as a value or as a reference.

// * Argument sent as value (Primitives):
// When value is copied in a different direction for the parameter.
// As it is a coopy, does not affect the original value.

// ? Note: Primitive values are sent as value, they dont reference the original.
// When the primitive argument is sent, the fn generates its own copy,
// to use it inside the fn.

// - Value: Example 1:

function printName(name) { // name is the parameter of print()
  name = 'Donald Trump';
  console.log(name);
}
let fullName = 'Juan Perez'
printName(fullName); // Donald Trump
console.log(fullName); // Juan Perez // It didnt modifiy the original value


// * Argument sent as reference (Objects):
// When parameter points towards the same direction as the original argument.
// Any modification affects the original argument.

// - Reference: Example 1:

// ? Note: We send the reference, not a array copy.
function printArr(arr){ // arr & numbers point to same memory address
  arr[0] = 69;
  console.log(arr);
}

// numbers[] has a unique id/address in the memory
let numbers = [0];

console.log(numbers); // [0]
printArr(numbers); // [69]
console.log(numbers); // [69]

// - Reference: Example 2:

function modifier(obj){
  obj.nombre = 'Aaron';
}

let object = {};

modifier(object);
console.log(object); // [object Object] { nombre: 'Aaron' }


// ? Why is this important?
// When working with React, there's something called "side effects" and reference arguments
// are an open door for this side effects.