// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let dados = pessoas.filter((pessoa) => {
    return pessoa.peso > 80;
})

// Printando.
console.log(`Existem ${dados.length} pessoas acima dos 80Kg.`)