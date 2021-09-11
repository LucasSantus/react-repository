// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Separando marcas.
let list_marcas = []
veiculos.forEach(veiculo => {
    if(!list_marcas.includes(veiculo.marca)){
        list_marcas.push(veiculo.marca);
    }
})

// Printando.
list_marcas.forEach(marca => {
    qtd_veiculos = veiculos.filter(veiculo => {
        return veiculo.marca == marca;
    });

    console.log(`A marca ${marca} contém ${qtd_veiculos.length} veiculos.`);
});