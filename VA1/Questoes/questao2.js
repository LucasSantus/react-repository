// Importando produtos.
const produtos = require('../produtos.json');

//Função para pesquisar.
function pesquisar() {
    let dados = produtos.some((produto) => {
        return parseInt(produto.qtdEstoque) > parseInt(produto.qtdEstoqueMaximo);
    });

    dados ? console.log("\nExiste(m) produto(s) com quantidade de estocados acima do estoque máximo!\n"): console.log("\nNão existe(m) produto(s) com quantidade de estocados acima do estoque máximo!\n");
}

// Chamando função de pesquisa.
pesquisar();