// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Separando marcas.
let list_fabricantes = []
veiculos.forEach(i => { if(!list_fabricantes.includes(i.marca)){ list_fabricantes.push(i.marca); }});

console.log(`O valor total dos carros por fabricante:`);

// Filtrando e Printando fabricantes.
list_fabricantes.forEach(fabricante => {
    valor_total = 0.0;

    fabricantes_filtrados = veiculos.filter(veiculo => { return veiculo.marca == fabricante; });

    fabricantes_filtrados.forEach(a => { valor_total += parseFloat(a.valor.replace("R$ ", "")) });

    // Printando.
    console.log(`\n${fabricante} - ${valor_total / fabricantes_filtrados.length}`);
})