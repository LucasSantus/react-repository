// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
const dados = pessoas.reduce((soma, item) => {
    return soma + item.idade;
}, 0);

// Printando.
console.log(`A idade média dessas pessoas é ${dados / pessoas.length}`);