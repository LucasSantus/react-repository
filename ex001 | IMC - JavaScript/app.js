const dados_json = require("./pessoas.json")

dados_json.pessoas.forEach(pessoa => {
    let IMC = (pessoa.peso / (pessoa.altura * pessoa.altura))
    console.log(`${pessoa.nome}\nIMC: ${IMC}\n`)
})
