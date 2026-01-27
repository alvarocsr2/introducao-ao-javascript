const leia = require("readline-sync");
let salario = 0;
let abono = 0;
let resultado;
console.log(
  "Olá,  esse é um simulador de salário liquido desenvolvido por Álvaro César\n Com o intuíto de simular quanto receberia adicionando um abono salarial.\n ",
);
salario = Number(
  leia.question("Para comecarmos, preciso que digite o valor do seu salario: "),
);
abono = Number(
  leia.question("Agora, digite a quantidade do abono salarial a receber: "),
);
resultado = salario + abono;
console.log(
  "O valor que voce possui para receber é de : " + resultado.toFixed(2) + "R$",
);
console.log(
  "Muito obrigado por usar meu simulador salarial. Espero ter ajudado!!",
);
