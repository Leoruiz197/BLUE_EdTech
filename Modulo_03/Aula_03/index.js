//CRUD de lista

const express = require("express");
const app = express();

const port = 3000;

app.use(express.json()); // falar para as reqs do express trabalhar com json

const filmes = [
  "Capitão America: O primeiro vingador",
  "Capitã Marvel",
  "O incrivel Hulk",
  "Homem de Ferro",
  "Homem de Ferro 2",
];

// primeira rota, retorna apernas a msg hello, bluemer.
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

// rota dos filmes - primeira rota - listagem dos filme para exibir todos
app.get("/filmes", (req, res) => {
  res.send(filmes.filter(Boolean));
  console.log(filmes);
});

// rota do filme individual por id
app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  if (!filme) {
    res.send("Filme não Encontrado");
  }
  res.send(filme);
});

//rota de cadastro de um novo filme
app.post("/filmes", (req, res) => {
  const filme = req.body.filme; // harry potter
  const id = filmes.length;
  filmes.push(filme);

  res.send(`Filme adicionado com sucesso: ${filme}. 
  O ID do filme é ${id}`);
});

//rota de atualizacao de um filme
app.put("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = req.body.filme;
  const nomeAnterior = filmes[id];
  filmes[id] = filme;
  res.send(
    `Filme anterior: ${nomeAnterior}, atualizado com sucesso para: ${filme}.`
  );
});

//rota de remocao de um filme
app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];
  if (!filme) {
    res.send("Filme não Encontrado");
  }
  delete filmes[id];
  res.send("Filme excluido com sucesso");
});

//sugestao da galera SPLICE
app.delete("/filmesSplice/:id", (req, res) => {
  const id = req.params.id - 1;
  filmes.splice(id, 1);
  //delete filmes[id]
  res.send("Filme excluido com sucesso.");
});

//Definicao do listener passando a porta do servico
app.listen(port, function () {
  console.info(`App rodando na porta http://localhost:${port}/`);
});
