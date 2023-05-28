
function incrementarJuros(valor, percentualJuros) {
   const acrescimo  = (percentualJuros / 100) * valor;
    return valor + acrescimo;
}

function main() {
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
}

main();


