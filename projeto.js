function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
 var hora = data.getHours()
msg.innerHTML = `<strong> Now is ${hora} hours </strong>`
    if(hora >= 0 && hora < 12){
    img.src = './imagens/manha.png'
    document.body.style.background = '#fec05c'
    }
    else if(hora >= 12 && hora < 18) {
        img.src = './imagens/tarde.png'
        document.body.style.background = '#ea5d02'
    }

    else{
        img.src = './imagens/noite.png'
        document.body.style.background = '#372a44'
    }

}
