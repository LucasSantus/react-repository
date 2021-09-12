// Importando veiculos.
const veiculos = require('../Veiculos.json');
const redline = require('readline');

// criando interface input.
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função de pesquisa.
function pesquisar(modelo){
    n =  veiculos.filter(veiculo => { 
        return veiculo.modelo == modelo;
    });

    return n;
}

// Recuperando modelo.
rl.question("Insira o nome do veículo: ", resposta =>{
    filtrando_veiculos = pesquisar(resposta);

    // Printando.
    filtrando_veiculos.length > 0 ? console.log(`${filtrando_veiculos[0].marca} ${filtrando_veiculos[0].modelo}`) : console.log("nenhum veículo encontrado.");

    // Fechando interface input.
    rl.close();
});