// ? Higher Order Functions

// Functions that receive as parameter/argument a function and return a function as a result.

// In JS, where functions are considered first class objects, functions can be sent as an argument,
// stored inside variables and can be the result (return) of a another function. This concept allows the
// introduction and usage of the concept High Order Functions

// A Functional Programming program, being able to receive|send functions, is key, and is the philosophy
// behind the declarative paradigm

// * Imperative
let numeros = [1,2,3,4];
let cuadrados = [];
for(let i = 0;i < numeros.length; i++){
  let numero = numeros[i];
  cuadrados.push(numero * numero);
}
console.log(cuadrados);

// * Declarative
let numbers = [1,2,3,4];
let squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

// ? Extra
// With this Declarative example, functions like map, array, reduce, filter and many other, allow us to
// operate on an array from a function. These are High Order Functions, because they receive a fn as an argument

// Another good example of HOFs are the ones that return a fn as the action creators from Redux Thunk

// ? Map, Filter, Reduce, ForEach
// Before going on why we prefer this methods rathed than for loops in functional programming,
// lets have a quick recap on them

// ? .forEach()
// forEach gets a fn as argument, the given fn runs each time there's an element inside an array

let langs = ['ruby', 'python', 'java'];

// Besides the element iteration, we have access to its position (index)
langs.forEach( (element, index) => console.log(element, index) );


// ? .map()
// .map() receives a function as an argument. This function is executed once for each arr element.
// the main difference is that // * .map() returns a new array with each return value from the argument

let nums = [2,4,6,9,5];
let sqrs = nums.map(function(el){ return el * el });


// ? .filter()
// Filter gets a fn as argument, this fn is applied on each arr element, where
// the fn result is evaluated as true|false.

// If true, element is kept
// If false, element is discarded

// * .filter() returns a new array with the elements being kept

let numsArr = [2,3,6,9,5];
let evenNums = numsArr.filter(function(num){ return num % 2 == 0 });

// ? .reduce()
// It executes a reduction operation over an array in order to reduce the whole thing into a single value
// .reduce() receives a fn that runs over each element
// * the main difference is that we have access to an argument called accumulator

// Accumulator is a variable that goes through each executions of the function that iterating, and
// adopts the last value being returned by it

let numbersArray = [2,4,6,9,5];
let sumArray = numbersArray.reduce(function(accumulator, number){
 return accumulator + number;
},0); // 0 -> initialValue


// * ------------------------------------------------------------------------------------------------
// ? Why using HOF over loops?
// Go to files 3, 4, ...

// ? - Immutability
