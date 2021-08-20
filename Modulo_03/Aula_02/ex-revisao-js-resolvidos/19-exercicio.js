/*Exercicios:
# Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) 
e mostre a área do terreno:
*/
function area(largura, comprimento) {
    area = largura * comprimento;
    console.log(`A área de um terreno ${largura} x ${comprimento} é de ${area}m²`);
}

let largura = +prompt("Largura: ");
let comprimento = +prompt("Comprimento: ");
area(largura, comprimento);

// utilizando arrow function()
/*
area=(largura, comprimento) =>{
    area = largura * comprimento;
    console.log(`A área de um terreno ${largura} x ${comprimento} é de ${area}m²`);
}

let largura = +prompt("Largura: ");
let comprimento = +prompt("Comprimento: ");
area(largura, comprimento);