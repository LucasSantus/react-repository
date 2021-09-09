// Importando pessoas.
const feriados = require('../Feriados.json');

// Recuperando dados.
let dado = feriados.find((feriado) => { 
    return feriado.name == "Proclamação da República";
})

// Printando.
console.log(`\nNome: ${dado.name} || Tipo: ${dado.type} || Data: ${dado.date}`);