// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let cidades = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20 && pessoa.idade <= 45;
}).map((pessoa) => {
    return pessoa.cidade;
});

// Printando.
console.log(cidades)