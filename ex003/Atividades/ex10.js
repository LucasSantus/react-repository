// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
const dados = pessoas.reduce((soma, item) => {
    return soma + parseFloat(item.altura);
}, 0);

// Printando.
console.log(`A altura média dessas pessoas é ${dados / pessoas.length}`);