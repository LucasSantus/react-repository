// Importando feriados.
const feriados = require('../Feriados.json');

// Recuperando dados.
let dados = feriados.filter((feriado) => { 
    if( new Date(feriado.date).getUTCFullYear() == "2021") return feriado;
})

// Printando.
console.log(`Atualmente há ${dados.length} feriados em 2021.`)