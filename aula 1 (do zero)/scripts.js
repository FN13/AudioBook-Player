const numerodefaixas = 10;
let tatocando = 0;
const audiocapitulo = document.getElementById('x1');
let atual = 1;

//Botões
const botaoavanca = document.getElementById('avanca');
const botaovolta = document.getElementById('volta');
const botaopp = document.getElementById('play-pause');


function tocar() {
      audiocapitulo.play();
      botaopp.classList.add('bi-pause-circle-fill');
      botaopp.classList.remove('bi-play-circle-fill');  
    }

function pausar() {
    audiocapitulo.pause();
    botaopp.classList.remove('bi-pause-circle-fill');
      botaopp.classList.add('bi-play-circle-fill');  
}

function tocarfaixa() {
    if (tatocando === 0) {
        tocar();
        tatocando = 1;
    } 
    else{
        pausar();
        tatocando = 0;
    }
}

botaopp.addEventListener('click', tocarfaixa);

function avancarfaixa(){
    if (atual === numerodefaixas) {
        atual = 1;
        
    } else {
        atual = atual + 1;     
    }
    audiocapitulo.src = './books/dom-casmurro/' + atual + '.mp3';
}

botaoavanca.addEventListener('click', avancarfaixa)

function voltarfaixa(){
    if (atual === 1) {
        atual = 10;
        
    } else {
        atual = atual - 1;     
    }
    audiocapitulo.src = './books/dom-casmurro/' + atual + '.mp3';
}

botaovolta.addEventListener('click', voltarfaixa)