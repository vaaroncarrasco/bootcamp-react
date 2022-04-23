// ? Context - this
// The context is the value the keyword "this" is holding.
// "this" usually refers to the object on which the code in being executed.

// When a fn doesnt belong to an object, the context is the global object.
// In browsers, the global object is the window.

function contextFunction() {
  return this;
}
console.log(contextFunction()); // Window {...}
let object = {
  f: contextFunction
}
object.f();

// * Explanation: As the fn in the global scope, is being called through the global object
/*
  console.log(this.contextFunction)
      ƒ contextFunction() {
    return this;
  }
*/

// ? NOTE: The context value is the object that executes the function.
// ? Context value depends on where the function is running, NOT where it's being declared.

let exampleObject = {
  // ------ exampleObject's context ------
  f: contextFunction
}
// * The contextFunction is executed through exampleObject, not from the global object
exampleObject.f(); // {f: f}

// ? Another example:
let object2 = {
  x: function(){ return this; }
}

let y = object2.x; // taking the fn  outside the object

console.log( object2.x() ); // {x: f}
console.log( y() ); // running fn outside the object // Window{}


// ? -------------------- Context in Arrow => functions --------------------
// Arrow functions do not assign a value to this,
// they inherit it from the context in which they were executed (closest context from outside)

// * Example with function(){ function(){ this } }
let obj = {
  numbers: [1,2,3],
  print: function(){
    console.log("'this' outside foreach: ",this)
    this.numbers.forEach(function(){
      console.log(this) // We may need the obj context
    })
  }
}

// print is executed from obj -> print's "this" context equals obj
// obj > print > forEach(function(){"this" equals the Window obj})
obj.print();

/*
  'this' outside foreach: {numbers: Array(3), print: f}
  * JS .forEach() when using function(){}, does not execute forEach() through the obj,
  * in this case it decided to run it through the global object -> Window{...}
  Window{...}
  Window{...}
  Window{...}
*/

// ? NOTE: The context value is the object that executes the function.
// ? Context value depends on where the function is running, NOT where it's being declared.

// * Example with function(){ () => { this } }
let obj2 = {
  numbers: [1,2,3],
  print: function(){
    console.log("'this' outside foreach: ",this)
    this.numbers.forEach(() => {
      console.log(this) // We may need the ob2 context
    })
  }
}

// print() is executed thru obj2 -> print's 'this' context equals obj2
// obj > print > forEach(()=>{"this" equals obj2})
obj2.print();


/*
  'this' outside foreach: {numbers: Array(3), print: f}
  * Arrow functions dont change/assign the "this" value from where they are executing.
  * Arrow functions take/inherit it from outside.
  * In this case, it took it from obj2's context value,
  * "this" did not take the context of where it was executed (inside the forEach/global object)
  {numbers: Array(3), print: f}
  {numbers: Array(3), print: f}
  {numbers: Array(3), print: f}
*/

// ? Summary: "this" in => fns
// - Arrow functions should NOT be used as methods. We dont wanna inherit the context from outside.
// - Use Arrow functions when you dont want the context to change, and u wanna inherit it.
// - Arrow functions do not change "this" value, they inherit|take it from "outside".