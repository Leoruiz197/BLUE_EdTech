// Qual o valor do troco?
// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

const valorTotal = 100.98; // number
const valorPago = 150.00; // number

const resultado = valorPago - valorTotal; // number

console.log(`R$${resultado.toFixed(2)}`);
