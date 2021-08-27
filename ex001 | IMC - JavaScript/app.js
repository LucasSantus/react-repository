const dados_json = require("./pessoas.json")

for(let pessoa of dados_json.pessoas) console.log(`${pessoa.nome}\nIMC: ${(pessoa.peso / (pessoa.altura * pessoa.altura))}\n`)