// Importando veiculos.
const veiculos = require('../Veiculos.json');
const redline = require('readline');

// criando interface input.
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função de pesquisa.
function pesquisar(fipe){
    n =  veiculos.filter(veiculo => { 
        return veiculo.codigoFipe == fipe;
    });

    return n;
}

// Recuperando FIPE.
rl.question("Insira o código FIPE: ", resposta =>{
    filtrando_veiculos = pesquisar(resposta);

    // Printando.
    filtrando_veiculos.length > 0 ? console.log(`${filtrando_veiculos[0].marca} ${filtrando_veiculos[0].modelo}`) : console.log("nenhum veículo encontrado.");

    // Fechando interface input.
    rl.close();
});