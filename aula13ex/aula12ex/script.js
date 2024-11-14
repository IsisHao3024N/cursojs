function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
   //var hora =19
    if(hora >= 0 && hora < 12) {
        img.src = 'img/manha1.png'
        document.body.style.background ='#B47033'
        msg.innerHTML =`Agora são ${hora} horas da manhã. Bom Dia!`
       
    }else if(hora >= 12 && hora < 18) {
        img.src ='img/tarde.png'
        msg.innerHTML =`Agora são ${hora} horas da tarde. Boa Tarde!`
        document.body.style.background = '#D34402'
    }else{
        img.src = 'img/noite.png';
        document.body.style.background= '#161717';
        msg.innerHTML =`Agora são ${hora} horas da noite. Boa Noite!`;
        
    }
}

