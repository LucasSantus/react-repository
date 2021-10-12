const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const produtos = require('./produtos.json');

app.use(express.json());

let verificador = 0;

class Produto{ 
    // Cadastrar Produto
    setProdutos(produto){
        var objProduto = {};

        fs.exists('produtos.json', function(exists){
            // Arquivo existe
            if(exists){
                fs.readFile('produtos.json', 'utf8', function readFileCallback(error, data){
                    if (error){
                        console.log(error);
                    } else {
                        objProduto = JSON.parse(data);
                        objProduto.forEach(p =>{
                            if(p.codigo === produto.codigo){
                                console.log("O código já existe na base de dados");
                                return verificador = 1;
                            };
                        });
            
                        if(verificador != 1){
                            objProduto.push(
                                {
                                    codigo: produto.codigo, 
                                    marca: produto.marca, 
                                    nome: produto.nome, 
                                    precoCusto: produto.precoCusto, 
                                    precoVenda: produto.precoVenda, 
                                    qtdEstoque: produto.qtdEstoque, 
                                    categoria: produto.categoria
                                }
                            );

                            var objJSON = JSON.stringify(objProduto); 
                            fs.writeFile('produtos.json', objJSON, function readFileCallback(error, data){
                                if (error){
                                    console.log(error);
                                };
                            });
                        }
                    }
                });
            } 
            // Arquivo não existe
            else {
                let objProduto = [
                    {
                        codigo: produto.codigo, 
                        marca: produto.marca, 
                        nome: produto.nome, 
                        precoCusto: produto.precoCusto, 
                        precoVenda: produto.precoVenda, 
                        qtdEstoque: produto.qtdEstoque, 
                        categoria: produto.categoria
                    }
                ]
                var objJSON = JSON.stringify(objProduto);
                fs.writeFile('produtos.json', objJSON, function readFileCallback(error, data){
                    if (error){
                        console.log(error);
                    };
                });
            }
        });
    }

    // Editar produto
    putProduto(produto){
        let idVerificacao = 1;
        let listObj = [];
    
        produtos.forEach(objProduto =>{
            if(objProduto.codigo == idVerificacao){
                objProduto = {
                    codigo: produto.codigo, 
                    marca: produto.marca, 
                    nome: produto.nome, 
                    precoCusto: produto.precoCusto, 
                    precoVenda: produto.precoVenda, 
                    qtdEstoque: produto.qtdEstoque, 
                    categoria: produto.categoria
                }
            }
            listObj.push(objProduto);
        });
    
        var objJSON = JSON.stringify(listObj);
            fs.writeFile('produtos.json', objJSON, function readFileCallback(err, data){
                if (err){
                    console.log(err);
                };
            });
        return console.log("Atualização realizada com sucesso!");
    }

    //  Filtrar produto por código
    getProdutos(){
        return produtos;
    }

    // Função marca
    getProdutoMarca(marca){
        let dados = produtos.filter(produto =>{
            return produto.marca === marca;
        });
        return dados;
    }

    // Filtrar produto por código
    getProdutoCodigo(codigo){
        let dado = produtos.find(produto =>{
            return produto.codigo === codigo;
        });
        return dado;
    }

    // Filtrar produto por nome
    getProdutoNome(nome){
        let dado = produtos.find(produto =>{
            return produto.nome === nome;
        });
        return dado;
    }
}

let newProduto = {
    codigo: 13,
    marca: "philco",
    nome: "Panela2",
    precoCusto: 4.5,
    precoVenda: 7.0,
    qtdEstoque: 6.0,
    categoria: "Panela2" 
}

let editProduto = {
    codigo:1,
    nome: "Shampoo",
    marca: "Seda",
    precoCusto: 4.85,
    precoVenda: 5.50,
    qtdEstoque: 7,
    categoria: "Limpeza"
}

product = new Produto()

// Rota para cadastrar produtos
app.get('/registrar/', (req, res) => {
    res.send(product.setProdutos(newProduto));
});

// Rota para editar produtos
app.get('/editar/', (req, res) => {
    res.send(product.putProduto(editProduto));
});

// Rota de filtragem dos produtos
app.get('/produtos/', (req, res) => {
    res.send(product.getProdutos());
});

// Rota de filtragem por marca
app.get('/produtos/marca/:marca/', (req, res) => {
    res.send(product.getProdutoMarca(req.params.marca));
});

// Rota de filtragem por código
app.get('/produtos/:codigo/', (req, res) => {
    res.send(product.getProdutoCodigo(parseInt(req.params.codigo)));
});

// Rota de filtragem por nome
app.get('/produtos/nome/:nome/', (req, res) => {
    res.send(product.getProdutoNome(req.params.nome));
});

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta [${port}]`);
});
