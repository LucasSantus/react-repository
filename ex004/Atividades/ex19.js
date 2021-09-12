// Importando veiculos.
const veiculos = require('../Veiculos.json');
const redline = require('readline');

// criando interface input.
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função de pesquisa.
function pesquisar(combustivel){
    n =  veiculos.filter(veiculo => { 
        return veiculo.combustivel == combustivel;
    });

    return n;
}

// Recuperando combustivel.
rl.question("Insira o combustivel do veículo: ", resposta =>{
    filtrando_veiculos = pesquisar(resposta);

    // Printando.
    filtrando_veiculos.forEach(element => {
        console.log(element)
    });

    // Fechando interface input.
    rl.close();
});