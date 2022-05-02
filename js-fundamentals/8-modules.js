// ? ES Modules

/*
In programming, a module allows us to divide a code's functionality into smaller pieces, making the whole
code easier to maintain.
*/

// The Module Scope
/*
  Modules have their own scope. So dont worry about using the sames variables in diff modules.
  
  The module scope range has a pro, it is limited by itself and allows you to share elements
  between modules.
  
  A JS Module is any file that exports/imports code.
*/

// How to:

// 1. Create a module // firstModule.js
// After creating a file, any variables|fns|objs are limited by their module scope/range.
// In order to export an element, we must include the kw export:

export const name = "Aaron";
export function salute(name){
  console.log(`Hi ${name}!`)
};
// Now this file is considered a module because of its exports

// 2. Importing the module
// We need to use the kw import in another file/module

import {} from '/firstModule.js'

// We can now import the module EXPORTED elements
import { name } from './firstModule.js'
import { name, salute } from './firstModule.js'

// Or just import them all inside an object
import * as mod from './firstModule.js' 
mod.name;
mod.salute();

// We can aslo export a default value
export default {
info: 'Here'
}

// When importing a the default value. we assign an identifier to it:
import m from './firstModule.js'
console.log(m); // {info: 'Here'}

