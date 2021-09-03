const pessoas = require('./Pessoas.json');
let cont = 0 
dados = pessoas.filter((posicao, objeto) => {
    return objeto.nome == "Laura Eduarda da Cunha"
});
pessoas.forEach(i => {
    cont+=1
    if(i.nome=="Laura Eduarda da Cunha"){
        console.log(cont)
    }
})

