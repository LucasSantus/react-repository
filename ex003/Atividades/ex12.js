// Importando pessoas.
const pessoas = require('../pessoas.json');

// Declarando objeto.
let objeto = {
    pessoa: "", altura: 0,
}

// Verificando menor altura.
pessoas.forEach(pessoa => {
    if(objeto.altura == 0) objeto.altura = parseFloat(pessoa.altura);
    if(objeto.altura > parseFloat(pessoa.altura)){
        objeto.pessoa = pessoa.nome;
        objeto.altura = parseFloat(pessoa.altura);
    }
});

// Printando.
console.log(`${objeto.pessoa} é o mais baixo com ${objeto.altura}.`);