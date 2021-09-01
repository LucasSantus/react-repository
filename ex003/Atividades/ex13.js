const pessoas = require('./Pessoas.json');

let MaiorIdade = 0
pessoas.forEach(i => {
    if(MaiorIdade<i.idade){
        MaiorIdade=i.idade
    }
})

console.log(MaiorIdade)