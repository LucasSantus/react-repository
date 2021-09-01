const pessoas = require('./Pessoas.json');

let MaisNova = 1000000
pessoas.forEach(i => {

    if(MaisNova>i.idade){
        MaisNova=i.idade
    }
})

console.log(MaisNova)