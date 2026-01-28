const leia = require("readline-sync");

console.log("\n=============================================");
console.log("\n        CALCULADORA COM SWITCH CASE           ");
console.log("\n (+) - Soma");
console.log("\n (-) - Subtração");
console.log("\n (*) - Multiplicação");
console.log("\n (/) - Divisão");
console.log("\n=============================================");
console.log("\n");

let operacao = leia.keyIn("Digite a operacao : ", {
  limitMessage: "Digite um numero float",
});

let numero1 = leia.questionFloat("Digite o primeiro valor: ", {
  limitMessage: "Digite um numero float",
});

let numero2 = leia.questionFloat("Digite o segundo valor: ", {
  limitMessage: "Digite um numero float",
});

switch(operacao){
  case "+":
    console.log(`${numero1}+${numero2} = ${numero1 + numero2}`);
    break;
  case "-":
    console.log(`${numero1}-${numero2} = ${numero1 - numero2}`);

    break;
  case "*":
    console.log(`${numero1}*${numero2} = ${numero1 * numero2}`);

    break;
  case "/":
    console.log(`${numero1}/${numero2} = ${numero1 / numero2}`);

    break;
    default:
            console.log("Operação Invalida !");
}
