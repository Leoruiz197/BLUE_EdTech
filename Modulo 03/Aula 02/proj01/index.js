const express = require('express');
const app = express();

const port = 3000;

const filmes = [
    'Matrix', //0
    'Vingadores',//1
    'Velozes e Furiosos' //2
];

//GET / home
app.get('/',(req, res) => {
    res.send("Bem vindos ao site, lista de filmes");
});

//GET /filmes, listando todos
app.get('/filmes',(req, res) => {
    res.send(filmes);
});

//GET /filmes, exibindo apenas o id
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];
    res.send(filme);
});


app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});
