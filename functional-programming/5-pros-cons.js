// ? Functional Programming

// * PROS

// 1. Less code complexity
// As we abstract logic into function that handle a single task, it gets easier to write/read/mantain.

// 2. Easier unit testing
// Isolated functions are easier to test, bc we dont have to mock any external interaction

// 3. Function Isolation
// As a function does not interact with any external element and handles a single task, they can be
// easily replaced as long as they return the same values and continues as a determinist function

// 4. Better code expressiveness
// As being bases on declarative programming, functional code is easier to read as its more expressive and
// straight forward than imperative programming

// 5. Less bugs caused by unexpected behaviors
// Talking about immutability, we  assure that the tasks being handled by a function do not affect other
// function's tasks. This makes our code more secure, so that we dont get unexpected outputs

// ! CONS

// 1. How do I implement it?
// It gets harder as we have to think twice on how to organize our code

// 2. COpying big lists
// COpying an entire structure just to not modify the original, can be quite expensive.
// Sometimes we have to work with alternatives that allow us to work with complex structures

// 3. State Management
// Unlike other paradigms such as OOP, where state management is part of the paradigm and the objects.
// In functional programming, it is necessary to implement an strategy or mechanism to handle the app's state.
// For instance, working with Redux.