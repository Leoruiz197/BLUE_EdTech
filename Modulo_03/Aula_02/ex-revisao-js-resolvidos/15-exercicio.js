/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R\$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R\$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."
 */

let salario = +prompt("Digite o valor do salário do colaborador: ");

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

console.log(`O salario original é: R$  ${salario}`);
console.log(`O valor do percentual é: ${percentual}%`);

percentual = percentual / 100;
aumento = percentual * salario;
novoSalario = salario + aumento;

console.log(`Aumento foi de: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário tem o valor de: R$ ${novoSalario.toFixed(2)}`);