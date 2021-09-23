// Função para cronometrar.
function cronometro(tempo, modo){
    let tempoInicial = 0;
    const f = setInterval(()=>{
        switch(modo){
            // modo progressivo
            case 1:
                if(tempoInicial <= tempo){
                    console.log(tempoInicial);
                    tempoInicial++;
                }
                else clearInterval(f);
                break;
                
            // modo regressivo
            case 2:
                if(tempoInicial <= tempo){
                    console.log(tempo);
                    tempo--;
                }
                else clearInterval(f);
                break;
        }
    }, 1000);
}

// Chamando função cronometro com o tempo e modo.
cronometro(2000, 2);