// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Separando combustivel's.
let list_combustivel = []
veiculos.forEach(i => { if(!list_combustivel.includes(i.combustivel)){ list_combustivel.push(i.combustivel); }});

// Filtrando e Printando fabricantes.
list_combustivel.forEach(combustivel => {
    combustiveis_filtrados = veiculos.filter(veiculo => { return veiculo.combustivel == combustivel; });

    // Printando.
    console.log(`Tipo de Combustível: ${combustivel} - Quantidade de Veículos: ${combustiveis_filtrados.length}`);
})