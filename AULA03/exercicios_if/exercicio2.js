const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero : \n");

numero < 0 ? console.log(` O numero ${numero} é negativo `) : console.log(` O numero ${numero} é positivo `);
(numero%2) == 0 ? console.log(` E também é um número par`) : console.log(` E também é um número impar`) ;