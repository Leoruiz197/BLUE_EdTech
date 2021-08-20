// Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

const prompt = require("prompt-sync")();

const nomeCompleto = prompt("Digite seu nome completo: ");
const endereco = prompt("Digite seu endereço: ");
const telefone = prompt("Digite seu telefone: ");
const cep = prompt("Digite seu CEP: ");

console.log(`Nome Completo: ${nomeCompleto}`);
console.log(`Endereço: ${endereco}`);
console.log(`Telefone: ${telefone}`);
console.log(`CEP: ${cep}`);
