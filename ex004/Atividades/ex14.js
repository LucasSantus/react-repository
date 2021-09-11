// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Declarando variaveis.
let ano = 0;
let car = ""

// Verificando veiculo mais novo.
veiculos.forEach(veiculo => {
    ano_veiculo = parseFloat(veiculo.anoModelo);
    if(ano < parseFloat(ano_veiculo)){
        ano = parseFloat(ano_veiculo);
        car = veiculo;
    }
});

// Printando.
console.log(`${car.modelo} é o carro mais novo, ano ${ano}.`);