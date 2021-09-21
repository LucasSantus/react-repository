// Importando produtos.
const produtos = require('../produtos.json');

// Ordenando produtos por preço.
i = produtos.sort(function (a, b) {
    convert_a = parseFloat(a.precoCusto);
    convert_b = parseFloat(b.precoCusto);
    if (convert_a > convert_b) return 1;
    if (convert_a < convert_b) return -1;
    return 0;
});

// Printando.
console.log(`O fornecedor mais caro é o ${i[i.length - 1].fornecedor}.`);