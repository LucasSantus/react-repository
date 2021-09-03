const pessoas = require('./Pessoas.json');

pessoas.forEach(i => {
    console.log(i.estado,i.cidade,i.endereco,i.numero,i.bairro)
})

