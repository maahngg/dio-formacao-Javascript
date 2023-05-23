/* 
    1) Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que, dada a quantidade de Km e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return this.gastoMedioPorKm * distanciaEmKm * precoCombustivel;
    }

}

const uno = new Carro('BMW', 'azul', 1 / 12);
console.log(uno.calcularGastoPercurso(70, 5));

const palio = new Carro('Fiat', 'preto', 1/10);
console.log(palio.calcularGastoPercurso(70, 5));
