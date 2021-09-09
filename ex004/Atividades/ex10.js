// Importando pessoas.
const veiculos = require('../Veiculos.json');

// Declarando variaveis.
let valor = 0;
let car = ""

// Verificando veiculo mais barato.
veiculos.forEach(veiculo => {
    valor_veiculo = parseFloat(veiculo.valor.replace("R$ ", ""));
    if(valor == 0) valor = parseFloat(valor_veiculo);
    if(valor > parseFloat(valor_veiculo)){
        valor = parseFloat(valor_veiculo);
        car = veiculo
    }
});

// Printando.
console.log(`${car.modelo} é o carro mais barato, valendo: ${valor} reias.`);
