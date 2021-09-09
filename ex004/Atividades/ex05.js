// Importando feriados.
const feriados = require('../Feriados.json');
const redline = require('readline');

// criando interface input.
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Validando data.
rl.question("Insira o Nome do Feriado: ", resposta =>{
    is_valid = false;

    for(feriado of feriados){
        if(resposta == feriado.name) is_valid = true
    }

    // Printando.
    is_valid ? console.log(`Feriado, Data: ${feriado.date}`) : console.log(`Não tem feriados!`);

    // Fechando interface input.
    rl.close();
});
