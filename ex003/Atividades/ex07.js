// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando estados.
let estados = pessoas.map(pessoa => {
    return pessoa.estado;
}).filter((elemento, posicao, objeto) => {
    return objeto.indexOf(elemento) === posicao;
}).sort();

// Printando.
estados.forEach(estado => {
    let pessoas = pessoas.filter((pessoa)=>{
        return pessoa.estado == estado;
    });
    console.log(`Há ${pessoas.length} pessoas no estado de ${estado}.`);
})