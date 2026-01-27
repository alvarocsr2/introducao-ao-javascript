"use strict";
let nome;
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.9;
var numero = "10";

const bonus = 0.05;
// console.log(numero);
// console.log("O tipo da varável nome é: " , typeof(nome));
console.log(
  "Salário Liquido:",
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(salarioBruto + bonus * salarioBruto),
);
