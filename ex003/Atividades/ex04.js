// Importando pessoas.
const pessoas = require('../pessoas.json');

const dados = pessoas.reduce((soma, p) => {
    if (p.idade >= 20 && p.idade <= 45) return ++soma;
    else return soma;
}, 0);

// Printando.
dados > 0 ? console.log(`No momento, existem ${ dados } pessoas entre 20 e 45 anos.`) : console.log(`No momento, não existem pessoas entre 20 e 45 anos.`)