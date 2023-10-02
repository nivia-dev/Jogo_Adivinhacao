let chute = document.getElementById('chute')
let resposta = document.getElementById('resposta');

let nDigitado = document.getElementById('nDigitado');

let tentativa = document.getElementById('tentativa');

let result = document.querySelector(".result")

let aleatorio = Math.floor( Math.random() * 100 + 1);

let contador = 0;

//Funções

function adivinhar(){

	//Captação dos números digitados
	
	let palpite = document.getElementById('chute').value;


	//gravação de números digitados

	if(palpite == aleatorio){
		
		result.innerHTML = 'Parabéns, acertou!';
		reiniciar()

	} else if(palpite > 100){

		result.innerHTML = "O número deve ser entre 1 e 100.";
	
	}else {
			
			//Gravação de números
		
		nDigitado.innerHTML += palpite + ", ";

			//resultado

		resultado(palpite, aleatorio);

			//tentativas

		totTentativa();

	}

}

function totTentativa(){


	contador += 1

	tentativa.innerHTML = contador;

	if(tentativa.innerHTML == 10){
		result.innerHTML = "Perdeu. Você já esgotou todas as tentativas"
		reiniciar()
	}
}


function resultado(a , b){
		if(a < b  && b - a >= 10 ){
			resposta.innerHTML = "<span style='color:blue'>Tente um número maior, você está frio. </span>";
		} else if(a < b && b - a < 10){
			resposta.innerHTML = "<span style='color:red'>Tente um número maior, você está quente</span>";
		} else if(a > b && a - b >= 10){
			resposta.innerHTML = "<span style='color:blue'>Tente um número menor, você está frio</span>";
		} else {
			resposta.innerHTML = "<span style='color:red'>Tente um número menor, você está quente</span>";
		}
}

function reiniciar(){
	resposta.innerHTML = "";
	nDigitado.innerHTML = "";
	tentativa.innerHTML = "";
	contador = 0;
	aleatorio = Math.floor( Math.random() * 100 + 1);
}