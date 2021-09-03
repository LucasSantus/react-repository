// Importando pessoas.
const pessoas = require('../pessoas.json');

// Declarando objeto.
let objeto = {
    pessoa: "", idade: 0,
}

// Verificando menor idade.
pessoas.forEach(pessoa => {
    if(objeto.idade == 0) objeto.idade = parseFloat(pessoa.idade);
    if(objeto.idade >= parseFloat(pessoa.idade)){
        objeto.pessoa = pessoa.nome;
        objeto.idade = parseFloat(pessoa.idade);
    }
});

// Printando.
console.log(`${objeto.pessoa} é o mais novo(a) com ${objeto.idade} anos.`);