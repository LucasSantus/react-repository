const json = require("./pessoas.json")

json.pessoas.forEach(pessoa => {
    let IMC = (pessoa.peso / (pessoa.altura * pessoa.altura))
    console.log(`${pessoa.nome}\nIMC: ${IMC}\n`)
})
