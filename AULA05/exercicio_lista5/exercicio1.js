const leia = require("readline-sync");

let matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let somaPrincipal = 0;
let somaSecundaria = 0;

console.log("Digite os valores da matriz 3x3:");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = leia.questionInt("Elemento [" + i + "][" + j + "]: ");
  }
}

console.log("Matriz digitada:");
console.table(matriz);

console.log("Elementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
  somaPrincipal = somaPrincipal + matriz[i][i];
}

console.log("Elementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][2 - i]);
  somaSecundaria = somaSecundaria + matriz[i][2 - i];
}

console.log("Soma da Diagonal Principal:", somaPrincipal);
console.log("Soma da Diagonal Secundaria:", somaSecundaria);
