var dados_json = require('./pessoas.json')

let list_pessoas = dados_json.pessoas

let abaixo_peso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 18.5;
}).map((pessoa) => {  return pessoa.nome; });

let normal_peso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 18.5 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 25;
}).map((pessoa) => {  
    return pessoa.nome; 
});

let sobrepeso = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 25 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 30;
}).map((pessoa) => {  
    return pessoa.nome; 
});

let obeso_grauI = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 30 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 35;
}).map((pessoa) => {  
    return pessoa.nome; 
});

let obeso_grauII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 35 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 40;
}).map((pessoa) => {  
    return pessoa.nome; 
});

let obeso_grauIII = list_pessoas.filter((pessoa) => {
    return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 40;
}).map((pessoa) => {  
    return pessoa.nome; 
});

console.log(abaixo_peso.length ? `Abaixo do Peso: ${abaixo_peso}\n` : "Não há Abaixo do Peso.\n");
console.log(sobrepeso.length ? `Normal: ${sobrepeso}\n` : "Não há Normais.\n");
console.log(normal_peso.length ? `Sobrepeso: ${normal_peso}\n` : "Não há Sobrepesos.\n");
console.log(obeso_grauI.length ? `Obesidade Grau I: ${obeso_grauI}\n` : "Não há Obesidade Grau I.\n");
console.log(obeso_grauII.length ? `Obesidade Grau II: ${obeso_grauII}\n` : "Não há Obesidade Grau II.\n");
console.log(obeso_grauIII.length ? `Obesidade Grau III: ${obeso_grauIII}\n` : "Não há Obesidade Grau III.\n");