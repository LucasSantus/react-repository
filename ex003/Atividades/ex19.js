// Importando pessoas.
const pessoas = require('../pessoas.json');

// Printando.
pessoas.forEach(pessoa => {
    if(pessoa.nome == "Raul Nathan Oliver Dias"){
        console.log(`Estado: ${pessoa.estado}\nCidade: ${pessoa.cidade}\nEndereço: ${pessoa.endereco}\nNúmero: ${pessoa.numero}\nBairro: ${pessoa.bairro}`);
    }   
})