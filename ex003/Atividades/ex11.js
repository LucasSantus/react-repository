// Importando pessoas.
const pessoas = require('../pessoas.json');

// Declarando objeto.
let objeto = {
    pessoa: "", altura: 0,
}

// Verificando maior altura.
pessoas.forEach(pessoa => {
    if(objeto.altura < parseFloat(pessoa.altura)){
        objeto.pessoa = pessoa.nome;
        objeto.altura = parseFloat(pessoa.altura);
    }
});

// Printando.
console.log(`${objeto.pessoa} é o mais alto com ${objeto.altura}.`);