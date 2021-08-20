# Exercícios de JavaScript

> Essa lista tem o intuito de ajudar você a treinar os conteúdos de JavaScript, ela será separada em três partes, **de boas**, **meiota**, **mei treta**, não se preocupe, não estamos te avaliando, faça o máximo que conseguir, o importante é fazer, não esqueça de tirar as dúvidas com o professor e com os seus colegas, provavelmente você vai ter que pesquisar como fazer algumas coisas em JS, tente sempre pesquisar antes de perguntar, utilize a documentação do MDN para isso: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Bom trabalho a todos e todas <3

## De boas

1. Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"

2. Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

3. Faça um programa que mostre na tela uma letra de música que você gosta (Se você utilizar template string o console obedece a quebra de linha).

4. Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.Como primeiro passo, escreva um programa que produza a seguinte saída:
    ```
    ALUNO (A)  NOTA
    =========  ====
    ALINE      9.0
    MÁRIO      DEZ
    SÉRGIO     4.5
    SHIRLEY    7.0
    ```
5. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

6. Escreva um programa que receba dois valores digitados pelo usuário(Utilize o objeto Math para arredondar o calculo):
    * Quantidade de vida de um monstro (entre 10 e 50);
    * Valor do ataque do jogador por turno (entre 5 e 10);
    * Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
    * O jogador irá derrotar o monstro em 8 turnos.

7. E os 10% do garçom?
    * Defina uma variável para o valor de uma refeição que custou R$ 42,54;
    * Defina uma variável para o valor da taxa de serviço que é de 10%;
    * Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
8. Qual o valor do troco?
    * Defina uma variável para o valor de uma compra que custou R$100,98;
    * Defina uma variável para o valor que o cliente pagou R$150,00;
    * Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
9. Você está na flor da idade?
    * Defina uma variável para o valor do ano do nascimento;
    * Defina uma variável para o valor do ano atual;
    * Defina uma variável que calcula o valor final da idade da pessoa;
    * Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
10. Conversor de moedas: Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:
    * DOLAR
    * EURO
    * LIBRA ESTERLINA
    * DÓLAR CANADENSE
    * PESO ARGENTINO
    * PESO CHILENO

    Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99

## Meiota

11. Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar: 
    * Crie uma variável para receber o valor, com conversão para int
    * Para um número ser par, a divisão dele por 2 tem que dar resto 0

12. Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0, no prompt.

13. Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.

14. Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
    * Se a nota for menor que 6.0, deve exibir a nota F.
    * Se a nota for de 6.0 até 7.0, deve exibir a nota D.
    * Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
    * Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
    * Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

15. Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    * salários até R$ 280,00 (incluindo) : aumento de 20%

    * salários entre R\$ 280,00 e R$ 700,00 : aumento de 15%

    * salários entre R\$ 700,00 e R$ 1500,00 : aumento de 10%

    * salários de R$ 1500,00 em diante : aumento de 5%

    Após o aumento ser realizado, informe na tela:

    * o salário antes do reajuste;

    * o percentual de aumento aplicado;

    * o valor do aumento;

    * o novo salário, após o aumento.

16. Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.

17. Utilizando laço imprima a tabuada do 8 na tela.

18. Agora imprima todas as tabuadas do número 1 ao 10.

## Mei treta

19. Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) 
e mostre a área do terreno:

20. Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:

21. Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

22. Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.

    * Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;

    * Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

23. Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
    - Permitir que eu decida quantas rodadas iremos fazer;
    - Ler a minha escolha (Pedra, papel ou tesoura);
    - Decidir de forma aleatória a decisão do computador;
    - Mostrar quantas rodadas cada jogador ganhou;
    - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o
    programa.

24. Jogo de dados: Utilizando objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

    O programa tem que:

    - Perguntar quantas rodadas você quer fazer;
    - Perguntar quantos jogadores vão jogar;
    - Criar um objeto pra cada jogador com nome e número tirado;
    - Guarda todos os objetos em uma lista;
    - Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
    - Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. 