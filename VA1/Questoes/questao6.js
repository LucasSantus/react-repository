// Importando produtos.
const produtos = require('../produtos.json');

//Função para pesquisar.
function pesquisar() {
    produtos.forEach((produto) => {
        total = 0.0;
        total = (parseFloat(produto.precoVenda) / parseFloat(produto.precoCusto) - 1) * 100;
        console.log(`${produto.nome} com ${total} de lucro.`);
    });
}

pesquisar();