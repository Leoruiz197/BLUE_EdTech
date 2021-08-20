//Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, 
//retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:

voto = ano => {
    const atual = new Date();
    const anoAtual = atual.getFullYear();
    const idade = anoAtual - nascimento;

    if (idade < 16) {
        return console.log(`Com ${idade} anos o voto é NEGADO`);
    } else if (idade >= 16 || idade < 65) {
        return console.log(`Com ${idade} anos o voto é OBRIGATÓRIO`);
    } else {
        return console.log(`Com ${idade} anos o voto é OPCIONAL`);
    }
};

nascimento = prompt("Digite seu ano de nascimento: ");
console.log(voto(nascimento));

