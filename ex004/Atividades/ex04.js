// Importando feriados.
const feriados = require('../Feriados.json');
const redline = require('readline');

function pesquisar(){
    // criando interface input.
    const rl = redline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Validando data.
    rl.question("Insira a Data: ", resposta =>{
        is_valid = false;

        for(feriado of feriados){
            if(resposta == feriado.date) is_valid = true
        }

        // Printando.
        is_valid ? console.log(`Feriado, Nome: ${feriado.name}`) : console.log(`Não tem feriados!`);

        // Fechando interface input.
        rl.close();
    });
}

pesquisar();