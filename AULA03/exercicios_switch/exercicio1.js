const leia = require("readline-sync")

console.log("\n=============================================");
console.log("\n       BEM VINDO A LANCHONETE DOS CRIA                  ");
console.log("\n=============================================");
console.log("\n==================CARDÁPIO======================");
console.log("\n (1) |        Cachorro-Quente         | R$10.00"); 
console.log("\n (2) |           X-Salada             | R$15.00"); 
console.log("\n (3) |           X-Bacon              | R$18.00");
console.log("\n (4) |            Bauru               | R$12.00");
console.log("\n (5) |        Refrigerante            | R$8.00");
console.log("\n (6) |        Suco de Laranja         | R$13.00");    
console.log("\n=============================================");

console.log("Eai, Seja bem vindo a Lanchonete dos Cria. Me deixe anotar seu pedido!");



let preco = 0;
let nomeProduto = "";
let total = 0;

let item = leia.questionInt("\nQual item do cardapio voce escolhe ? ", {limitMessage: "Digite por favor. somente o numero do produto que deseja escolher, de 1 a 6 !" });
if(item <0 || item >10 ){console.log("Digite por favor, o número do produto que deseja escolher de 1 a 6 !"); return; };

let quantidade = leia.questionInt("Quantos voce gostaria de adquirir ? ");



switch(item){
    case 1:
    preco = 10;
    nomeProduto = "Cachorro-Quente";
    break;
    case 2:
    preco = 15;
    nomeProduto ="X-Salada";
    break;
    case 3:
    preco = 18;
    nomeProduto = "X-Bacon";
    break;
    case 4:
    preco = 12;
    nomeProduto = "Bauru";
    break;
    case 5:
    preco = 8;
    nomeProduto = "Refrigerante";
    break;
    case 6:
    preco = 13;
    nomeProduto = "Suco de Laranja" 
    break;
}
total = (preco*quantidade);
console.log(`Voce adquiriu ${quantidade}  ${nomeProduto} ! `)
console.log(`Danto um total de : ${ total.toFixed(2)} R$`)
