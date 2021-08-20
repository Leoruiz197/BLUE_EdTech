// E os 10% do garçom?
// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// Defina uma variável para o valor da taxa de serviço que é de 10%;
// Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

const valorRefeicao = 42.54; // number
const valorTaxa = 10; // number

const resultado = valorRefeicao + valorRefeicao * (valorTaxa / 100); // number

console.log(`R$ ${resultado.toFixed(2)}`);
