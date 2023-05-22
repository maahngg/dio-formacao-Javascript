/* 
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a 
    escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código - Condição de pagamento:
    1 - À vista Débito: recebe 10% de desconto;
    2 - À vista PIX ou dinheiro: recebe 15% de desconto;
    3 - Em 2x, preço padrão sem juros;
    4 - Acima de 2x, preço padrão mais juros de 10%
*/

const precoEtiqueta = 100;
const formaPagamento = 4;

switch (formaPagamento) {
    case 1: {
        console.log(precoEtiqueta * 0.9);
        break;
    }
    case 2: {
        console.log(precoEtiqueta * 0.85);
        break;
    }
    case 3: {
        console.log(precoEtiqueta);
        break;
    }
    default: {
        console.log(precoEtiqueta + (precoEtiqueta * 0.1));
        break
    }
}