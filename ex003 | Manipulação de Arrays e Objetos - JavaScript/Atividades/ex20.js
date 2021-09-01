// Importando pessoas.
const pessoas = require('../pessoas.json');

// Importando fs.
const fs = require('fs')

// Recuperando dados.
dados = pessoas.filter((pessoa)=>{
    return (pessoa.idade > 30) && (pessoa.peso / (pessoa.altura*pessoa.altura)) > 25
});

// Gravando novo arquivo json.
fs.writeFile('./new_pessoas.json', JSON.stringify(dados), err => {
    err ? console.log('Falha ao gravar novo arquivo.') : console.log('Sucesso ao gravar novo arquivo.');
})