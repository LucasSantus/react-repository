// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
const IMC = pessoas.map((pessoa) => {
    return (pessoa.peso / (pessoa.altura * pessoa.altura));
}).reduce((soma, imc) => {
    return soma + imc;
}, 0);

// Printando
console.log(`Média IMC: ${ IMC / pessoas.length }`);
