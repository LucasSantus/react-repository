// Função para mudar cor.
function muda(cor){
    if(cor === "verde") return "amarelo";
    else if(cor === "amarelo") return "vermelho";
    else return "verde";
}

// Declarando variavel cor.
let cor = "";

// Setando intervalos.
setInterval(() => {
    cor = muda(cor);
    console.log(cor);
}, 3000);