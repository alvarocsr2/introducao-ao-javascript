const leia = require("readline-sync");

let a = leia.questionFloat("Digite o valor de A : \n");
let b = leia.questionFloat("Digite o valor de B : \n");
let c = leia.questionFloat("Digite o valor de C : \n");


if (a + b > c) {
  console.log(`na seguinte soma  a+b é maior que c`);
} else if (a + b == c) {
  console.log(`na seguinte soma  a+b é igual a c`);
} else {
  console.log(`na seguinte soma  a+b é menor que c`);
}
