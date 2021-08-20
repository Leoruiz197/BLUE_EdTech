// Conversor de moedas
// Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:

// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO

// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
// Mostrar o resultado no formato U$9999.99

// Resolução com valor de real para dolar:

const prompt = require("prompt-sync")();

const valorEmReal = +prompt("Valor em R$: ");
const valorEmDolar = valorEmReal / 5.75;

console.log(`R$${valorEmReal.toFixed(2)} = U$${valorEmDolar.toFixed(2)}`);
