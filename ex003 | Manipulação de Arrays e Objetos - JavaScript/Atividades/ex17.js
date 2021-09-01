const pessoas = require('./Pessoas.json');
let cont = 0 

pessoas.forEach(i => {
    cont+=1
    if(i.nome=="Laura Eduarda da Cunha"){
        console.log(cont)
    }
})

