/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

numeroRandomico = Math.floor(Math.random() * 5);
//console.log(numeroRandomico);

usuario = +prompt("Digite um número entre 0 e 5: ");

console.log("PROCESSANDO...");

if (usuario === numeroRandomico) {
    console.log("Você acertou o número, parabéns");
} else if (usuario > 5) {
    console.log("Você escolheu um número maior que 5");
} else if (usuario > numeroRandomico) {
    console.log("Você chutou alto demais");
} else if (usuario < numeroRandomico) {
    console.log("Você chutou baixo demais");
}