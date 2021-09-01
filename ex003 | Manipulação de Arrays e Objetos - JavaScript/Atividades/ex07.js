// Importando pessoas.
const pessoas = require('../pessoas.json');

let pessoas_estado = []

// Recuperando estados.
let estados = pessoas.map((pessoa) => { 
    return pessoa.estado; 
}).filter((i)=>{
    if(!pessoas_estado.includes(i)) pessoas_estado.push(i) 
});

// Printando.
pessoas_estado.forEach(estado => {
    let quantidade = pessoas.filter((pessoa)=>{
        return pessoa.estado == estado;
    });
    console.log(`Há ${quantidade.length} pessoas no estado de ${estado}.`);
})
