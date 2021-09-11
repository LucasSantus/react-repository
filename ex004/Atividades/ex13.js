// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Declarando variaveis.
let ano = 0;
let car = ""

// Verificando veiculo mais novo.
veiculos.forEach(veiculo => {
    ano_veiculo = parseFloat(veiculo.anoModelo);
    if(ano == 0) ano = parseFloat(ano_veiculo);
    if(ano > parseFloat(ano_veiculo)){
        ano = parseFloat(ano_veiculo);
        car = veiculo;
    }
});

// Printando.
console.log(`Ano ${ano}.`);