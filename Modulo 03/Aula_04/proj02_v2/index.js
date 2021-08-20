const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const games = [
  "GTA",
  "Ragnarok",
  "Tibia",
  "Minecraft",
  "The Sims",
  "Mortal kombat",
  "SuperMarioWorld",
  "Bomberman",
  "Just Dance",
  "Call of Duty",
];

const msgInicio = [
  "Bem vindos",
  "Ola amigos, bem vindo ao servidor",
  "Servidor de jogos",
  "Este é meu servidor",
];

//funcao de numero randomico
function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num) {
  return msgInicio[num];
}

const msg = "teste";
//GET / home
app.get("/", (req, res) => {
  res.send(`<h1>${frase(randomMinMax(0, msgInicio.length))}</h1>`);
});

games.forEach(function (item, indice) {
  console.log(item, indice);
});


//CRUD GAMES
app.get("/games", (req, res) => {
  res.send(games);
});

app.get("/games/:id", (req, res) => {
  const id = req.params.id;
  const game = games[id - 1];
  if (id > games.length || id < 1) {
    res.send("ID invalido, tente novamente");
  } else {
    res.send(game);
  }
});

app.post("/games", (req, res) => {
  const game = req.body.game;
  const id = games.length;
  games.push(game);

  res.send(`Game cadastrado com sucesso: ${game}, O ID do game: ${id}`);
});

app.put("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const game = req.body.game;
  const gameAntigo = games[id];

  if (!games[id]) {
    res.send("ID nao encontrado, tente novamente");
  }

  games[id] = game;
  res.send(`Game atualizado com sucesso, game anterior: ${gameAntigo}, novo game: ${game}`);
});

app.delete("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const gameAntigo = games[id];

  if (!games[id]) {
    res.send("ID nao encontrado, tente novamente");
  }

  delete games[id];
  res.send("Game excluido com sucesso");
});

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
