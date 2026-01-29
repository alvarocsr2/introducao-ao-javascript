const leia = require("readline-sync");

let continuar = "S";

let totalPessoas = 0;
let somaIdades = 0;

let qtdBackend = 0;
let qtdMulherFrontend = 0;
let qtdHomemMobile40 = 0;
let qtdNaoBinarioFull30 = 0;

while (continuar === "S") {
  let idade = leia.questionInt("Digite a idade: ");
  let genero = leia.questionInt("Genero (1-6): ");
  let tipoDev = leia.questionInt("Tipo Dev (1-4): ");

  totalPessoas = totalPessoas + 1;
  somaIdades = somaIdades + idade;

  if (tipoDev === 1) {
    qtdBackend = qtdBackend + 1;
  }

  if (tipoDev === 2) {
    if (genero === 1 || genero === 4) {
      qtdMulherFrontend = qtdMulherFrontend + 1;
    }
  }

  if (tipoDev === 3) {
    if ((genero === 2 || genero === 5) && idade > 40) {
      qtdHomemMobile40 = qtdHomemMobile40 + 1;
    }
  }

  if (tipoDev === 4) {
    if (genero === 3 && idade < 30) {
      qtdNaoBinarioFull30 = qtdNaoBinarioFull30 + 1;
    }
  }

  continuar = leia.question("Deseja continuar? (S/N): ").toUpperCase();
}

let mediaIdade = somaIdades / totalPessoas;

console.log("Pessoas desenvolvedoras Backend:", qtdBackend);
console.log("Mulheres Cis e Trans Frontend:", qtdMulherFrontend);
console.log("Homens Cis e Trans Mobile > 40:", qtdHomemMobile40);
console.log("Nao Binarios FullStack < 30:", qtdNaoBinarioFull30);
console.log("Total de pessoas:", totalPessoas);
console.log("Media de idade:", mediaIdade.toFixed(2));
