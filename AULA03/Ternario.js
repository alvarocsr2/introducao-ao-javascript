const { questionFloat } = require("readline-sync")

let idade = questionFloat("Qual sua idade ? ")

idade  >= 18 ? console.log("\n Maior de idade ") : console.log(" Menor de idade")