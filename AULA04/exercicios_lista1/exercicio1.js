const leia = require("readline-sync");

let num = leia.questionInt("Digite o valor de um numero: ");
let num2 = leia.questionInt("Digite o valor de outro numero: ");

if (num <= num2) {
  for (let contador = num; contador <= num2; contador++) {
    if (contador % 3 == 0 && contador % 5 == 0) {
      console.log(`${contador} é multiplo de 3 e 5`);
    }
  }
} else {
  console.log("Intervalo Invalido!");
}
