const leia = require("readline-sync");

function mediaSemestral() {
  let nota1 = 0;
  let nota2 = 0;
  let nota3 = 0;
  let nota4 = 0;
  let media = 0;

  console.log(
    "Olá Aluno! Gostaria de saber qual valor da sua média nesse semestre ?",
  );

  nota1 = parseFloat(
    leia.question("Primeiro me diga o valor da sua nota em Portugol : "),
  );
  if (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
    console.log("Nota inválida, digite apenas valores entre (0 e 10)\n");
    return;
  }

  nota2 = parseFloat(
    leia.question(
      "Também preciso que me diga o valor da sua nota em Gitbash : ",
    ),
  );
  if (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
    console.log("Nota inválida, digite apenas valores entre (0 e 10)\n");

    return;
  }
  nota3 = parseFloat(
    leia.question(
      "Por favor, me diga também o valor da sua nota em atividades de Markdown : ",
    ),
  );
  if (nota3 < 0 || nota3 > 10 || isNaN(nota3)) {
    console.log("Nota inválida, digite apenas valores entre (0 e 10)\n");

    return;
  }
  nota4 = parseFloat(
    leia.question("Por fim, me diga sua nota em Javascript, por favor : "),
  );
  if (nota4 < 0 || nota4 > 10 || isNaN(nota4)) {
    console.log("Nota inválida, digite apenas valores entre (0 e 10)\n");

    return;
  }
  media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 8.0) {
    console.log(
      "Parabéns ! você atingiu a média : " +
        media.toFixed(2) +
        " e passou de semestre!",
    );
  } else if (media < 5.0) {
    console.log(
      "Poxa, você atingiu a média " +
        media.toFixed(2) +
        " portanto, nao passou de semestre. ",
    );
  } else {
    console.log(
      "Voce atingiu a média " +
        media.toFixed(2) +
        " então está de recuperacao, neste semestre.",
    );
  }
}
mediaSemestral();
