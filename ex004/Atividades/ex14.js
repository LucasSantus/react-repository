// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Ordenando veiculos por valor.
i = veiculos.sort(function (a, b) {
    if (a.anoModelo > b.anoModelo) { return 1; }
    if (a.anoModelo < b.anoModelo) { return -1; }
    return 0;
});

// Printando.
console.log(`O carro mais novo:\n${i[i.length - 1].marca} ${i[i.length - 1].modelo} - ${i[i.length - 1].anoModelo}`);