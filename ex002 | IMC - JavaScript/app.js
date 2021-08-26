var dados_json = require('./pessoas.json')

let list_pessoas = dados_json.pessoas

let abaixoPeso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 18.5;
}).map((pessoa) => {  return pessoa.nome;  });
let pesoNormal = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 18.5 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 25;
}).map((pessoa) => {  return pessoa.nome;  });
let sobrepeso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 25 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 30;
}).map((pessoa) => {  return pessoa.nome;  });
let obesoGrauI = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 30 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 35;
}).map((pessoa) => {  return pessoa.nome;  });
let obesoGrauII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 35 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 40;
}).map((pessoa) => {  return pessoa.nome;  });
let obesoGrauIII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 40;
}).map((pessoa) => {  return pessoa.nome });

console.log(abaixoPeso.length != 0 ? `Abaixo do Peso: ${abaixoPeso}\n` : "Não há Abaixo do Peso.\n");
console.log(sobrepeso.length != 0 ? `Normal: ${sobrepeso}\n` : "Não há Normais.\n");
console.log(pesoNormal.length != 0 ? `Sobrepeso: ${pesoNormal}\n` : "Não há Sobrepesos.\n");
console.log(obesoGrauI.length != 0 ? `Obesidade Grau I: ${obesoGrauI}\n` : "Não há Obesidade Grau I.\n");
console.log(obesoGrauII.length != 0 ? `Obesidade Grau II: ${obesoGrauII}\n` : "Não há Obesidade Grau II.\n");
console.log(obesoGrauIII.length != 0 ? `Obesidade Grau III: ${obesoGrauIII}\n` : "Não há Obesidade Grau III.\n");