/*Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
Crie uma variável para receber o valor, com conversão para int
Para um número ser par, a divisão dele por 2 tem que dar resto 0
*/
const numero = +prompt("Digite o numero: ");

if (numero % 2 === 0) {
    console.log("Numero par");
} else {
    console.log("Numero impar");
}
