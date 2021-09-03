// Importando pessoas.
const pessoas = require('../pessoas.json');

// Declarando objeto.
let objeto = {
    pessoa: "", idade: 0,
}

// Verificando maior idade.
pessoas.forEach(pessoa => {
    if(objeto.idade < parseFloat(pessoa.idade)){
        objeto.pessoa = pessoa.nome;
        objeto.idade = parseFloat(pessoa.idade);
    }
});

// Printando.
console.log(`${objeto.pessoa} é o mais velho(a) com ${objeto.idade} anos.`);