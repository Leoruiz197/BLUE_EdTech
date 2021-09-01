const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn("localhost",27017,"musicas");

const port = 3000;

const musica = require('./routers/musicas.routes');
app.use('/musicas',musica);

const filme = require('./routers/filmes.routes');
app.use('/filmes',filme);

app.listen(port, ()=> {
  console.info(`Servidor rodando na porta ${port}`);
})