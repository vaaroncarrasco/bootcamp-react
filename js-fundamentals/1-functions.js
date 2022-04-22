// ? Declaration
// - Starts out with "function" keyword i.e function hello(){}
// - Need a name
function hello(){}

// ? Expresion
// - Doesnt start out with "function" kw i.e var/let/const
// - Dont need a name
const f = function hola(){
  // Fn takes the name of the variable
  // * f()
  // ! hola()
};

// ? Hoisting: JS moves declarations to the top for us to use them before being declared
// * We can run a fn declaration before being declared
saludar()
function saludar(){}
// ! We can not run a fn expression before being declared
salute() // Cannot access 'salute' before initialization"
const salute = () => console.log('hi')

// ? var hoisting: The default initialization of the var is undefined.
// ! We can not run a fn expression before being declared
greet() // greet is not a function -> initial value = undefined
var greet = () => console.log('hi') // now it is a fn. It should work

// ? Summary:
// - Functions can be created with a fn declaration | a fn expression
// - Hoisting: Fn declarations go to top. Fn expressions dont.
// - Fn expressions may or may not have a name
// - Anonymous Functions: Fn expressions without name
// - Fn expressions can use arrow fn => syntax