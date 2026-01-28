const leia = require("readline-sync");

let media = leia.questionFloat("Digite a media do aluno");

if(media >= 7 ){
    console.log("Aluno Aprovado")
;
  
}else{ console.log("Aluno Reprovado!")

}

