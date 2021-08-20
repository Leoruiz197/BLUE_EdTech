/*Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.
 */

let numero1 = +prompt("Digite o primeiro numero: ");
let numero2 = +prompt("Digite o segundo numero: ");

if (numero1 > numero2) {
    console.log(`O numero ${num1} é o maior`);
} else if (numero1 === numero2) {
    console.log(`Os numeros são iguais!`);
} else {
    console.log(`O numero ${numero2} é o maior`);
}
