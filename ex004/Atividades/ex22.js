// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Filtrando veiculos.
veiculos_filtrados = veiculos.filter(veiculo => { return veiculo.anoModelo < 2005; });

valor_total = 0;

// Calculando preço total dos veiculos.
veiculos_filtrados.forEach(element => {
    valor_total += parseFloat(element.valor.replace("R$ ", ""));
});

// Printando.
console.log(`O valor total dos veiculos com data de fabricação anterior a 2005: R$ ${valor_total}`);