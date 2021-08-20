// EXTRA CONCESSIONARIA v2 OBJ

const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

function Carro(modelo, marca, categoria, tipoCombustivel, ano) {
  this.modelo = modelo;
  this.marca = marca;
  this.categoria = categoria;
  this.tipoCombustivel = tipoCombustivel;
  this.ano = ano;
}

const carros = [];

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
  res.send(carros);
});

app.get("/carros/:id", (req, res) => {
  const id = req.params.id - 1;

  if (!carros[id]) {
    res.send("Veiculo não encontrado, tente novamente");
  }
  res.send(carros[id]);
});

app.post("/carros", (req, res) => {
  const modelo = req.body.modelo;
  const marca = req.body.marca;
  const categoria = req.body.categoria;
  const tipoCombustivel = req.body.tipoCombustivel;
  const ano = req.body.ano;

  const id = carros.length;
  const carro = new Carro(modelo, marca, categoria, tipoCombustivel, ano);

  carros[id] = carro;

  res.send(`Veiculo adicionado com sucesso: ${modelo}. 
    O ID do Veiculo é ${id + 1}`);
});

app.put("/carros/:id", (req, res) => {
  const id = req.params.id - 1;

  if (!carros[id]) {
    res.send("Veiculo não encontrado, tente novamente");
  }

  const modelo = req.body.modelo;
  const modeloAnterior = carros[id].modelo;
  const marca = req.body.marca;
  const categoria = req.body.categoria;
  const tipoCombustivel = req.body.tipoCombustivel;
  const ano = req.body.ano;

  carros[id].modelo = modelo;
  carros[id].marca = marca;
  carros[id].categoria = categoria;
  carros[id].tipoCombustivel = tipoCombustivel;
  carros[id].ano = ano;

  res.send(`Veiculo atualizado com sucesso,  veiculo anterior: ${modeloAnterior}, substituido por: ${modelo}`);
});

app.delete("/carros/:id", (req, res) => {
  const id = req.params.id - 1;

  if (!carros[id]) {
    res.send("Veiculo não encontrado, tente novamente");
  }
  delete carros[id];
  res.send("Veiculo excluido com sucesso.");
});

app.listen(port, function () {
  console.info(`App rodando na porta http://localhost:${port}/`);
});
