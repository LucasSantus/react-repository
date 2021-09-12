// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Separando marcas.
let list_marcas = []
veiculos.forEach(i => { if(!list_marcas.includes(i.marca)){ list_marcas.push(i.marca); }});

// Filtrando e Printando marcas.
list_marcas.forEach(marca => {
    marcas_filtrados = veiculos.filter(veiculo => { return veiculo.marca == marca; });

    // Printando.
    console.log(`${marca}\nQuantidade de Veículos: ${marcas_filtrados.length}`);
});