const leia = require('readline-sync');

let matriz = new Array(2);

for (let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3);
}

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
        matriz[linha][coluna] = leia.questionInt(`matriz[${linha}][${coluna}] = `);
    }
}

//exibir os dados da matriz
console.table(matriz);