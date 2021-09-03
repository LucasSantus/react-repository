// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let cidades = pessoas.map(pessoa => {
    return pessoa.cidade;
}).filter((elemento, posicao, objeto) => {
    return objeto.indexOf(elemento) === posicao;
});

// Printando.
console.log(cidades)