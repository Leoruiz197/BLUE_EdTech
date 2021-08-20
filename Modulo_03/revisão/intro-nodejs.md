# Introdução a nodejs e revisão de JS:

> Node.js não é uma linguagem de programação. Você programa utilizando a linguagem JavaScript, a mesma usada há décadas no client-side das aplicações web. Javascript é uma linguagem de scripting interpretada, embora seu uso com Node.js guarde semelhanças com linguagens compiladas, uma vez que máquina virtual V8 (veja mais adiante) faz etapas de pré-compilação e otimização antes do código entrar em operação. Ou seja, o Node.js interpreta o código JS para que ele possa ser compilado do lado do servidor, criando back-ends proderosos e versáteis.

## Passos importantes para iniciar um projeto em node.js

* Baixe o node.js versão LTS: https://nodejs.org/en/;
* Crie uma pasta para o projeto e abra essa pasta no Vs Code;
* Inicializar um projeto node com `npm init` no terminal, isso gera um arquivo package.json, agora toda vez que você baixar uma biblioteca no seu projeto ela vai ficar registrada nesse arquivo;
* Crie um arquvio .gitignore para o Git ignorar alguns arquivos que não precisam ser versionados. Dentro dele coloque esse template: https://github.com/codethi/template-gitignore-node/blob/main/.gitignore;
* Instalem a biblioteca nodemon para executar o servidor local como desenvolvedor, no terminal execute `npm i nodemon`;
* Altere os scripts do seu arquivo package.json para esses scripts: 
```
"scripts": {
    "start": "node index",
    "dev": "nodemon index"
},
```
* Baixe uma biblioteca para solicitar dados do usuário no console, no terminal digite: `npm i prompt-sync`;
* Extensões importantes:
    * Bracket Pair Colorizer 2
    * ESLint
    * Prettier - Code formatter
    * Thunder Client
    * markdownlint

* Agora crie um arquivo chamado index.js na raiz da pasta do seu projeto e let's code!

## Vamos codificar:

* No arquivo index.js crie o seguinte código:

```
const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");

console.log(`Olá, ${nome}, seja bem vindo o fantástico mundo do Node.js!`);
```

Para rodar o projeto, por enquanto, não iremos utilizar o nodemon, vamos utilizar direto o node, para isso abra seu terminal e digite: `node index.js`, esse index.js é o nome do seu arquivo, que não necessáriamente precisa ter a extensão `.js`.

* A declaração de uma variável em JS pode ser feita com três palavras reservadas:
    * **var**: Variável global e mutável
    * **let**: Variável local e mutável
    * **const**: Variável global e imutável

### Qual declaração mais iremos usar?

Para variáveis globais e que não irão ser alteradas durante o nosso código vamos usar sempre `const`, agora para variáveis que serão mutáveis, iremos utilizar `let`, o `var` é pouco usado, pois JS é fracamente tipada e usar `var` pode permitir que você insira qualquer dado em sua variável, o que pode quebrar seu código.

### O que é esse require?

Essa palavra reservada serve para importar bibliotecas baixadas via npm, é importante dizer que você precisa ter a pasta node_modules no seu projeto para que o JS consiga importar a biblioteca.

### O que é o console.log?

Essa função serve para mostra alguma informação no console em forma de log, temos outras formas de mostrar dados no console, você pode se aventurar em outras formas nessa documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Console. Mais pra frente iremos ver outros métodos do objeto console.

### Template String:

Você deve ter percebido que dentro desse `console.log()` existe um texto um pouco estranho: 
```
`Olá, ${nome}, seja bem vindo o fantástico mundo do Node.js!`
```
Essa string envolta em crases sinaliza para o JS que essa é uma template string e dentro dela podemos manipular e mostrar dados, concatenando eles sem o operador `+`, para essa concatenação basta utilizar o `${variável}`. Essa é a melhor e mais moderna prática para trabalharmos com concatenação de strings. 

## Condicionais em JS

A sintaxe em JavaScript para condicionais é:
```
if (13 > 15){
    console.log('Sim')
} else {
    console.log('Não')
}
```

Caso queiramos utilizar mais de uma condicional no mesmo `if` devemos fazer dessa forma:

```
if (13 > 15){
    console.log('Sim')
} else if (23 < 45) {
    console.log('Sim')
} else {
    console.log('Não para as duas perguntas acima')
}
```

### Operadores E, OU

* O operador `E` em JS é `&&`
* O operador `OU` em JS é `||` (pipe, pipe) 

Se você quiser ver a lista completa de operadores em JS, basta acessar essa documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

## Projeto 01 - Detetive

