// Importando produtos.
const produtos = require('../produtos.json');

produtos.forEach((produto) => {
    total = 0.0;
    total = parseInt(produto.qtdEstoqueMinimo) + parseInt(produto.qtdEstoqueMaximo);
    console.log(`O produto ${produto.nome} tem média de ${total/2}.`);
});