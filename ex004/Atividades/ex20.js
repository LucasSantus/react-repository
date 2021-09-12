// Importando veiculos.
const veiculos = require('../Veiculos.json');

valor_total = 0;

// Calculando preço total dos veiculos.
veiculos.forEach(element => {
    valor_total += parseFloat(element.valor.replace("R$ ", ""));
});

// Printando.
console.log(`valor total dos carros da lista:\nR$ ${valor_total}`);