const mongoose = require('mongoose');
// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados
function Conn(){
    mongoose.connect("mongodb://localhost:27017/usuarios", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = Conn();