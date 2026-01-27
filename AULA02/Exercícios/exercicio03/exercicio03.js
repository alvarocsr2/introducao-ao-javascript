const leia = require("readline-sync");

function salarial() {
  let salarioBruto = 0;
  let adicionalNoturno = 0;
  let horasExtras = 0;
  let descontos = 0;
  let salarioLiquido;

  console.log("Gostaria de saber a quantia do seu salário liquido ? \n");

  salarioBruto = parseFloat(
    leia.question("Então, digite primeiro, o valor do seu salario bruto : "),
  );
  if (isNaN(salarioBruto)) {
    console.log("Por favor, digite apenas números! \n");
    return;
  }

  adicionalNoturno = parseFloat(
    leia.question("Digite agora quanto voce recebe de adicional noturno : \n"),
  );
  if (isNaN(adicionalNoturno)) {
    console.log("Por favor, digite apenas números! \n");
    return;
  }
  horasExtras = parseFloat(
    leia.question("Digite tambem, quanto voce fez de horas extras : \n"),
  );
  if (isNaN(horasExtras)) {
    console.log("Por favor, digite apenas números! \n");

    return;
  }
  descontos = parseFloat(
    leia.question("Por fim adicione os descontos de colaborador : \n"),
  );
  if (isNaN(descontos)) {
    console.log("Por favor, digite apenas números! \n");
    return;
  }
  salarioLiquido =
    salarioBruto + adicionalNoturno + horasExtras * 5 - descontos;
  console.log(
    "Bom, somando tudo, o valor liquído que vc tem de receber é : " +
      salarioLiquido.toFixed(2) +
      "R$ \n",
  );
  console.log("Obrigado por usar a calculadora Salarial! :)");
}
salarial();
