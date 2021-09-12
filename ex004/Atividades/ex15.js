// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Filtrando veiculos.
veiculos_filtrados = veiculos.filter(veiculo => { return veiculo.anoModelo < 2000; });

// Ordenando veiculos por valor.
i = veiculos_filtrados.sort(function (a, b) {
    convert_a = parseFloat(a.valor.replace("R$ ", ""));
    convert_b = parseFloat(b.valor.replace("R$ ", ""));
    if (convert_a > convert_b) { return 1; }
    if (convert_a < convert_b) { return -1; }
    return 0;
});

// Printando.
console.log(`o carro mais caro com fabricação antes do ano 2000:\n${i[i.length - 1].marca} ${i[i.length - 1].modelo} - ${i[i.length - 1].valor}`);