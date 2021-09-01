// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let estados = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20 && pessoa.idade <= 45;
}).map((pessoa) => {
    return pessoa.estado;
});

// Printando.
console.log(estados)