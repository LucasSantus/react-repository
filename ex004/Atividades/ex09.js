// Importando veiculos.
const veiculos = require('../Veiculos.json');

// Declarando variaveis.
let valor = 0;
let car = ""

// Verificando veiculo mais caro.
veiculos.forEach(veiculo => {
    valor_veiculo = parseFloat(veiculo.valor.replace("R$ ", ""));
    if(valor < parseFloat(valor_veiculo)){
        valor = parseFloat(valor_veiculo);
        car = veiculo;
    }
});

// Printando.
console.log(`${car.modelo} é o carro mais caro, valendo: ${valor} reias.`);