const pessoas = require('./Pessoas.json');


let MaiorAltura = 0
pessoas.forEach(i => {
    if(MaiorAltura<parseFloat(i.altura)){
        MaiorAltura=parseFloat(i.altura)
    }
})

console.log(MaiorAltura)