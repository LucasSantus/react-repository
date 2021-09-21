// Importando produtos.
const produtos = require('../produtos.json');

//Função para pesquisar.
function pesquisar(codigo) {
    let dado = produtos.find((produto) => {
        return produto.codigo == codigo;
    });

    if(parseInt(dado.qtdEstoque) < parseInt(dado.qtdEstoqueMinimo)) return "Estoque está abaixo do minimo.";
    else if(parseInt(dado.qtdEstoque) > parseInt(dado.qtdEstoqueMaximo)) return "Estoque está acima do máximo.";
    else return "Estoque está entre os dois.";
}

// Chamando função de pesquisa.
console.log(pesquisar("1368"));