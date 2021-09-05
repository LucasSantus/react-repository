// Importando pessoas.
const pessoas = require('../pessoas.json');

let contador = 0 

// Printando.
pessoas.forEach(pessoa => {
    contador+=1
    if(pessoa.nome == "Laura Eduarda da Cunha"){
        console.log(`A Laura está na posição ${contador} da lista.`)
    }
})