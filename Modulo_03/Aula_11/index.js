// importar o express
const express = require('express');
// importar o moongose 
const mongoose = require('mongoose');

// importa o modulo usuario
const Usuario = require('./models/usuario');
const app = express();

// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados
mongoose.connect("mongodb://localhost:27017/usuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Monta uma estrutura de dados para cadastrar o novo usuario

// const usuario2 = new Usuario({
//   nome: "Leo",
//   sobrenome: "Ruiz",
//   cpf: "0000000000",
//   idade: "1995-03-08",
//   senha: "1234567"
// })


// Cadastra um novo usuario

// usuario2.save()
// .then(() => {
//   console.log('Filme salvo!');
// })
// .catch((err) => {
//   console.error(err);
// })




// lista todos os usuarios no mongo
app.get('/usuarios', (req, res) => {
  Usuario.find({})
  .then((usuarios) => {
    console.log(usuarios)
    res.send(usuarios);
  })
  .catch((err) => {
    console.log(err)
  })
})







// Lista usuario por Id
Usuario.find({ _id: "612d6ec6b98748264841f58f" })
.then((usuarios) => {
  console.log('RETORNA POR ID', usuarios)
})
.catch((err) => {
  console.log(err)
})






// encontrar um elemento por id e excluir do banco
Usuario.findByIdAndDelete("612d6dbb708abd1e9c8e27c6")
.then(() => {
  console.log(`usuario excluido`)
})
.catch((err) => {
  console.log(err);
})



const port = 3000;


app.listen(port, ()=> {
  console.info('App rodando na porta 3000');
})