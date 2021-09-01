// Importando pessoas.
const pessoas = require('../pessoas.json');

let IMC = 0.0

// Somando IMC
pessoas.forEach(pessoa => {
    IMC += ( pessoa.peso / ( pessoa.altura * pessoa.altura ));
    console.log(pessoa.idade)
})

// Printando
console.log(`Média IMC: ${ IMC / pessoas.length }`);