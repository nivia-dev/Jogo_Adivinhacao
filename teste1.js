let aleatorio = 0
let contador = 1
let min = 1
let max = 100
let frase = ''

let numero = document.querySelector('#numero')
let jogar = document.querySelector('#jogar')
let resposta = document.querySelector('#resposta')

function numeroAleatorio() {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(aleatorio)
}

function bJogar(){
    jogar.setAttribute('disabled', 'disabled')
}

function aJogar() {
    jogar.removeAttribute('disabled')
}


function validarJogo(num) {
    if(num <=0 || numero > 100) {
        console.log('Tentativa inválida!')
        resposta.classList.add('errou')
        mensagem('Digite um número entre 1 e 100')
        bJogar()
        numero.value = ''
    } else {
        console.log('Número válido')
    }
}

function adivinhar() {
    console.log("Jogando")
    verificarAcerto()
}

function mensagem(mens) {
    resposta.textContent = mens
    setTimeout(function() {
        resposta.textContent = ""
        resposta.classList.remove('acertou')
        resposta.classList.remove('errou')
        numero.value = ''
    }, 3000)
}

function fimJogo(situ) {
    switch (situ) {
        case 'Acertou':
            resposta.classList.add('acertou')
            mensagem ('Acertou, o número era' + aleatorio)
        break
        case 'Maior':
            mensagem('tente um número menor')
            resposta.classList.add('errou')
        break
        case 'Menor':
            resposta.classList.add('errou')
            mensagem('Tenta um número maior')
        break
        default:
            console.log('Informe a situação')
    }
}

function verificarAcerto() {
    chute = parseInt(document.querySelector('#numero').value)
    console.log('Número de tentativa' +contador)
    console.log('Chute' +chute)

    if(aleatorio === chute) {
        console.log('Acertou')
        situ = 'Acertou'
        fimJogo(situ)
        numeroAleatorio()
    } else if (chute > numero) {
        console.log('Maior')
        situ = 'Chute maior'
        fimJogo(situ)
    } else if (chute < numero) {
        console.log('Menor')
        situ = 'Chute Menor'
        fimJogo(situ)
    } else {
        console.log('Impossível verificar se acertou!')
    }
}