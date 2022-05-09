// ? Array|Object Destructuring

// We call destructuring (de-structure) the process of unpacking the elements of an {}|[]

// We use the element definition but in the left side of the = sign.

let [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

let usuario = { nombre: 'Aaron', edad: 21 };
console.log(usuario.nombre)
console.log(usuario.edad)

// We can create variables based on the property names of an object
let { nombre, edad } = usuario; // * NAME HAS TO MATCH
console.log(nombre)
console.log(edad)

// * If we wanna use a different name
let { nombre: username } = usuario;
console.log(username)