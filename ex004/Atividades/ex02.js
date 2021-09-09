// Importando pessoas.
const feriados = require('../Feriados.json');

// Pegando primeiro e ultimo feriado.
first = feriados[0];
last = feriados[feriados.length - 1];

// Printando.
console.log(`\nPrimeiro Feriado\nNome: ${first.name} || Tipo: ${first.type} || Data: ${first.date}`);
console.log(`\nÚltimo Feriado\nNome: ${last.name} || Tipo: ${last.type} || Data: ${last.date}`);