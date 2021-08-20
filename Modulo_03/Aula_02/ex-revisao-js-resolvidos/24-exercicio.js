const prompt = require("prompt-sync")({ sigint: true });

let rodadas = prompt("Digite a quantidade de rodadas: ");
let qtsJogadores = prompt("Digite a quantidade de jogadores: ");
let vencedores = [];

for (let c = 0; c < rodadas; c++) {
    let jogos = [];
    for (let i = 0; i < qtsJogadores; i++) {
        let jogo = {
            nome: "Jogador" + (i + 1),
            numero: Math.floor(Math.random() * 6 + 1),
        };
        jogos.push(jogo);

        jogos.sort((a, b) => {
            if (b.numero < a.numero) {
                return -1;
            } else {
                return true;
            }
        });
    }
    console.log("");
    console.log(`${c + 1}° Rodada: `);
    for (let j in jogos) {
        console.log(`${parseInt(j) + 1}° Lugar: ${jogos[j].nome} tirou ${jogos[j].numero}`);
        let entries = Object.entries(jogos[j]);
        if (j === 0) {
            const vencedor = entries[0][1];
            vencedores.push(vencedor);
        }
    }
}

/* Conta quantos valores repetidos existem em um array e devolve um objeto com a chave sendo o nome do valor repetido e o valor a quantidade de vezes que se repetiu */
function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
}

let arrVencedores = Object.entries(count(vencedores));
for (let vencedor in arrVencedores) {
    if (vencedor === 0) {
        console.log("");
        console.log(`O grande vencedor foi o ${arrVencedores[0][0]} ganhando ${arrVencedores[0][1]} rodadas!`);
    }
}










