// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Ordenando veiculos por valor.
i = veiculos.sort(function (a, b) {
    convert_a = parseFloat(a.valor.replace("R$ ", ""));
    convert_b = parseFloat(b.valor.replace("R$ ", ""));
    if (convert_a < convert_b) { return 1; }
    if (convert_a > convert_b) { return -1; }
    return 0;
});

// Printando.
console.log(`O carro mais barato:\n${i[i.length - 1].marca} ${i[i.length - 1].modelo} - ${i[i.length - 1].valor}`);