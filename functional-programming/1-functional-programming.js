// ? Functional Programming
/*

Writing code in functional programming is similar as defining a route with different steps,
where each step is a function and throughout the route, we send data through those steps.
Like building datapipelines.

* In functional programming, functions should:
  - Have an unique responsibility (Just do one thing)
  - Be pure functions (Do not secondary effects)

There are more concepts around this rules, they will help us to follow them
*/

// ? Secondary Effects
// A function should receive data through params and communicate data thorugh the return. Any other
// interaction with an element outside of the function, we call it secondary effects.

// Secondary fx examples
// - Using a globarl var
// - Modifying a referenced variable
// - Print logs
// - Calling a DB
// - Calling an API
// - Modifying something in the screen
// - Writing in a file
// - etc

// * Functions that do not produce secondary effects are called -> Pure Functions

// ? Pure Functions
// Functions that are determinist and do not produce any secondary effects

// * Determinist: always returns the same result if the same arguments are passed. They
// * dont depend on any state or data change during execution

// Example - Pure function.
function calculateGST( productPrice ) {
  return productPrice * 0.05;
}

// ? Impure|Non determinist functions examples

// Ex. 1 -> It interacts with outside elements and prints to console
let numeroUno = 20;
let numeroDos = 10;
function suma(){ console.log(numeroUno + numeroDos); }

// Ex. 2 -> It calls an API and prints in console
async function getReposName(){
  let repos = await ( await fetch("https://api.github.com/users/codigofacilito/repos")).json();
  for(let i = 0; i < repos.length; i++){
    console.log(repos[i].name);
  }
}
getReposName();

// ? Why a function is not determinist|pure
// - API can fail
// - Can return different values if API changes
// - Can fail if logs are not available or any log coding errors

// ! HUGE NOTE

// ? PROGRAMMING NEEDS SECONDARY EFFECTS
// A programm that does not produce any secondary effects, is useless. Programms communicate with other
// programms, services, files, dbs, print log to console, and all of these are secondary fx.

// * But how we handle this tasks in functional programming?
// A programm designed based on the functional programming paradigm, has a core of business logic
// pure functionalities. And on the outside it has tasks that produce secondary effects.

// This way we ensure the code base and operations work fine but the rest dont

// * Example

// Abstract logic -> DO only ONE thing
function getReposName(repos){
  return repos.map(repo => repo.name);
}

(async function(){
  // api call
  let repos = await ( await fetch("https://api.github.com/users/codigofacilito/repos")).json();

  let names = getReposName(repos); // running pure function

  for(let i = 0; i < names.length; i++){
  // console log
    console.log(names[i]);
  }
})();
