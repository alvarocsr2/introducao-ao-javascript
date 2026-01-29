const leia = require("readline-sync")

let vetorInt = new Array(5)
 
for (let index= 0; index <= 5; index++){
    vetorInt[index] = leia.questionInt(`Digite o numero ${index+1}:`); 
}

console.log("\n Os números digitados foram: \n");

for(let index = 0; index <5; index++){
    console.log(`${indice +1} ° numero: ${vetorInt[indice]}`);
    
}