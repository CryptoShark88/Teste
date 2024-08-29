let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function botaoClicado() {
    console.log ('O Botão foi clicado')
}

// Se o botão alert for clicado irá mostar uma mensagen
function exibirAlerta() {
    alert ('Eu amo Js')
}
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite um nome de uma cidade que você gosta muito')
    alert (`Estive em ${nomeDaCidade} e pensei em você`)
}
// Ao clicar no botão soma irá pedir dois números para somar

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}