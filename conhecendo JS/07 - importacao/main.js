/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado.
*/


const { print, gets } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);

