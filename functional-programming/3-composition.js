
// ? - Composition
let numerosV1 = ['2', '4', '7', '6'];

let suma1 = numerosV1
  .map(numero => parseInt(numero))
  .filter(numero => numero % 2 == 0)
  .reduce( (acc,numero) => acc + numero, 0);

console.log(suma);

// ! With loops

let numerosV2 = ['2', '4', '7', '6'];
let suma2 = 0;

for(let i = 0;i< numerosV2.length;i++){
  let numeroStr = numeros[i];
  let numeroInt = parseInt(numeroStr);

  if(numeroInt % 2 == 0){
    suma += numeroInt;
  }
}

console.log(suma2)

// Is not that is a bad written code but once you understand the methods, it gets easier to read as the codee gets more expressive
// * this is another example of declarative vs imperative. 2 ways of thinking.
