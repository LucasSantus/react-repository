const pessoas = require('./Pessoas.json');

let MenorAltura = 1000000
pessoas.forEach(i => {

    if(MenorAltura>parseFloat(i.altura)){
        MenorAltura=parseFloat(i.altura)
    }
})

console.log(MenorAltura)