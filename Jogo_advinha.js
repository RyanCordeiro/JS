
var logo = ('********************\n*Jogo da Advinhação*\n********************');
console.log(logo);

var Dificuldade = prompt("Selecione a dificuldade:\nFácil(F) Médio(M) Difícil(D)");

function mainGame() {
    var tentativas = 0;
    var jogada = 1;
    var pts = 1000;
    var pontuaçaoAtual = 0;
    // pontuação
    function points() {

        var MaxP = 1000;
    }
    // é um numero ?


    function isNumber() {
        if (isNaN(resposta)) {
            console.log('Digita um NUMERO')
            alert("Presta atenção, só numeros")
            jogada -= 1;

        }
    }
    //dificuldade
    if (Dificuldade == 'F') {
        tentativas = 20;
    }
    if (Dificuldade == 'M') {
        tentativas = 10;
    }
    if (Dificuldade == 'D') {
        tentativas = 5;
    }
    var resposta = prompt("jogada: " + jogada + " de " + tentativas + ' Digite um numero')

    //maior ou menor

    var Morm = '';

    function Mm() {
        if (resposta >= 100) {
            Morm = 'menor';
        }
        if (resposta < NR) {
            Morm = 'maior';
        }
        if (resposta > NR) {
            Morm = 'menor';
        }
    }
    // função que verifica se o num é maior que 100 


    //resposta




    while (resposta !== NR) {
        if (jogada >= tentativas) {
            console.log('Que pena, você perdeu!\nNumero secreto: ' + NR + '\nFim de jogo.')
            break;
        }
        if (resposta == NR || resposta == "ryan") {
            console.log('Parabens, Você acertou em: ' + jogada + ' tentativas\n' + 'Sua pontuação foi: ' + pts + ' pontos\nFim do jogo')
            break;

        } else if (resposta !== NR && resposta <= 101 && resposta >= -1) {
            isNumber();
            Mm();
            points();
            jogada += 1;

            pontuaçaoAtual = Math.abs((resposta - NR) / 2);
            pts -= pontuaçaoAtual;

            console.log('Você errou! Tente novamente\nDigite um numero ' + Morm + ' \nJogada: ' + jogada + ' de ' + tentativas + "\nDigite um numero");
            var resposta = prompt('Digite um numero:')

        } else if (resposta > 100 || resposta < 0) {

            console.log('resposta invalida Tente novamente')
            var resposta = prompt('Digite um numero:')
        }
    }
    if (resposta > 100 || resposta < 0) {

        console.log('Valor invalido. Digite um numero entre 0 e 100!')
        var resposta = prompt('Digite um numero:')
    }
    


    // testes
    console.log(Dificuldade)
    console.log(resposta)
    console.log(jogada)
    console.log(tentativas)
}



if (Dificuldade == 'F' || Dificuldade == 'M' || Dificuldade == 'D') {
    mainGame()
} else {
    while (Dificuldade !== 'F' || Dificuldade !== 'M' || Dificuldade !== 'D') {
        console.log('Valor Invalido, Digite novamente!')
        var Dificuldade = prompt("Selecione a dificuldade:\nFácil(F) Médio(M) Difícil(D)");
        if (Dificuldade == 'F' || Dificuldade == 'M' || Dificuldade == 'D') {
            mainGame()
            break;
        }
    }
};
