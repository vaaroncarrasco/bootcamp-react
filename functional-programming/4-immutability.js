// ? - Immutability
// We can define Immutability as an object that their value cant be modified throughout the time.
// This concept goes along with Functional Programming as we tend to work with // * pure functions
// that can handle objects|arrays

// * Primitive in JS as strings/numbers are immutable.
// each time you assign a number|string value to a var, you get a reference id and on each
// value modification, you are basically replacing the object/value; not modyfing it; ie.

let firstName = 'Victor';
firstName = 'Aaron'; // 'Victor' string was not modified, letter by letter in the array of values. Just replaced.

// Example
firstName[3] = 'x';
console.log(firstName) // Aaron // can not modify the string

// * Note: In an Immutable System, values can changed but not their structure.

// * Objects & Arrays are not immutable, but their structure CAN be modified:

// Object{}
let user = { fullName: 'Aaron Carrasco' };
user.age = 29; // Modfiying the object

// Array[]
let nums = [2,3]
nums[1] = 10; // Modifyin array


// ? Modifying []/{} is not allowed inside Immutable System.
// If you wanna modify an []/{}, you have to create a new structure

// * user{} was not modified, their props were spreaded into a new structure.
let userWithAge = { ...user, age: 29 };

// .map() returns a new array
let modifiedNums = nums.map((num, position) => position == 1 ? 10 : num );

// ? These were the same operations from the beginning but with a immutable perspective, without secondary fx.


// * Creating a function that returns a grades avg

let estudiante = { nombre: 'Uriel', calificaciones: [10,9,8] };

// ! First way
function calcularPromedio(estudiante) {
  let promedio = estudiante.calificaciones.reduce((acc, calificacion) => calificacion + acc) / estudiante.calificaciones.length;
  estudiante.promedio = promedio;
  return estudiante;
}
let estudianteConPromedio = calcularPromedio(estudiante)
console.log(estudiante); // ! Original object was modified as they're send as referenced // SIDE FX

// * Best way -> Pure function

let student = { name: 'Aaron', grades: [6, 1, 9] }

function getAvg(student) {
  let avg = student.grades.reduce((acc, grade) => grade + acc)/student.grades.length;
  return { ...student, avg: avg };
}

let studentWithAvg = getAvg(student);
console.log(student) // Original object was not modified

// ? In programming changes will always exist.
// But if we respect the immutabilty, values can be replaced, but not their structure