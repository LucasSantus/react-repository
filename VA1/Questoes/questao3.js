// Importando produtos.
const produtos = require('../produtos.json');

// Separando departamentos.
let list_departamentos = []
produtos.forEach(produto => { 
    if(!list_departamentos.includes(produto.Departamento)) list_departamentos.push(produto.Departamento); 
});

// Filtrando e Printando departamentos.
list_departamentos.forEach(departamento => {
    departamentos_filtrados = produtos.filter(produto => { 
        if(produto.Departamento == departamento) return produto.qtdEstoque;
    });

    // Printando.
    console.log(`${departamento}: ${departamentos_filtrados.length} produtos.`);
});