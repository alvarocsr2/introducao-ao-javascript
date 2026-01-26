const leia = require("readline-sync");

let n1 = leia.questionInt("Digite um número: ");
let n2 = leia.questionInt("Digite outro número");
let soma = n1 + n2;
console.log("A soma dos dois números são: ", soma);
