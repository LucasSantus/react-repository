const pessoas = require('./Pessoas.json');

let Peso80 = pessoas.filter((pessoa) => {
    return pessoa.peso > 80;
})

console.log(Peso80.length)
