    /*Faça um programa para calcular o valor gasto de combustível em uma viagem.

    Você terá 3 variáveis. Sendo elas:
        1 - Preço do combustível;
        2 - Gasto médio de combustível do carro por KM;
        3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.
    */


const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm/kmPorLitros;
const totalGasto = precoCombustivel * litrosConsumidos;

console.log(totalGasto.toFixed(2));
