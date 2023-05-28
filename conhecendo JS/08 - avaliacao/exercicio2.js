/*
    2) Faça um programa que receba N números e seus respectivos valores.
    Imprima o maior número par e o menor número ímpar.
*/

const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < quantidadeNumeros; i++) {

    const numero = gets();

    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }

}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número ímpar: ' + menorNumeroImpar);