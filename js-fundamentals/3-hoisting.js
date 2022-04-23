// ? Hoisting
// Hoisting is the process where JS interpreter "moves" variable and function declarations
// to the beginning of the scope/range, allowing us to use them before being "declared".

// * Note: Hoisting moves declaration but NOT the value assignation

// ? Example with var
console.log(x); // ! undefined // declaration moved to top without value assignation
var x = 20;

/* What happened behind the scenes:
    var x; // * undefined
    console.log(x);
    x = 20;
*/

// ? Example with let
console.log(y); // ! error // cant access 'y' before initialization
let x = 20;

/* What happened behind the scenes:
    let x; // * uninitialized
    console.log(x); // error
    x = 20; // now it is initialized as value is being assigned
*/

// ? Summary
// - var always lives in the local scope inside a {fn} or,
// if declared outside, it's still reacheable in any child scope ({fn}|{block})

// - let can live in the local, block and/or global scope,
// depending if it was decleared inside a {fn}|{block} or outside.

// - The value for a variable w/ var, which has not been assigned, is UNDEFINED.

// - The value for a variable w/ let, which has not been assigned, is UNINITIALIZED.

// - Variables are also placed at the top of the scope,
// however if u try to use an unitialized variable, you will get an error.