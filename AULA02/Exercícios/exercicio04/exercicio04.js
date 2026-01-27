const leia = require("readline-sync");

function main() {
  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  let n4 = 0;
  let diferenca;
  console.log(
    "Olá, Aqui iremos ver quais sao as diferenças entre 2 produtos !",
  );

  n1 = parseFloat(leia.question("Qual o valor do primeiro numero ?  "));
  if (isNaN(n1)) {
    console.log("Por favor, digite apenas números ! ");
    return;
  }

  n2 = parseFloat(leia.question("Qual o valor do segundo numero ?  "));
  if (isNaN(n2)) {
    console.log("Por favor, digite apenas números ! ");
    return;
  }
  n3 = parseFloat(leia.question("E o valor do terceiro numero ?  "));
  if (isNaN(n3)) {
    console.log("Por favor, digite apenas números ! ");
    return;
  }
  n4 = parseFloat(leia.question("Por fim, o valor do quarto numero ?  "));
  if (isNaN(n4)) {
    console.log("Por favor, digite apenas números ! ");
    return;
  }

  diferenca = n1 * n2 - n3 * n4;
  console.log(
    "Sendo assim a diferença dos dois produtos é de : " + diferenca.toFixed(2),
  );
}
main();
