const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrou = false;
let posicao = 0;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] == numero) {
    encontrou = true;
    posicao = i;
  }
}

if (encontrou == true) {
  console.log("O numero", numero, "esta localizado na posicao:", posicao);
} else {
  console.log("O numero", numero, "nao foi encontrado!");
}
