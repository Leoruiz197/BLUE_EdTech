// EXTRA CONCESSIONARIA v1 LISTA

const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const modelos = [];
const marcas = [];
const categorias = [];
const tipoCombustiveis = [];
const anos = [];


const msgInicio = [
    "Bem vindos, caros alunos",
    "Ola amigos, bem vindo ao servidor da BLUE",
    "Servidor de javascript BLUE",
    "Este é um servidor BLUE",
];

function random() {
    return Math.floor(Math.random() * msgInicio.length);
  }
  console.log(random());

app.get("/", (req, res) => {
    res.send(msgInicio[random()]);
});

app.get("/carros", (req, res) => {
    res.send(`
    Modelos: ${modelos},
    Marcas: ${marcas},
    Categorias: ${categorias},
    Combustivel: ${tipoCombustiveis},
    Ano: ${anos}`);
});

app.get("/carros/:id", (req, res) => {
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]){
        res.send("Veiculo não encontrado, tente novamente");
    }
    res.send(`
    Modelo: ${modelos[id]},
    Marca: ${marcas[id]},
    Categoria: ${categorias[id]},
    Combustivel: ${tipoCombustiveis[id]},
    Ano: ${anos[id]}`);
});

app.post('/carros', (req, res) => {
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoCombustivel = req.body.tipoCombustivel;
    const ano = req.body.ano;

    const id = modelos.length;

    modelos[id] = modelo;
    marcas[id] = marca;
    categorias[id] = categoria;
    tipoCombustiveis[id] = tipoCombustivel;
    anos[id] = ano;

    res.send(`Veiculo adicionado com sucesso: ${modelo}. 
    O ID do Veiculo é ${id+1}`)
  });

app.put("/carros/:id", (req, res) => {
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]){
        res.send("Veiculo não encontrado, tente novamente");
    }

    const modelo = req.body.modelo;
    const modeloAnterior = modelos[id];
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoCombustivel = req.body.tipoCombustivel;
    const ano = req.body.ano;

    modelos[id] = modelo;
    marcas[id] = marca;
    categorias[id] = categoria;
    tipoCombustiveis[id] = tipoCombustivel;
    anos[id] = ano;
    res.send(`Veiculo atualizado com sucesso,  veiculo anterior: ${modeloAnterior}, substituido por: ${modelo}`)
});

app.delete("/carros/:id", (req, res) => {
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]){
        res.send("Veiculo não encontrado, tente novamente");
    }

    delete modelos[id];
    delete marcas[id];
    delete categorias[id];
    delete tipoCombustiveis[id];
    delete anos[id];
    res.send("Veiculo excluido com sucesso.")
});

app.listen(port, function(){
    console.info(`App rodando na porta http://localhost:${port}/`);
});