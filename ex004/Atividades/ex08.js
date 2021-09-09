// // Importando veiculos.
// const veiculos = require('../Veiculos.json');

// // Declarando variaveis.
// let objeto = {
//     marca = "", media = 0.0, qtd_veiculos = 0,
// }

// // Separando marcas.
// let list_marcas = []
// veiculos.forEach(i => {
//     if(!list_marcas.includes(i.marca)){
//         list_marcas.push(i.marca);
//     }
// })

// list_marcas.forEach(marca => {
//     veiculos.forEach(veiculo => {
//         if(marca == veiculo.marca){
//             objeto.marca = veiculo.marca;
//             objeto.media = parseFloat(veiculo.valor.replace("R$ ", ""));
//             objeto.qtd_veiculos += 1;
//         }
//     });
// });

// // Printando.
// console.log(`${car.modelo} é o carro mais caro, valendo: ${valor} reias.`);