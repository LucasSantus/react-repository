const pessoas = require('./Pessoas.json');

let Sangue = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})
console.log(Sangue.length)