// ? Scope:
// Collection of vars/fns/objs that can be reached within a range.

// ? Global Scope:
// What has been decleared OUTSIDE a {block} or fn(){}
// - Can be used in the main body
// - Can be used in fn scopes

// ? Local Scope:
// What has been declared within a fn(){}
// - Can be used only withing the fn scope

let fullName = "Juan Perez";
function salute(){
  let age = 69;
	console.log(fullName, age);
}
salute(); // "Juan Perez", 69
console.log(fullName); // "Juan Perez"
console.log(age); //age is not defined

// ? Scopes & The Gym Analogy

// - Global Scope: The machines, dumbells, bars, racks. We use & share them.
// We depend on them all. If one machine breaks, all gym members end up affected.

// - Local Scope: Gym member's water bottle & towel. They're only theirs.
// Their problems are easy to find cause their impact is reduced as its scope/range.

// * A function should only work with local scope data.
// * Any data the fn needs from the outside to the inside, should be communicated thru arguments
// * And any data the fn needs to communicate to the outside should be through the return

// ? ---------- G&L Scope Summary ----------

// - We have 2 types of scopes: Local n Global

// - Global Scope is available from anywhere, but do not abuse the usage of it

// - Local Scope is created for each function on the function's execution.
// A function's local scope environment only lives while the fn is running

// - Best practice: Try to place a function's elements in the local scope instead of the global scope.

//  ------------------------------------------------------------------------------------------------


// ? Block Scope
// With ES6 let & const introduction, block scope is also introduced.
// In a fn scope, a {block scope} isolates the range of the variables inside of it,
// so they are not reachable from the whole function scope.

// Example using var
function introWithVar(name, admin) {
  if (admin) { var role = 'Administrator'; }
  console.log(`Hi. My name is ${name} and I am the ${role}.`)
}
introWithVar('Juan', true); // Hi. My name is Juan and I am the Administrator

// What if we use let instead?
function introWithLet(name, admin) {
  if (admin) { let role = 'Administrator'; } // role is defined but never used
  console.log(`Hi. My name is ${name} and I am the ${role}.`)
}
introWithLet('Juan', true); // ! Error: role is not defined

// * Explanation
// Variables defined w/ let & const belong to the {block scope} type of range,
// and they're only visible {inside the block they were declared in}.
// In this case, role is only reachable inside the condition body, not from the outside.

// ? Note: let & const
// Let & const are scoped to the nearest {block}, while var is scoped to the nearest {fn}.

// In other words, if u declare a variable with let|const inside a loop|condition,
// it'll be available only {inside these structures}. We can also declare them inside a {fn} and
// place them in the local scope, as long as they are not inside another block.