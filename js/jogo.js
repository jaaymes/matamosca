    
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMoscaTempo = 1500
        
} else if (nivel === 'dificil') {
    criaMoscaTempo = 1000
    
} else if (nivel === 'chucknorris'){
    criaMoscaTempo = 750
    
}



function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    
}

ajustaTamanhoJogo()

//adicionar cronometro no jogo  
var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(mosca)
        window.location.href = 'venceu.html'
    } else {
       document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function posicaoRondomica() { //gera posicao rondomica na tela
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        
        if(vidas > 3){ // redireciona para outra pagina
        window.location.href = 'fimdejogo.html'
        } else {
        document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
        vidas++
        }
    }
    var x = Math.floor(Math.random()* largura) - 100 //define posicao da largura
    var y = Math.floor(Math.random()* altura) - 100  // define posicao da altura

    x = x < 0 ? 0: x
    y = y < 0 ? 0: y

    // console.log(x, y)

    //criando elementos e acessando elementos
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //define tamanho e lado da imagem aleatorios
    mosca.style.left = x + 'px' //posicao aliatoria
    mosca.style.top = y + 'px' // posicao aliatoria
    mosca.style.position = 'absolute' // posicao
    mosca.id='mosca'
    mosca.onclick = function(){  //clica na mosca e remove ela
        this.remove()
    }
    document.body.appendChild(mosca) // insere o elemento filho 
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*5)

    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
        case 4:
            return 'mosquito5'
    }
    console.log(classe)
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
    console.log(classe)
}

