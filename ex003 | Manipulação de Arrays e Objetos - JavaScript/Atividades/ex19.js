const pessoas = require('./Pessoas.json');

pessoas.forEach(i => {
    if(i.nome == "Raul Nathan Oliver Dias"){
        console.log(i.estado,i.cidade,i.endereco,i.numero,i.bairro)
    }
    
})
