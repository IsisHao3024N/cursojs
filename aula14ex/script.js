function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("Verifique os dados e tente novamente.")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 10 ){
                img.setAttribute('src','foto-menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','foto-ojovem.jpg')
            }else if (idade < 50) {
                img.setAttribute('src','foto-homem.jpg')
            } else{
                img.setAttribute('src','foto-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Munher'
            if(idade >=0 && idade < 10 ){
                img.setAttribute('src','foto-menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','foto-ajovem.jpg')
            }else if (idade < 50) {
                img.setAttribute('src','foto-mulher.jpg')
            } else{
                img.setAttribute('src','foto-idosa.jpg')
            }
        }
        
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
    }
}