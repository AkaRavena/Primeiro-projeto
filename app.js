let listaNumeroTentativas = [];
let numeroTentativas = 1;
let dificuldade = 10;
let numeroAleatoio = gerarNumeroAleatorio();
exibirMensagemInicial()

function exibirTextoNaTela( campo , texto){
    let preencher = document.querySelector(campo);
    preencher.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela ("h1","Jogo do número secreto");
    exibirTextoNaTela ("p",`Escolha um número entre 1 e ${dificuldade}`);
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatoio){
        let tentativa = numeroTentativas > 1 ? "tentativas":"tentativa";
        exibirTextoNaTela ("h1","Acertou!");
        exibirTextoNaTela ("p",`Você descobriu o número secreto ${numeroAleatoio}, em ${numeroTentativas} ${tentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroAleatoio){
            exibirTextoNaTela ("h1","Jogo do número secreto");
            exibirTextoNaTela ("p",`O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela ("h1","Jogo do número secreto");
            exibirTextoNaTela ("p",`O número secreto é maior que ${chute}`);
            }
            numeroTentativas ++;
            limparCampo();
        } 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * dificuldade +1);
    let quantidadeDeElementosDaLista = listaNumeroTentativas.length;

    if (quantidadeDeElementosDaLista == dificuldade){
        listaNumeroTentativas = [];
    }

    if (listaNumeroTentativas.includes(numeroEscolhido)){
        gerarNumeroAleatorio;
    } else {
        listaNumeroTentativas.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = " ";
}

function reset(){
    numeroTentativas = 1;
    numeroAleatoio = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}