const pessoas = require('./Pessoas.json');

let Sangue = pessoas.filter((pessoa) => {
    return pessoa.tipo_sanguineo == "O+" ;
})

let TotalIdade = 0

Sangue.forEach(i => {
    
    TotalIdade += i.idade
    
})

console.log(TotalIdade/Sangue.length)