// Importando pessoas.
const pessoas = require('../pessoas.json');

// Printando.
pessoas.forEach(pessoa => {
    console.log(`Estado: ${pessoa.estado}\nCidade: ${pessoa.cidade}\nEndereço: ${pessoa.endereco}\nNúmero: ${pessoa.numero}\nBairro: ${pessoa.bairro}`);
})