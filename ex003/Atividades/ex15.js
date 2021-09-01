// Importando pessoas.
const pessoas = require('../pessoas.json');

// Printando.
pessoas.forEach((pessoa)=>{
    console.log(`Nome: ${pessoa.nome}\nE-mail: ${pessoa.email}\n`)
})