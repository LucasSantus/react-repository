// Importando produtos.
const produtos = require('../produtos.json');

// Separando departamentos.
let list_departamentos = []
produtos.forEach(produto => { 
    if(!list_departamentos.includes(produto.Departamento)) list_departamentos.push(produto.Departamento); 
});

console.log(`O valor médio por departamentos:`);

// Filtrando e Printando departamentos.
list_departamentos.forEach(departamento => {
    total = 0;
    departamentos_filtrados = produtos.filter(produto => { 
        if(produto.Departamento == departamento){
            total += parseFloat(produto.precoCusto);
            return total
        }
    });

    // Printando.
    console.log(`${departamento}: ${total/departamentos_filtrados.length}.`);
});