// importar o express
const express = require('express');
// importar o moongose 
const mongoose = require('mongoose');

// importa o modulo usuario
const usuarioModel = require('./models/usuario');

// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados


mongoose.connect("mongodb://localhost:27017/usuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Usuario = mongoose.model("usuario", usuarioModel);

const usuario2 = new Usuario({
  nome: "Leo",
  sobrenome: "Ruiz",
  cpf: "0000000000",
  idade: new Date(),
  senha: "1234567"
})

usuario2.save()
.then(() => {
  console.log('Filme salvo!');
})
.catch((err) => {
  console.error(err);
})




const app = express();
const port = 3000;

app.get("/", (req, res)=> {
  res.send('Hello Bluemers');
})

app.listen(port, ()=> {
  console.info('App rodando na porta 3000');
})