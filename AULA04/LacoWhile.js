const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");
let contador = 10;
while ( contador  >= 1 && contador >= 0){
console.log(`${numero} x ${contador} = ${numero * contador}`);
--contador  ;
}