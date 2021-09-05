// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando estados.
let estados = pessoas.map((pessoa) => {
    return pessoa.estado;
});

// Separando estados.
let list_estados = []
estados.forEach(i => {
    if(!list_estados.includes(i)){
        list_estados.push(i)
    }
})

// Printando.
list_estados.forEach(i => {
    let estado = pessoas.filter((pessoa)=>{
        return pessoa.estado == i;
    });
    estado.length > 0 ? console.log(`Contém ${estado.length} pessoas no estado de ${i}.`) : console.log(`Não Contém pessoas no estado de ${i}.`);
})