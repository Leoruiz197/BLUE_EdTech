const mongoose = require('mongoose');
// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados
function Conn(url,porta,banco){
    mongoose.connect(`mongodb://${url}:${porta}/${banco}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;