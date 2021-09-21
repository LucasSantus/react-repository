// Importando produtos.
const produtos = require('../produtos.json');

//Função para pesquisar.
function pesquisar(codigo) {
    let dados = produtos.find((produto) => {
        return produto.codigo == codigo;
    });
    dados ? console.log(dados): console.log("\nNão contém produto com esse código!\n");
}

// Chamando função de pesquisa.
pesquisar("1798");