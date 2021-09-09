// Importando pessoas.
const feriados = require('../Feriados.json');

// Separando estados.
let list_estados = []
feriados.forEach(i => {
    if(!list_estados.includes(i)){
        list_estados.push(i)
    }
})
// Printando
console.log(`Primeiro Feriado: ${ firstItem}`);
