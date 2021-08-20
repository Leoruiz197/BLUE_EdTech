/*Parte 1
Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/
let valor = prompt("Digite o valor: ");
if (valor > 0) {
    console.log("Valor positivo");
} else {
    console.log("Valor negativo");
}

/*
Parte 2
Agora implemente a funcionalidade de não aceitar o número 0, no input.
# Resposta Parte 1
*/

let valor = prompt("Digite o valor: ");
if (valor === 0) {
    console.log("Numero inválido");
} else if (valor > 0) {
    console.log("Valor positivo");
} else {
    console.log("Valor negativo");
}