// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
dados = pessoas.some((pessoa)=>{
    return pessoa.idade < 18
});

// Printando.
dados ? console.log("Contém pessoas menor de idade.") : console.log("Não contém pessoas menor de idade.")