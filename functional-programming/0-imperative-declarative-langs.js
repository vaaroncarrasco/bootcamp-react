/*
  ? Functional Programming
  - Programming Style
  - Multiparadigm languages
  - Declarative programming

  Functional programming is a paradigm based in the usage of functions, it has a strong math basis.
*/

// ? Imperative/Declarative Languages
// We can divide programming langs in 2 big groups: Imperatives/Declaratives

// * Imperatives -  The How Paradigm
// Imperative langs are those that need specific instructions about what to do and how to do it, to which part of the code go,
// how many times, and many more just to solve a problem. Langs like JAVA, RUby, Python, JS are imperative.

// * Declaratives - The What Paradigm
// About telling what to do, without caring about details.
// In this type of langs there has to be an interpreter that takes decisions and executes 'em, the interpreter
// handles the how to

// ?  Example 1
// From an array, we wanna generate another using the square of each number.

// * Imperative way -> Tell you what to do and how to do // step by step
let numbers = [1,2,3,4];
let squareNumbers = [];

for ( let i = 0; i < numbers.length; i++ ) {
  let number = numbers[i];
  squareNumbers.push(number * number)
}
console.log(squareNumbers) // [1, 4, 9, 16]

// * Declarative way -> Tell you what to do, not how // JS internally iterates
let numeros = [1,2,3,4];
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados)

// ? Summary
// In functional programming we tend to use more fns as in declarative programming, becasue
// we dont care about the details, we just decide what to functions to use as long as everything works.

