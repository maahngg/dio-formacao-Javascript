/*
    1) Faça um algorítimo que, dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a
    sua média e a classificação conforme a tabela abaixo.

    Média = (Somatório(notas)) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre.
*/

const nota1 = 7.1;
const nota2 = 7;
const nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;
console.log('\nA média do aluno foi ' + media);

if (media > 7) {
    console.log('Passou!');
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovação');
}