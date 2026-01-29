const leia = require("readline-sync");
// let matriz = [
//     [1, 7, 9]
//     [2, 6, 4],
//     [3, 5, 8]
// ]
// // numero de linhas é diferente do numero de colunas

// // console.log(matriz.length);
// for(let indice = 0; indice < matriz.length; indice ++){
//     matriz[indice] = Array(3);
// }

// for (let linha = 0; linha < matriz.length; linha ++){
//     for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
//         console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
//     }
// }

// let matriz = Array.from({ length: 2}, () =>
//     Array.from({ length: 3 },
//         () => leia.questionInt("Digite um numero: "))
// );

let matriz = Array.from({ length: 2 }, () =>
  Array.from({ length: 3 },
     () => leia.questionInt("Digite um numero: ")),
);

console.table(matriz);