// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let dados = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20 && pessoa.idade <= 45;
});

// Printando.
console.log(`Total de Pessoas Entre 20 e 45 anos: ${ dados.length }.`);