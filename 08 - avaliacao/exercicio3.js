/*
    3) Faça um programa que calcule e imprima o salário a ser transferido para um
    funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira:

    Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional
    dos benefícios

    Para calcular o percentual de imposto segue as aliquotas:

        De R$ 0,00 a R$ 1100,00 = 5%
        De R$ 1100,01 a R$ 2500,00 = 10%
        Maior que R$ 2500,00 = 15%
*/

const { gets, print } = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const adicionalBeneficios = gets();


function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario <= 2500) {
        aliquota = 0.1;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

;
const valorImposto = calcularImposto(salarioBruto);
const valorTransferencia = salarioBruto - valorImposto + adicionalBeneficios;


print(valorTransferencia);
