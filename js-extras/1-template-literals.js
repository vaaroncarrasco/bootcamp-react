// ? Template Literals | Template Strings

// Template Literals allow you to:
//    -> Have multi-line strings
//    -> Interpolate strings // yielding a value to the place holders
//    -> Tagged templates

// Default interpolation process
let name = 'Juan';
let nacimiento = 1990;

let bio = `Hola soy ${nombre} y tengo ${2022 - nacimiento} años`;
console.log(bio)

// Different process in functions + template literals
function miTaggedTemplateLiteral(strings, value, value2) {
  return console.log(strings, value, value2);
}

let nombre = "Carlos";
let edad = 32;
miTaggedTemplateLiteral`Hola soy ${nombre} y tengo ${edad} años`;

// ["Hola soy ", " y tengo ", " años"]
// "Carlos"
// 32

