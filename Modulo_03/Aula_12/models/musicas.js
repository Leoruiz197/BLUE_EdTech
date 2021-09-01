// importa o mongoose
const mongoose = require('mongoose');
// Schema -->  é uma estrutura de dados de documento (ou forma do documento) que é aplicada por meio da camada de aplicativo.
// Model --> são construtores que pegam um schema e criam uma instância de um documento equivalente a registros em um banco de dados relacional.
// Collections (Coleção) --> são equivalentes a tabelas em bancos de dados relacionais. Eles podem conter vários documentos JSON.

const musicaModel = new mongoose.Schema({
  nome: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  capa: { type: String },
  letra: { type: String },
  duracao: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now }
})

const Musica = mongoose.model("musicas", musicaModel);

module.exports = Musica;