/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'etanol';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
let valorGasto;

if (tipoCombustivel === 'etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
}

console.log('O valor da viagem foi R$ ' + valorGasto.toFixed(2));