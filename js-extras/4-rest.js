// ? Rest operator
// With rest we can group the 'rest' of the elements sent to a function

// * Example 1
function sum (a, b, ...others) {
  console.log(others)
  return a + b;
}

// First 2 (1,2) elements are saved as params 'a' & 'b', the rest is grouped inside an array -> others[3,4,5]
sum(1,2,3,4,5) // others = [3,4,5]

// * Example 2
let { nombre, ...resto } = { nombre: 'Aaron', edad: 21, admin: true }
console.log(nombre)

// The rest of the elements are stored inside otros{}
console.log(otros.edad)
console.log(otros.admin)

// * Example 3
let [uno, dos, ...rest] = [1, 2, 3, 4, 5]
console.log(uno) // 1
console.log(dos) // 2
console.log(rest[1]) // 4

// ? Why is this important?

// As we have seen in how passing elements as reference|value, it can cause many bugs when working with complex functionalities.
// In react is very common using spread, rest and destructuring cause we can duplicate/combine structures so we dont modify
// original objects