Vamos exercicitar o que vimos até agora com o famoso projeto do detetive:

Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    1. "Telefonou para a vítima?"
    2. "Esteve no local do crime?"
    3. "Mora perto da vítima?"
    4. "Devia para a vítima?"
    5. "Já trabalhou com a vítima?" 

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

Resolução: 

```
console.log(
    "Olá, aconteceu um crime nessa cidade, a Carla foi assassinada brutalmente, eu estou encarregado de investigar esse crime, por isso preciso te fazer algumas perguntas... Vamos lá!",
);

const pergunta1 = prompt("Você telefonou para a vítima? [S/N] ");
const pergunta2 = prompt("Você esteve no local do crime? [S/N] ");
const pergunta3 = prompt("Você mora perto da vítima? [S/N] ");
const pergunta4 = prompt("Você devia para a vítima? [S/N] ");
const pergunta5 = prompt("Você já trabalhou com a vítima? [S/N] ");

let cont = 0;

if (pergunta1 === "S" || pergunta1 === "s") {
    cont++;
}
if (pergunta2 === "S" || pergunta2 === "s") {
    cont++;
}
if (pergunta3 === "S" || pergunta3 === "s") {
    cont++;
}
if (pergunta4 === "S" || pergunta4 === "s") {
    cont++;
}
if (pergunta5 === "S" || pergunta5 === "s") {
    cont++;
}

console.log(cont);

if (cont === 2) {
    console.log("Você é suspeito do crime!");
} else if (cont === 3 || cont === 4) {
    console.log("Você é cúmplice do crime!");
} else if (cont === 5) {
    console.log("Você é o assassino!");
} else {
    console.log("Você é inocente de todas as acusações!");
}
```

## Array em JS

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

Criando um Array
```
var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2
```

Acessar um item (index) do Array
```
var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana
```

Iterar um Array

```
frutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1
```

Adicionar um item ao final do Array

```
var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
```
Remover um item do final do Array
```
var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
```
Remover do início do Array
```
var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];
```
Adicionar ao início do Array
```
var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];
```
Procurar o índice de um item na Array
```
frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1
```
Remover um item pela posição do índice
```
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
```
Remover itens de uma posição de índice
```
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']
```
Copiar um Array
```
var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
```

Para mais detalhes sobre Arrays, acesse: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

## Estruturas de repetição

As principais estruturas de repetição em JavaScript são:

### for:

Um laço `for` é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:

```
for (let passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}
```
### do...while

A instrução `do...while` repetirá até que a condição especificada seja falsa.

```
do {
  i += 1;
  console.log(i);
} while (i < 5);
```
### while
Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while: 

```
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

### for...in e for...of

O exemplo a seguir mostra a diferença entre o for...of e o for...in. Enquanto o for...in interage com o nome das propriedades, o for...of interage com o valor das propriedades.
```
let arr = [3, 5, 7];

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
};

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
};
```

### forEach

O método `forEach()` executa uma dada função em cada elemento de um array.

Sintaxe:

```
arr.forEach( callback(currentValue , index , array), thisArg );
```

Parâmetros
* `callback`
    Função para executar em cada elemento, recebendo três argumentos:
    * `currentValue`
        O valor atual do elemento sendo processado no array.
    * `index` (Opcional)
    O índice do elemento atual sendo processado no array.
    * `array` (Opcional)
    O array que forEach() está sendo aplicado.
* `thisArg` (Opcional)
    Opcional. Valor a ser usado como this quando executar callback.

## Arrow Function

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression). Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). Serve principalmente para funções anonimas, a sintaze é bem simples: `() => {}`

Exemplo de uso:

```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.forEach((material) => {
    console.log(meterial)
})
```

É uma excelente prática utilizar Arrow Functions em seus códigos!
Para mais detalhes acesse a doc: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Objetos em JS

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são.

Sintaxe: 

```

const pessoa = {
    nome: "Thiago",
    idade: 27,
    genero: "Masculino",
};

pessoa.escolaridade = "Pós-graduado";

delete pessoa.escolaridade;

pessoa.interesses = ["Futebol", "Cartas", "Futvolei", "Programação"];

pessoa.bio = function () {
    return `Meu nome é ${this.nome}, tenho ${this.idade}, sou do gênero ${this.genero} e gosto de ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]} e ${this.interesses[3]}.`;
};

console.log(pessoa.bio());

```



## Utilizar ou não ponto e virgula (;)?

É uma boa prática utilziar sempre o `;` em códigos JS, principalmente quando estamos desenvolvendo um back-end com essa linguagem, pois vão existir situações que nosso código não irá compilar sem o `;`, então para evitar erros futuros, SEMPRE insira o `;`no fim de suas linhas de código.