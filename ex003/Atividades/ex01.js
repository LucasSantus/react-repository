// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let dados = pessoas.filter((pessoa) => { return pessoa.idade >= 18; })

// Printando.
console.log(`Atualmente há ${dados.length} pessoas maiores de idade.`)