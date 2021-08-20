const prompt = require('prompt-sync')();
const lista = []
do {
    let num = +prompt('Número: ');
    const exist = lista.find(elem => elem == num);
    if(exist == undefined) {
        lista.push(num)
    };
    var resp = prompt('Deseja continuar? [S/N] ').toUpperCase()[0];
} while (resp == 'S');
console.log(lista)