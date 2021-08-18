const nome = 'Calculadora da Blue aula 01';

function soma(num1, num2) {
  return num1 + num2;
};

function sub(a, b) {
  return a - b;
};

function multi(a, b) {
  return a * b;
};

function div(a, b) {
  return a / b;
};

//módulo - contem metodos, funcioes, regras, valdacoes - regra de negocio.

module.exports = {
  soma,
  sub,
  multi,
  div,
  nome
}