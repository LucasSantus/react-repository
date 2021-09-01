const pessoas = require('./Pessoas.json');

let Sangue = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})

let TotalAltura = 0

Sangue.forEach(i => {
    TotalAltura += parseFloat(i.altura)
})

console.log(TotalAltura/Sangue.length)