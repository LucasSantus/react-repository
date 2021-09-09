// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Separando marcas.
let list_marcas = []
veiculos.forEach(i => {
    if(!list_marcas.includes(i.marca)){
        list_marcas.push(i.marca);
        console.log(`${i.marca}`);
    }
})

// Printando.
console.log(`Existem ${list_marcas.length} marcas diferentes de carros.`);