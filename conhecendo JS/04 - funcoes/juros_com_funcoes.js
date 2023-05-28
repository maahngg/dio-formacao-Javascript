
const precoEtiqueta = 100;
const formaPagamento = 1;

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

(function () {
    switch (formaPagamento) {
        case 1: {
            console.log(aplicarDesconto(precoEtiqueta, 10));
            break;
        }
        case 2: {
            console.log(aplicarDesconto(precoEtiqueta, 15));
            break;
        }
        case 3: {
            console.log(precoEtiqueta);
            break;
        }
        default: {
            console.log(aplicarJuros(precoEtiqueta, 10));
            break
        }
    }
})();