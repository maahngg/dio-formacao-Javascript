
function escreverMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarMaiorIdade(idade) {
    if (idade >= 18){
        console.log(escreverMeuNome('Netero') + ' e sou maior de idade');
    } else {
        console.log(escreverMeuNome('Killua') + ' e sou menor de idade');
    }
}
verificarMaiorIdade(16);
