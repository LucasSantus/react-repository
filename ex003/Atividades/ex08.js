// Importando pessoas.
const pessoas = require('../pessoas.json');

// Recuperando dados.
let dados = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})

// Printando.
dados > 0 ? console.log(`Contém ${dados.length} pessoas com O+`) : console.log(`Não Contém pessoas com O+`);