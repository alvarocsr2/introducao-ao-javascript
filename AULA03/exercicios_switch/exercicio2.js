const leia = require("readline-sync");
console.log("\n=============================================");
console.log("\n                     STAFF LIST                  ");
console.log("\n=============================================");
console.log("\n ================== =========       PERCENTUAL DO REAJUSTE======");
console.log("\n==================    CARGO      =====================");
console.log("\nCODIGO DO CARGO=============================================");
console.log("\n     (1) |           GERENTE                 | 10%"); 
console.log("\n     (2) |           VENDEDOR                | 7%"); 
console.log("\n     (3) |           SUPERVISOR              | 9%");
console.log("\n     (4) |           MOTORISTA               | 6%");
console.log("\n     (5) |           ESTOQUISTA              | 5%");
console.log("\n     (6) |           TECNICO DE TI           | 8%");    
console.log("\n=============================================");

//  formula : novo salario = salario + (reajuste* salario)
let reajuste = 0;
let salarionovo =0;
let cargo = "";
let nome = leia.question("Qual o nome do funcionario ? ");
let codigo = leia.questionInt ("Me diga qual é o codigo do cargo ? ");
let salario = leia.questionInt("Agora informe a quantia do seu salario atual : ")

switch(codigo){
    case 1:
        reajuste = 10;
        cargo = "Gerente";
    break;
    case 2:
        reajuste = 7;
        cargo = "Vendedor"
    break;
    case 3:
        reajuste = 9;
        funcionario = "Supervisor;"
    break;
    case 4:
        reajuste = 6;
        cargo = "Motorista";
    break;
    case 5:
        reajuste = 5;
        cargo = "Estoquista";
    break;
    case 6:
        reajuste = 8;
        cargo = "Tecnico de TI"
    break;
}

salarionovo = salario + ( salario * reajuste/ 100);
console.log(`O ${nome} exercendo a funçao de ${cargo} recebeu um reajuste salarial de ${reajuste}%. Recebendo atualmente ${salarionovo.toFixed(2)} R$`);