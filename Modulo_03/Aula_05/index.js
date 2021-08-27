const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const filmes = [
    "Duna",
    "A Chegada",
    "Gravidade",
];

//GET /home da nossa aplicação
app.get("/",(req,res)=>{
    res.send("<h1>Bem-vindos ao site Filmemania</h1>");
});

//GET /filmes, listando todos os filmes
app.get("/filmes",(req,res)=>{
    res.send(filmes);
});

//GET /filmes, exibindo apenas o id
app.get("/filmes/:id",(req,res)=>{
    const id = req.params.id -1;
    const filme = filmes[id];
    res.send(filme);
});

//Create - POST
app.post("/filmes",(req,res)=>{
    const filme = req.body.filme;
    const id = filmes.length;

    filmes.push(filme);
    console.log(filmes);

    res.send(`Filme criado com sucesso. O filme é ${filme} e o ID: ${id}.`);
});

//Update - PUT
app.put("/filmes/:id",(req,res)=>{
    const filme = req.body.filme;
    const id = req.params.id -1;

    const filmeAntigo = filmes[id];
    filmes[id] = filme;

    res.send(`Filme atualizado com sucesso! ${filmeAntigo} foi substituído por ${filme}.`);
});

//Delete
app.delete("/filmes/:id",(req,res)=>{
    const id = req.params.id -1;
    delete filmes[id];

    res.send("Filme deletado com sucesso!");
});

app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}/`);
});