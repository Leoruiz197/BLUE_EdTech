/*Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.
*/
const nota = +prompt("Qual a nota [0.0 - 10.00]: ");

if (nota >= 0 && nota <= 10) {
    if (nota < 6) {
        console.log(`Sua nota é ${nota} e seu conceito foi F`);
    } else if (nota < 7) {
        console.log(`Sua nota é ${nota} e seu conceito foi D`);
    } else if (nota < 8) {
        console.log(`Sua nota é ${nota} e seu conceito foi C`);
    } else if (nota < 9) {
        console.log(`Sua nota é ${nota} e seu conceito foi B`);
    } else {
        console.log(`Sua nota é ${nota} e seu conceito foi A`);
    }
} else {
    console.log("Nota inválida!");
}

console.log("Pronto");
