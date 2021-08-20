function ImprimirTabuada(n) {
    for (let i = 1; i <= 10; i++) {
        const linha = n + "*" + "=" + n * i;
        console.log(linha);
    }
}

for (let i = 1; i < 10; i++) {
    ImprimirTabuada(i);
    console.log("");
}